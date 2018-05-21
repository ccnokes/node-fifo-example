const fs = require('fs');
const { spawn, fork } = require('child_process');

// create fifo
// this will create a "file" in this folder that is invisible on macOS by default. Run ls -l to see it.
let fifo = spawn('mkfifo', ['testfifo']);

// this occurs after fifo is created
fifo.on('exit', function(status) {

  // have to pass a file descriptor for FIFOs for some reason, file name won't work
  const fd = fs.openSync('./testfifo', 'r+');
  let fifoRs = fs.createReadStream(null, { fd });

  // start separate node.js process
  fork(require.resolve('./write-to-fifo'));

  // get a hello from C++
  setTimeout(() => {
    spawn('./hello');
  }, 1500);

  // get a hello from bash
  setTimeout(() => {
    spawn('./hello.sh');
  }, 2500);


  // log out when it's been written to
  fifoRs.on('data', data => {
    console.log(data.toString());
  });

});
