import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import apiAuthRouter from "./routes/auth.routes.js";
import apiMessageRouter from "./routes/message.routes.js";
import apiUserRouter from "./routes/users.routes.js";
import connectMongoDB from "./connectMongoDB/connectMongoDB.js";

dotenv.config(); //access to env value

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // middleware to access the json body
app.use(cookieParser());
app.use("/api/auth", apiAuthRouter);
app.use("/api/messages", apiMessageRouter);
app.use("/api/users", apiUserRouter);

app.listen(PORT, () => {
  console.log(`Server start at http://localhost:${PORT}`);
  connectMongoDB();
});
