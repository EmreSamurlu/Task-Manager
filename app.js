// Third party Modules
const express = require("express");
// My Modules
const tasks = require("./routes/tasksRouter");
const connectDB = require("./db/connect");
require("dotenv").config()

//* APP
const app = express();
//* Everything will be below this line about app

// Middlewares
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

// Server Listening
const port = 3000;

const start = async () =>{
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
}

start();
