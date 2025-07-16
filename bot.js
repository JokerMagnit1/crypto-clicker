const TelegramBot = require('node-telegram-bot-api');
const token = '8098721049:AAGRrKEbOnqsAKDubJqVGX-x9R4vhcPxv_Y'; // ← вставь свой
const bot = new TelegramBot(token, { polling: true });
const withdrawBtn = document.getElementById("withdrawBtn");

withdrawBtn.addEventListener("click", () => {
  if (balance >= 0.0001) {
    alert("✅ Запрос на вывод отправлен! (реализация вывода — зависит от тебя 😉)");
    // Отправка на сервер, если нужно:
    // fetch("/withdraw", { method: "POST", body: JSON.stringify({ userId, amount: balance }) })
    balance = 0;
    balanceEl.textContent = "Баланс: " + balance.toFixed(8) + " BTC";
  } else {
    alert("❌ Недостаточно BTC для вывода. Минимум: 0.00010000 BTC");
  }
});

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
