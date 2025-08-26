import { Router, Request, Response } from "express";
import { db } from "../db/db";
import { usersTable } from "../db/schema";
import { z } from "zod";
import { userSchema } from "../zod/userSchema";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const users = await db.select().from(usersTable);

    req.log.info("Users fetched from database");

    return res.status(201).json({ users });
  } catch (error) {
    req.log.error({ err: error }, "Database select failed");

    return res.status(500).json({
      error: "Failed to fetch users from database",
    });
  }
});

router.post("/", async (req: Request, res: Response) => {
  req.log.info({ body: req.body }, "Incoming create user request");

  // Validate body
  const result = userSchema.safeParse(req.body);

  if (!result.success) {
    const formattedError = z.treeifyError(result.error);

    req.log.warn({ error: formattedError }, "Validation failed");

    return res.status(400).json({
      error: "Invalid request data",
      details: formattedError,
    });
  }

  const user = {
    username: result.data.username,
    age: result.data.age,
    email: result.data.email,
  } as typeof usersTable.$inferInsert;

  try {
    await db.insert(usersTable).values(user);

    req.log.info({ user }, "User inserted into database");

    return res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    req.log.error({ err: error }, "Database insert failed");

    return res.status(500).json({
      error: "Failed to insert user into database",
    });
  }
});

export default router;
