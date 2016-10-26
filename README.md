# node-fifo-example

Run with `npm start`

One node.js process will create a named pipe/FIFO, and log out any data written to it. The second node.js process will write to it once a second. A bash script and a C++ program will also write to it once. Look at `index.js` to see what's going on.

This only works on macOS.
