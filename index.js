const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Endpoint: meme
app.get('/meme', async (req, res) => {
    try {
        const meme = await axios.get('https://meme-api.com/gimme');
        res.json({
            title: meme.data.title,
            postLink: meme.data.postLink,
            url: meme.data.url,
            subreddit: meme.data.subreddit
        });
    } catch (err) {
        res.status(500).send({ error: 'Failed to fetch meme', details: err.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});
