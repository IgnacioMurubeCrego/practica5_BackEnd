// @deno-types="npm:@types/express@4"
import express from "express";
import mongoose from "mongoose";

const MONGO_URL = Deno.env.get("MONGO_URL");

if (!MONGO_URL) {
  console.log("No mongo URL found");
  throw new Error("MONGO_URL not defined.");
}

await mongoose.connect(MONGO_URL);
const app = express();
app.use(express.json());

app
  .get("/", () => console.log("Working!"));

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});