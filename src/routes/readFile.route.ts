import express from "express";
import readFileController from "../controllers/readFile.controller";

const readFileRouter = express.Router();



readFileRouter.get("/", readFileController.readFile);



export default readFileRouter;