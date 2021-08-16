import express from "express";
import writeFileController from "../controllers/writeFile.controller";

const writeFileRouter = express.Router();



writeFileRouter.get("/", writeFileController.writeFile);



export default writeFileRouter;