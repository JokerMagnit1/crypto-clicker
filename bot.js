const TelegramBot = require('node-telegram-bot-api');
const token = '8098721049:AAGRrKEbOnqsAKDubJqVGX-x9R4vhcPxv_Y'; // ← вставь свой
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, `👋 Привет, ${msg.from.first_name}!\nНажми /play, чтобы открыть игру.`);
});

bot.onText(/\/play/, (msg) => {
  bot.sendMessage(msg.chat.id, "🎮 Открыть игру:", {
    reply_markup: {
      inline_keyboard: [[
        {
          text: "Играть",
          web_app: {
            url: "https://jokermagnit1.github.io/crypto-clicker/" // ← сюда вставь ссылку на HTML-игру
          }
        }
      ]]
    }
  });
});