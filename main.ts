// @deno-types="npm:@types/express@4"
import express from "express";
import mongoose from "mongoose";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
const env = await load();

const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL");

if (!MONGO_URL) {
  console.log("No mongo URL found");
  Deno.exit(1);
}

try {
  await mongoose.connect(MONGO_URL);
} catch (error) {
  console.log(error);
}

const app = express();
app.use(express.json());

app
  .get("/", () => console.log("Working!"));

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

