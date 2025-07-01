class UserHelper {
    static isRealUser(ctx) {
      if (!ctx || !ctx.from || !ctx.from.id) return false;
  
      const isBot = ctx.from.is_bot || false;
      const username = ctx.from.username || null;
      const languageCode = ctx.from.language_code || null;
  
      // Foydalanuvchi haqiqiy bo‘lishi uchun: bot bo‘lmasligi va ba'zi metadata bo‘lishi kerak
      if (isBot) return false;
      if (!username && !languageCode) return false;
  
      return true;
    }
  }
  
  module.exports = UserHelper;
  