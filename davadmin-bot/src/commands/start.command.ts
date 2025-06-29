import { Markup } from "telegraf";
import bot from "../core/bot";
import { keyboard } from "telegraf/markup";
import { Login } from "../service/start.service";

// WebApp URL — bu sizning frontend admin panelingiz manzili
const webAppUrl = "http://localhost:3000/";

interface StartCommandContext {
    reply: (text: string, extra?: any) => Promise<any>;
    from: { id: number }; // Add 'from' property with 'id' field
    message: { text: string };
}

interface Bot {
    start: (callback: (ctx: StartCommandContext) => void) => void;
    on: (event: string, callback: (ctx: StartCommandContext) => void) => void;
}

const userStates = new Map()

export default function StartCommand(bot: Bot): void {
    bot.start(async (ctx: StartCommandContext) => {
      userStates.set(ctx.from.id, { step: "awaiting__login" });
      await ctx.reply("asSalamu alaykum va rahmatullah. Loginni kiriting...");
    });
  
    bot.on("text", async (ctx: StartCommandContext) => {
      const userId = ctx.from.id;
      const userState = userStates.get(userId);
  
      if (!userState) {
        await ctx.reply("Iltimos, avval /start buyrug'ini yuboring.");
        return;
      }
  
      if (userState.step === "awaiting__login") {
        userState.login = ctx.message?.text.trim();
        userState.step = "awaiting__password";
        await ctx.reply("🔒 Parolingizni kiriting...");
      }
  
      else if (userState.step === "awaiting__password") {
        userState.password = ctx.message?.text.trim();
  
        // ✅ Tekshiruv chaqirildi
        const result = await Login(userState.login, userState.password);
        const token = result.token

        if (!result.success) {
          await ctx.reply(`❌ Kirishda xatolik: ${result.error}`);
          userStates.delete(userId);
          return;
        }
  
        await ctx.reply("✅ Tizimga muvaffaqiyatli kirdingiz!");
        await ctx.reply("➡️ Admin panel:", {
          reply_markup: {
            keyboard: [[
              {
                text: "🔐 Admin Panelga Kirish",
                web_app: { url: `${webAppUrl}login?token=${token}` }
              }
            ]],
            resize_keyboard: true,
          },
        });
  
        // Token saqlash kerak bo‘lsa, shu yerda saqlang
        userStates.delete(userId); // Session tozalanmoqda
      }
    });
  }
