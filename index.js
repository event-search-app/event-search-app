const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.status(200).send('Relay server ready✨'));

app.post('/', async (req, res) => {
  console.log('📩 LINEからPOSTリクエストを受信✨', req.body);

  try {
    const gasUrl = 'https://script.google.com/macros/s/AKfycbwUSL0QVuUPjyO_t4Kkwbjui5YI0bSXEARt0zTgiaChly-Xis5SPCE7J-AhaAU8GZs3fQ/exec';
    
    console.log('🚀 GASにリクエスト送信:', JSON.stringify(req.body));

    const result = await axios.post(gasUrl, req.body, {
      headers: { 'Content-Type': 'application/json' }  // ヘッダーを明示的に設定
    });

    console.log('✅ GASからのレスポンス:', result.data);
    res.status(200).send(result.data);
  } catch (error) {
    console.error('❌ GASへのリクエスト失敗:', error.message);
    
    if (error.response) {
      console.error('🔥 エラー詳細:', error.response.data);
    }
    
    res.status(500).send('error');
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Relay server started✨ (Port:${PORT})`));
