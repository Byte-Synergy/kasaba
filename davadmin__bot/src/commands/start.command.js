const fs = require("fs");
const path = require("path");
const { Login } = require("../services/login.service");
require("dotenv").config();

const webAppUrl = process.env.WEB__URL;
const superAdmins = new Set(["ByteSynergy_CEO", "drccoder"]);

const userStates = new Map();
const logPaginationStates = new Map();
const loggedInUsers = new Set();
const userMessages = new Map(); // User message ID'lari

function logLoginEvent(userId, username) {
  const logDir = path.join(__dirname, "../logs");
  const logFile = path.join(logDir, "admin-logins.txt");
  if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);

  const time = new Date().toISOString();
  const line = `[${time}] ID: ${userId}, Username: ${username || "N/A"}\n`;
  fs.appendFileSync(logFile, line, "utf-8");
}

function StartCommand(bot) {
  // /start komandasi
  bot.start(async (ctx) => {
    const userId = ctx.from.id;
    if (loggedInUsers.has(userId)) {
      return await ctx.reply("✅ Сиз тизимга аввал киргансиз.");
    }

    userStates.set(userId, { step: "awaiting__login" });

    const msg = await ctx.reply(
      `Ассалому алайкум. Сиз давлат ва жамоат хизматлари ходимлари касаба уюшмалари Республика кенгашининг расмий админ ботига хуш келибсиз.\n\nИлтимос, тизимга кириш учун логинингизни киритинг.`
    );

    userMessages.set(userId, [msg.message_id]);
  });

  // Kirish loglari
  bot.hears("📊 Kirish Loglari", async (ctx) => {
    const userId = ctx.from.id;
    const username = ctx.from.username || null;
    if (!superAdmins.has(username)) {
      return await ctx.reply("⛔ ⛔ Сизда бу функцияга рухсат йўқ.");
    }

    const logPath = path.join(__dirname, "../logs/admin-logins.txt");
    if (!fs.existsSync(logPath)) {
      return await ctx.reply("❌ Лог файли топилмади.");
    }

    const logs = fs.readFileSync(logPath, "utf-8");
    const logLines = logs.trim().split("\n").reverse();
    const totalPages = Math.ceil(logLines.length / 10);
    const page = 1;

    logPaginationStates.set(userId, page);
    await sendLogPage(ctx, logLines, page, totalPages, false);
  });

  // Callback tugmalar
  bot.on("callback_query", async (ctx) => {
    const userId = ctx.from.id;
    const data = ctx.callbackQuery.data;

    if (data === "restart_bot") {
      return await bot.handleUpdate({
        message: {
          ...ctx.update.callback_query.message,
          text: "/start",
          from: ctx.from,
        },
      });
    }

    if (!data.startsWith("log_page_")) return;

    const page = parseInt(data.replace("log_page_", ""), 10);
    logPaginationStates.set(userId, page);

    const logPath = path.join(__dirname, "../logs/admin-logins.txt");
    if (!fs.existsSync(logPath))
      return await ctx.reply("❌ Лог файли топилмади.");
    const logs = fs.readFileSync(logPath, "utf-8");
    const logLines = logs.trim().split("\n").reverse();
    const totalPages = Math.ceil(logLines.length / 10);

    await ctx.answerCbQuery();
    await sendLogPage(ctx, logLines, page, totalPages, true);
  });

  async function sendLogPage(ctx, logLines, page, totalPages, isEdit) {
    const pageSize = 10;
    const start = (page - 1) * pageSize;
    const selectedLines = logLines.slice(start, start + pageSize);

    const readableLogs = selectedLines
      .map((line) => {
        const match = line.match(/\[(.*?)\] ID: (\d+), Username: (.*)/);
        if (!match) return null;
        const [, isoDate, id, username] = match;
        const date = new Date(isoDate || "");
        const localDate = date.toLocaleString("uz-UZ", {
          timeZone: "Asia/Tashkent",
          hour12: false,
        });

        return `\n🆔 *ID:* \`${id}\`\n📌 *Username:* \`${username}\`\n🕒 *Vaqт:* \`${localDate}\``;
      })
      .filter(Boolean)
      .join("\n\n");

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
    if (page > 1)
      fullButtons.push({ text: "⬅️", callback_data: `log_page_${page - 1}` });
    fullButtons.push(...numberedButtons);
    if (page < totalPages)
      fullButtons.push({ text: "➡️", callback_data: `log_page_${page + 1}` });

    const message = `📄 *Logлар (саҳифа ${page}/${totalPages}):*\n\n${readableLogs}`;
    const options = {
      reply_markup: { inline_keyboard: [fullButtons] },
      parse_mode: "Markdown",
    };

    if (isEdit) {
      await ctx.editMessageText(message, options);
    } else {
      await ctx.reply(message, options);
    }
  }

  // 🚪 Logout
  bot.hears("🚪 Tизимдан чиқиш", async (ctx) => {
    const userId = ctx.from.id;
    loggedInUsers.delete(userId);
    userStates.delete(userId);

    const msgs = userMessages.get(userId) || [];
    for (const msgId of msgs) {
      try {
        await ctx.telegram.deleteMessage(ctx.chat.id, msgId);
      } catch (_) {}
    }

    await ctx.reply("🔓 Сиз тизимдан чиқдингиз.", {
      reply_markup: {
        remove_keyboard: true,
      },
    });

    await ctx.reply("♻️ Қайта кириш учун /start тугмасини босинг");
    userMessages.delete(userId);
  });

  // 🔐 Login Jarayoni
  bot.on("text", async (ctx) => {
    const userId = ctx.from.id;
    const userState = userStates.get(userId);
    if (!userState) return;

    const msgId = ctx.message.message_id;
    const stored = userMessages.get(userId) || [];
    stored.push(msgId);
    userMessages.set(userId, stored);

    if (userState.step === "awaiting__login") {
      userState.login = ctx.message.text.trim();
      userState.step = "awaiting__password";
      const msg = await ctx.reply("🔒 Паролингизни киритинг...");
      stored.push(msg.message_id);
      userMessages.set(userId, stored);
    } else if (userState.step === "awaiting__password") {
      userState.password = ctx.message.text.trim();
      const loginResult = await Login(userState.login, userState.password);

      if (!loginResult.success) {
        await ctx.reply(
          `❌ *Киришда хатолик:* ${
            loginResult.error || "Логин ёки парол нотўғри. Қайта киритинг."
          }`,
          { parse_mode: "Markdown" }
        );

        userStates.set(userId, { step: "awaiting__login" });
        const msg = await ctx.reply("🔁 Логинингизни қайта киритинг:");
        const updatedStored = userMessages.get(userId) || [];
        updatedStored.push(msg.message_id);
        userMessages.set(userId, updatedStored);
        return;
      }

      const token = loginResult.token;
      const username = ctx.from.username || null;
      logLoginEvent(userId, username);
      loggedInUsers.add(userId);

      await ctx.reply("✅ Тизимга муваффақиятли кирдингиз!");

      const isSuperAdmin = superAdmins.has(username);
      const buttons = [];

      buttons.push([
        {
          text: "🔐 Admin Panelga Kirish",
          web_app: { url: `${webAppUrl}` },
        },
      ]);

      if (isSuperAdmin) {
        buttons.push([{ text: "📊 Kirish Loglari" }]);
      }

      buttons.push([{ text: "🚪 Tизимдан чиқиш" }]);

      await ctx.reply("👇 Қуйидагилардан бирини танланг:", {
        reply_markup: {
          keyboard: buttons,
          resize_keyboard: true,
        },
      });

      userStates.delete(userId);
      userMessages.delete(userId);
    }
  });
}

module.exports = StartCommand;
