process.on("message", (msg) => {
  console.log(`Message from parent: ${msg}`);
  process.send(`Hello, parent! I am ${process.pid}`);
  process.exit(0)
});
