const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.status(200).send('Relay server ready✨'));

app.post('/', async (req, res) => {
  console.log('LINEからPOSTリクエストを受信✨');
  try {
    const gasUrl = 'https://script.google.com/macros/s/AKfycbzA0qrVo2dlb5Ri9SzAgq4U_D7kHHoBLxGMcpktsvtgdXzBp9rG614ncybyLDmiK9_C4A/exec';  // ← 絶対最新にすること✨
    const result = await axios.post(gasUrl, req.body);
    res.status(200).send(result.data);
  } catch (error) {
    console.error('GASへのリクエストエラー:', error);
    res.status(500).send('error');
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Relay server started✨ (Port:${PORT})`));

