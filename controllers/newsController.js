const axios = require('axios');

const apiKey = 'b7c70549a0f64b3e95f4f4ec56623d30';

async function getNews(req, res) {
  try {
    const url = `https://newsapi.org/v2/everything?q=perawatan%20wajah&apiKey=${apiKey}`;
    const response = await axios.get(url);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
}

module.exports = {
  getNews,
};
