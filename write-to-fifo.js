const fs = require('fs');

let fifoWs = fs.createWriteStream('./testfifo');

setInterval(() => {
  fifoWs.write(`Message from write-to-fifo: ${Math.random()}`);
}, 1000);
