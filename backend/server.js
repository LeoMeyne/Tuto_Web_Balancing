const express = require("express");
const app = express(); // App Init

const PORT = process.env.PORT;
const INSTANCE_NAME = process.env.INSTANCE_NAME; // The name of the instance (used to identify each backend)

// Main route that responds with the instance name and its port.
app.get("/", (req, res) => {
  res.send(`You are connected to ${INSTANCE_NAME} on port: ${PORT}`);
});


// Starting the server on the specified port
app.listen(PORT, () => {
  console.log(`${INSTANCE_NAME} running on port ${PORT}`);
});
