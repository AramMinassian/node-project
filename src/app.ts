import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import compression from "compression";
import postRouter from "./routes/posts.route";
import readFileRouter from "./routes/readFile.route";
import writeFileRouter from "./routes/writeFile.route";
import errorHandler from "./errorHandler";

dotenv.config();

export const PORT = process.env.PORT || 4000;

export const getApp = (): Express => {
  const app = express();

  app.use(express.json());
  app.use(compression());
  app.use(cors());
  
  app.use("/blog/posts", postRouter);
  app.use("/readfile", readFileRouter);
  app.use("/writefile", writeFileRouter);

  app.use(errorHandler);


  return app;
}