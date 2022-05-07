const express = require("express");
const cors =require("cors")
const connectDB = require("./config/db");
const app = express();


const userRouter = require("./routes/userRouter");
const port = 5000;

connectDB();
app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
  res.send("api is running");
});
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`server is running in port ${port}`);
});
