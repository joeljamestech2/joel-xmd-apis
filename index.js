const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Root Endpoint: Serve meme directly
app.get('/', async (req, res) => {
    try {
        const meme = await axios.get('https://meme-api.com/gimme', { timeout: 10000 });
        res.json({
            title: meme.data.title,
            postLink: meme.data.postLink,
            url: meme.data.url,
            subreddit: meme.data.subreddit
        });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Failed to fetch meme' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Meme server running on port ${PORT}`);
});
