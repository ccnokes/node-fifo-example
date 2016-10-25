const fs = require('fs');
const { spawn, fork } = require('child_process');

// create fifo
// this will create a "file" in this folder that is invisible on macOS by default. Run ls -l to see it.
let fifo = spawn('mkfifo', ['testfifo']);

// this occurs after fifo is created
fifo.on('exit', function(status) {

  let fifoRs = fs.createReadStream('./testfifo');

  // start separate node.js process
  fork(require.resolve('./write-to-fifo'));

  // log out when it's been written to
  fifoRs.on('data', data => {
    console.log(data.toString());
  });

});
