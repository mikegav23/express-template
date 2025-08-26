import { integer, pgTable, varchar, text } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

// Example
export const usersTable = pgTable("users", {
  id: text("id")
    .primaryKey()
    .$default(() => createId()),
  username: varchar({ length: 255 }).notNull().unique(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});
