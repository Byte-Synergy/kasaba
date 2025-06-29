// index.js
import bot from "./bot";
import fs from "fs";
import path from "path";

// Kommandlarni yuklash
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
