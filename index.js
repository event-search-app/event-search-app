const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.status(200).send('Relay server ready✨'));

app.post('/', async (req, res) => {
  console.log('LINEからPOSTリクエストを受信✨');
  try {
    const gasUrl = 'https://script.google.com/macros/s/AKfycbx_cmgYaAy9B8UAUOMjzPTtggYaExoFjihDdI-MlfiVV83Rx1dOnAvF927jER2RjY3hhQ/exec';
    const result = await axios.post(gasUrl, req.body);
    console.log('GASへのリクエスト成功:', result.data);
    res.status(200).send(result.data);
  } catch (error) {
    console.error('GASへのリクエスト失敗:', error.message);  // 👈ここが超大事✨
    if (error.response) {
      console.error('エラー詳細:', error.response.data);
    }
    res.status(500).send('error');
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Relay server started✨ (Port:${PORT})`));

app.get('/test-gas', async (req, res) => {
  try {
    const gasUrl = 'https://script.google.com/macros/s/AKfycbx_cmgYaAy9B8UAUOMjzPTtggYaExoFjihDdI-MlfiVV83Rx1dOnAvF927jER2RjY3hhQ/exec';
    console.log("🚀 RenderからGASにテストリクエストを送ります！");

    const response = await axios.post(gasUrl, { test: "Render からのリクエストです！" });

    console.log("🎯 GASのレスポンス:", response.data);
    res.send(response.data);
  } catch (error) {
    console.error("🔥 GASリクエストエラー:", error.toString());
    res.status(500).send('GASへのリクエストに失敗しました');
  }
});
