import { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";
import readline from "readline";
import keyValLineToObject from "../services/lineToObject.service";

class WriteFileController {

  writeFile = (req: Request, res: Response, next: NextFunction) => {
    
    const readFilePath = path.join(path.resolve(), "public", "bigFile.txt");
    const writeFilePath = path.join(path.resolve(), "public", "bigFile.json");

    // creating readable
    const readStream = fs.createReadStream(readFilePath);
    readStream.on("error", (err) => {
      next(err);
    })

    // creating writable
    const writeStream = fs.createWriteStream(writeFilePath);
    writeStream.on("error", (err) => {
      next(err);
    })
    
    // reading line by line from the readable
    const rl = readline.createInterface({
      input: readStream,
    })

    // assembling json file 
    writeStream.write("[");

    rl.on("line", line => {

      //converting the line to an object
      const lineObj = keyValLineToObject(line);

      if(!readStream.readableEnded){
        writeStream.write(JSON.stringify(lineObj) + ",");
      } else {
        writeStream.write(JSON.stringify(lineObj));
      }
    })

    rl.on("close", () => {
      writeStream.end("]");
    });

    // sending response after writing all the data
    writeStream.on("finish", () => {
      res.json({
        message: "success"
      })
    })

  }
}

export default new WriteFileController();