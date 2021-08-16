import { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";

class ReadFileController{

  readFile = (req: Request, res: Response, next: NextFunction) => {
    const filePath = path.join(path.resolve(), "public", "bigFile.txt");
    const readStream = fs.createReadStream(filePath);
    readStream.on("data", (chunk) => {
      res.write(chunk.toString());
    });
    readStream.on("end", () => {
      res.end();
    })
    readStream.on("error", (err) => {
      next(err);
    })
  }
}


export default new ReadFileController();