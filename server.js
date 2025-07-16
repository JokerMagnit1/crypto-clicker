const express = require('express');
const app = express();
app.use(express.json());

let userBalances = {};

app.post('/save-click', (req, res) => {
  const { userId, btc } = req.body;
  if (!userBalances[userId]) userBalances[userId] = 0;
  userBalances[userId] += btc;
  res.json({ status: 'ok', balance: userBalances[userId].toFixed(8) });
});

// ✅ Используй порт из ENV, иначе Render закроет процесс
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Сервер запущен на порту ${PORT}`);
});