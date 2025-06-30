'use strict';
import express from "express";
import { config } from "dotenv";
import bot from "./core/bot";
config()

// index.js
import fs from "fs";
import path from "path";

const app = express()
const { PORT } = process.env;

app.listen(PORT, () => {
  const commandsPath = path.join(__dirname, "../commands");

  fs.readdirSync(commandsPath).forEach((file) => {
    const command = require(`../commands/${file}`);
    if (typeof command.default === "function") {
      command.default(bot);
    }
  });

  // Botni ishga tushirish
  bot.launch({
    dropPendingUpdates: true,
  }).then(() => {
    console.log("🤖 Bot ishga tushdi");
  }).catch((err) => {
    console.error("❌ Xatolik:", err);
  });

  // Yopish uchun signal
  process.once("SIGINT", () => bot.stop("SIGINT"));
  process.once("SIGTERM", () => bot.stop("SIGTERM"));
  console.log(`Server ${PORT} port bilan ishga tushdi`);
});