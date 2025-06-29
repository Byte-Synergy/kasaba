'use strict';
import express from "express";
import { config } from "dotenv";
config()

const app = express()
const { PORT } = process.env;

app.listen(PORT, () => {
    import("./src/core/start")
  console.log(`Server ${PORT} port bilan ishga tushdi`);
});