const { fork } = require("child_process");

const child = fork("child.js");

child.on("message", (msg) => {
  console.log("Message from child process: " + msg);
});

child.on("close", (code) => {
  console.log("Child process exited with code: " + code);
});

child.send("Hello from parent process");
