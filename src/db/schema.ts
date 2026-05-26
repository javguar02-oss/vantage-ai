import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";

// Tabla de Usuarios
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  clerkId: text("clerk_id").unique().notNull(), 
  email: text("email").notNull(),
  plan: text("plan").default("FREE"),
  credits: integer("credits").default(5),
});