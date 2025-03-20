const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.status(200).send('Relay server ready✨'));

app.post('/', async (req, res) => {
  console.log('LINEからPOSTリクエストを受信✨');
  try {
    const gasUrl = 'https://script.google.com/macros/s/AKfycbwwtfSKSO9zNfMZc_eg-Omdjv_ZFej_OgFqn2Ngq2lpKRlY6qKDx71Gd2akfUSx_aQr7w/exec';
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
