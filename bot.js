const TelegramBot = require('node-telegram-bot-api');
const token = '8098721049:AAGRrKEbOnqsAKDubJqVGX-x9R4vhcPxv_Y'; // ← вставь свой
const bot = new TelegramBot(token, { polling: true });
const withdrawBtn = document.getElementById("withdrawBtn");

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

withdrawBtn.addEventListener("click", () => {
  if (balance >= 0.0001) {
    alert("✅ Запрос на вывод отправлен! (вывод работает как игровая симуляция)");
    balance = 0;
    balanceEl.textContent = "Баланс: " + balance.toFixed(8) + " BTC";
    
    // Можно добавить отправку на сервер:
    // fetch("https://crypto-clicker.onrender.com/withdraw", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ userId, amount: balance })
    // });
  } else {
    alert("❌ Недостаточно BTC для вывода. Нужно минимум: 0.00010000 BTC");
  }
});
