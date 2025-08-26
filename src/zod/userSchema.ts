import { z } from "zod";

const userSchema = z.object({
  username: z.string().min(1, "Username is required"),
  age: z.number().int().min(0),
  email: z.email(),
});

export { userSchema };
