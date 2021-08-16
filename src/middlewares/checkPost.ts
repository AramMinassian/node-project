import { Request, Response, NextFunction } from "express"
import { posts } from "../posts";


const checkPosts = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const idExists = posts.some(post => post.id === id);
  if(idExists) next();
  else res.status(404).json({
    error: "Not Found",
    message: "A post with the specified id does not exist"
  })
}

export default checkPosts;