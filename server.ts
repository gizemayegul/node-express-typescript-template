import express, { Application, Express } from "express";
import dotenv from "dotenv";
import app from "./src/app";

dotenv.config();
// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 5005
const port = process.env.PORT || 5004;

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
