import { Request, Response, NextFunction } from "express"
import { posts } from "../posts";


const validateBody = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  if(!body) return res.status(400).json({
    error: "Bad request",
    message: "Body is missing"
  });

  if(!body.name) return res.status(400).json({
    error: "Bad request",
    message: "Name is missing"
  });
  if(!body.post) return res.status(400).json({
    error: "Bad request",
    message: "Post is missing"
  });

  next();
}

export default validateBody;