import { Telegraf } from "telegraf";
const { config } = require("dotenv");
config();

const { BOT_TOKEN } = process.env;

if (!BOT_TOKEN) {
    throw new Error("BOT_TOKEN aniqlanmadi. Iltimos .env faylni tekshiring.");
}
const bot = new Telegraf(BOT_TOKEN || "");

export default bot