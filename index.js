const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/', async (req, res) => {
  try {
    const gasUrl = 'https://script.google.com/macros/s/AKfycbzA0qrVo2dlb5Ri9SzAgq4U_D7kHHoBLxGMcpktsvtgdXzBp9rG614ncybyLDmiK9_C4A/exec';
    const result = await axios.post(gasUrl, req.body);
    res.status(200).send(result.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('error');
  }
});

// 👇ここが大事✨
const PORT = process.env.PORT || 10000;  // PORTを10000に指定✨
app.listen(PORT, () => console.log(`Relay server started✨ (Port:${PORT})`));
