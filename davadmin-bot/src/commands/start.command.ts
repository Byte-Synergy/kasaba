import fs from "fs";
import path from "path";
import { Markup } from "telegraf";
import bot from "../core/bot";
import { Login } from "../service/start.service";
import {config} from 'dotenv'
config()

const webAppUrl = process.env.WEB_URL;

const superAdmins = new Set([123456789, 987654321, 7100870460]);

const userStates = new Map();
const logPaginationStates = new Map<number, number>();

function logLoginEvent(userId: number, username: string) {
  const logDir = path.join(__dirname, "../logs");
  const logFile = path.join(logDir, "admin-logins.txt");

  if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);

  const time = new Date().toISOString();
  const line = `[${time}] ID: ${userId}, Username: ${username || "N/A"}\n`;

  fs.appendFileSync(logFile, line, "utf-8");
}

export default function StartCommand(bot: any): void {
  bot.start(async (ctx: any) => {
    userStates.set(ctx.from.id, { step: "awaiting__login" });
    return await ctx.reply("asSalamu alaykum va rahmatullah. Loginni kiriting...");
  });

  // 📊 Kirish Loglari
  bot.hears("📊 Kirish Loglari", async (ctx: any) => {
    const userId = ctx.from.id;
    if (!superAdmins.has(userId)) {
      return await ctx.reply("⛔ Sizda bu funksiyaga ruxsat yo'q.");
    }

    const logPath = path.join(__dirname, "../logs/admin-logins.txt");
    if (!fs.existsSync(logPath)) {
      return await ctx.reply("❌ Log fayli topilmadi.");
    }

    const logs = fs.readFileSync(logPath, "utf-8");
    const logLines = logs.trim().split("\n");
    const totalPages = Math.ceil(logLines.length / 10);
    const page = 1;

    logPaginationStates.set(userId, page);
    await sendLogPage(ctx, logLines, page, totalPages, false);
  });

  // 🔁 Pagination
  bot.on("callback_query", async (ctx: any) => {
    const userId = ctx.from.id;
    const data = ctx.callbackQuery.data;
    if (!data.startsWith("log_page_")) return;

    const page = parseInt(data.replace("log_page_", ""), 10);
    logPaginationStates.set(userId, page);

    const logPath = path.join(__dirname, "../logs/admin-logins.txt");
    if (!fs.existsSync(logPath)) {
      return await ctx.reply("❌ Log fayli topilmadi.");
    }

    const logs = fs.readFileSync(logPath, "utf-8");
    const logLines = logs.trim().split("\n");
    const totalPages = Math.ceil(logLines.length / 10);

    await ctx.answerCbQuery();
    await sendLogPage(ctx, logLines, page, totalPages, true);
  });

  // 🔄 Sahifa chiqarish funksiyasi (edit yoki reply)
  async function sendLogPage(ctx: any, logLines: string[], page: number, totalPages: number, isEdit: boolean) {
    const pageSize = 10;
    const start = (page - 1) * pageSize;
    const selectedLines = logLines.slice(start, start + pageSize);
  
    const readableLogs = selectedLines
      .map((line) => {
        const match = line.match(/\[(.*?)\] ID: (\d+), Username: (.*)/);
        if (!match) return null;
        const [_, isoDate, id, username] = match;
        const date = new Date(isoDate || "");
        const localDate = date.toLocaleString("uz-UZ", {
          timeZone: "Asia/Tashkent",
          hour12: false,
        });
  
        return `📌 *Username:* \`${username}\`\n🆔 *ID:* \`${id}\`\n🕒 *Vaqt:* \`${localDate}\``;
      })
      .filter(Boolean)
      .join("\n\n");
  
    const navigationButtons = [];
  
    // 🔢 Raqamli tugmalar (5 ta atrofida sahifa ko‘rsatiladi)
    const maxButtons = 5;
    let startPage = Math.max(1, page - Math.floor(maxButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxButtons - 1);
  
    if (endPage - startPage < maxButtons - 1) {
      startPage = Math.max(1, endPage - maxButtons + 1);
    }
  
    const numberedButtons = [];
    for (let p = startPage; p <= endPage; p++) {
      numberedButtons.push({
        text: p === page ? `• ${p} •` : `${p}`,
        callback_data: `log_page_${p}`,
      });
    }
  
    const fullButtons = [];
  
    if (page > 1) fullButtons.push({ text: "⬅️", callback_data: `log_page_${page - 1}` });
    fullButtons.push(...numberedButtons);
    if (page < totalPages) fullButtons.push({ text: "➡️", callback_data: `log_page_${page + 1}` });
  
    const message = `📄 *Loglar (sahifa ${page}/${totalPages}):*\n\n${readableLogs}`;
  
    const options = {
      reply_markup: {
        inline_keyboard: [fullButtons],
      },
      parse_mode: "Markdown",
    };
  
    if (isEdit) {
      await ctx.editMessageText(message, options);
    } else {
      await ctx.reply(message, options);
    }
  }

  // 🔐 Login / Password
  bot.on("text", async (ctx: any) => {
    const userId = ctx.from.id;
    const userState = userStates.get(userId);

    if (!userState) return;

    if (userState.step === "awaiting__login") {
      userState.login = ctx.message?.text.trim();
      userState.step = "awaiting__password";
      await ctx.reply("🔒 Parolingizni kiriting...");
    } else if (userState.step === "awaiting__password") {
      userState.password = ctx.message?.text.trim();
      const loginResult = await Login(userState.login, userState.password);

      if (!loginResult.success) {
        await ctx.reply(`❌ Kirishda xatolik: ${loginResult.error || "Login yoki parol noto'g'ri."}`);
        userStates.delete(userId);
        return;
      }

      const token = loginResult.token!;
      const username = ctx.from.username || "N/A";
      logLoginEvent(userId, username);

      await ctx.reply("✅ Tizimga muvaffaqiyatli kirdingiz!");

      const isSuperAdmin = superAdmins.has(userId);
      const buttons = []
      buttons.push(
        [{
          text: "🔐 Admin Panelga Kirish",
          web_app: { url: `${webAppUrl}login?token=${token}` }
        }]
      )

      if (isSuperAdmin) {
        buttons.push([
          {
            text: "📊 Kirish Loglari"
          }
        ]);
      }

      await ctx.reply("👇 Quyidagilardan birini tanlang:", {
        reply_markup: {
          keyboard: buttons,
          resize_keyboard: true,
        },
      });

      userStates.delete(userId);
    }
  });
}
