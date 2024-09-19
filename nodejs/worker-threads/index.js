const { Worker } = require("worker_threads");

const worker = new Worker("./worker.js");

worker.on("message", (sms) => {
    console.log("Received a message event from the worker file: ", sms);
})

worker.postMessage("Hello from the main thread");

worker.on("error", (err) => {
    console.log("Received an error event from the worker file: ", err);
})

worker.on("exit", (code) => {
    console.log("Received an exit event from the worker file: ", code);
})

console.log("From the main thread: ", process.pid)