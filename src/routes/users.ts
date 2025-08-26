import { Router, Request, Response } from "express";

const router = Router();

// Example routes
router.post("/", async (req: Request, res: Response) => {
  const userData = req.tasks.push(task);
  res.status(201).json(task);
});

export default router;
