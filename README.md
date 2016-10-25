# node-fifo-example

Run with `node index.js`

One node.js process will create a FIFO, and log out any data written to it. The second node.js process will write to it once a second.

Other processes can write to the FIFO too. For example, from Bash you can run `echo "Hello from bash" >> ./testfifo`, and you'll see that logged out as well. 
