const { Worker, isMainThread, parentPort } = require("worker_threads");
const os = require("os");

const numCPUs = os.cpus().length;

if (isMainThread) {
  // Main thread: create a pool of workers
  for (let i = 0; i < numCPUs; i++) {
    const worker = new Worker(__filename);
    worker.on("message", (msg) => {
      console.log(`Message from worker ${i}:`, msg);
    });
    worker.postMessage(`Task ${i}`);
  }
} else {
  // Worker thread: handle a task
  parentPort.on("message", (task) => {
    // Simulate a heavy task
    let result = 0;
    for (let i = 0; i < 1e8; i++) {
      result += i;
    }
    parentPort.postMessage(`${task} completed with result ${result}`);
  });
}
