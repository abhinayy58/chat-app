import path from "path";
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import CookieParser from "cookie-parser";

import authRouter from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";
import userRoute from "./routes/user.route.js";

import connectDb from "./config/db.js";
import { errorHandler, notFound } from "./middleware/ErrorMiddleware.js";
import { app, server } from "./socket/socket.js";



dotenv.config();
const port = process.env.PORT || 5500;  

app.use(express.json());
app.use(CookieParser());

morgan.token("body", (req) => JSON.stringify(req.body));

// app.use(morgan(':url :method :body'));

app.use(express.urlencoded({ extended: true }));

app.use(
  morgan(
    ':method :status :url :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'
  )
);

app.use("/api/auth", authRouter);
app.use("/api/user", userRoute);
app.use("/api/messages", messageRoute);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "frontends/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontends", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => res.send("Server is Ready"));
}

app.use(notFound);
app.use(errorHandler);
process.on("uncaughtException", function (err) {
  console.log(err);
  process.exit(1);
}); 
 
server.listen(port, () => {
  connectDb();
  console.log(`Server is running on port ${port}`);
});
