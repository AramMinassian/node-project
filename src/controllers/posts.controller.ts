import { Request, Response } from "express";
import { posts } from "../posts";
import idGenerator from "../utils/idGenerator";


class PostsController {

  getPosts = (req: Request, res: Response): void => {
    res.json(posts);
  }

  getPost = (req: Request, res: Response): void => {
    const { id } = req.params;
    const post = posts.find(post => post.id === id);
    res.json(post);
  }

  createPost = (req: Request, res: Response): void => {
    const newPost = {
      id: idGenerator(),
      name: req.body.name,
      post: req.body.post
    };
    posts.push(newPost);
    res.json(newPost);
  }

  updatePost = (req: Request, res: Response): void => {
    const { id } = req.params;
    const postIndex = posts.findIndex(post => post.id === id);
    const updatedPost = {
      id,
      name: req.body.name,
      post: req.body.post 
    }
    posts[postIndex] = updatedPost;
    res.json(updatedPost);
  }

  deletePost = (req: Request, res: Response): void => {
    const { id } = req.params;
    const postIndex = posts.findIndex(post => post.id === id);
    posts.splice(postIndex, 1);
    res.json({
      success: true
    })
  }
  
}

export default new PostsController();