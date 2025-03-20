const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/', async (req, res) => {
  try {
    const gasUrl = 'https://script.google.com/macros/s/AKfycbwFC_8V2oNT4gvsV9dYNL3FoeriHhIuBC8IarGuyAK-rXF4kDOY5K6vn0KCeCQS_p-Rsg/exec';
    const result = await axios.post(gasUrl, req.body);
    res.status(200).send(result.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Relay server started✨`));
