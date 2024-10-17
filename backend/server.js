import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import apiAuthRouter from "./routes/auth.routes.js";
import apiMessageRouter from "./routes/message.routes.js";
import apiUserRouter from "./routes/users.routes.js";
import connectMongoDB from "./connectMongoDB/connectMongoDB.js";
import { app, server } from "./socket/socket.js";
import path from "path";

dotenv.config(); // Access to env value

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json()); // Middleware to access the JSON body
app.use(cookieParser());
app.use("/api/auth", apiAuthRouter);
app.use("/api/messages", apiMessageRouter);
app.use("/api/users", apiUserRouter);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
  connectMongoDB();
});
