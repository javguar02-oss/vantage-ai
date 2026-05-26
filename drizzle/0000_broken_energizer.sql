CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"clerk_id" text NOT NULL,
	"email" text NOT NULL,
	"plan" text DEFAULT 'FREE',
	"credits" integer DEFAULT 5,
	CONSTRAINT "users_clerk_id_unique" UNIQUE("clerk_id")
);
