const { parentPort } = require("worker_threads");

let sum = 0
for (let i = 0; i < 10000000; i++) {
    sum += i
}

parentPort.postMessage(sum)

parentPort.on("message", (msg) => {
    console.log("Message from main thread: ", msg)
    process.exit(0)
})