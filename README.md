# node-fifo-example

Run with `npm start`

One node.js process will create a named pipe/FIFO, and log out any data written to it. The second node.js process will write to it once a second. A bash script and a C++ program will also write to it once. Look at `index.js` to see what's going on.

This only works on macOS.

Full context for this repository in this [article](https://cameronnokes.com/blog/deep-dive-into-electron's-main-and-renderer-processes/#is-ipc-using-some-networking-protocol-eg-tcp-http-or-something-crazier-underneath-the-hood).
