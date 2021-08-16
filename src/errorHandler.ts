import { Request, Response, NextFunction} from "express";


const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    error: "Internal server error",
    message: "Something went wrong, please try again"
  })
}


export default errorHandler;