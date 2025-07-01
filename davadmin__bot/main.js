const express = require("express");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const bot = require("./src/core/bot");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  const commandsPath = path.join(__dirname, "./src/commands");
    if (!fs.existsSync(commandsPath)) {
        console.error("❌ Komandalar papkasi topilmadi:", commandsPath);
        return;
    }
    
  fs.readdirSync(commandsPath).forEach((file) => {
    
    const command = require(path.join(commandsPath, file));
    
    if (typeof command === "function") {
      command(bot);
    } else if (typeof command.default === "function") {
      command.default(bot);
    }
  });

  bot
    .launch({
      dropPendingUpdates: true,
    })
    .then(() => {
      console.log("🤖 Bot ishga tushdi");
    })
    .catch((err) => {
      console.error("❌ Xatolik:", err);
    });

  console.log(`Server ${PORT} port bilan ishga tushdi`);
});
