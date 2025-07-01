const { Telegraf } = require("telegraf");
const { config } = require("dotenv");
config();

const { BOT__TOKEN } = process.env;

if (!BOT__TOKEN) {
    throw new Error("BOT_TOKEN aniqlanmadi. Iltimos .env faylni tekshiring.");
}
const bot = new Telegraf(BOT__TOKEN || "");

module.exports = bot