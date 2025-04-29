const express = require('express');
const axios = require('axios');
const ytdl = require('ytdl-core');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Root Endpoint
app.get('/', (req, res) => {
    res.send('Welcome to Joel XMD Bot API!');
});

// Endpoint: dlytmp3
app.get('/dlytmp3', async (req, res) => {
    const { url } = req.query;
    if (!url) return res.status(400).send({ error: 'Missing YouTube URL' });

    try {
        const info = await ytdl.getInfo(url);
        const audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
        if (!audioFormats.length) throw new Error('No audio formats found.');

        res.json({ audioUrl: audioFormats[0].url });
    } catch (err) {
        res.status(500).send({ error: 'Failed to fetch MP3', details: err.message });
    }
});

// Endpoint: dlytmp4
app.get('/dlytmp4', async (req, res) => {
    const { url } = req.query;
    if (!url) return res.status(400).send({ error: 'Missing YouTube URL' });

    try {
        const info = await ytdl.getInfo(url);
        const videoFormats = ytdl.filterFormats(info.formats, 'videoandaudio');
        if (!videoFormats.length) throw new Error('No video formats found.');

        res.json({ videoUrl: videoFormats[0].url });
    } catch (err) {
        res.status(500).send({ error: 'Failed to fetch MP4', details: err.message });
    }
});

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

// Endpoint: gpt
app.post('/gpt', async (req, res) => {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).send({ error: 'Missing prompt' });

    try {
        const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
        const openai = new OpenAIApi(configuration);

        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
        });

        res.json({ response: response.data.choices[0].message.content });
    } catch (err) {
        res.status(500).send({ error: 'Failed to fetch GPT response', details: err.message });
    }
});

// Endpoint: deepseek
app.post('/deepseek', async (req, res) => {
    const { query } = req.body;
    if (!query) return res.status(400).send({ error: 'Missing query' });

    try {
        const response = await axios.post('https://api.deepseek.com/search', { query }, {
            headers: { Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}` }
        });

        res.json({ results: response.data });
    } catch (err) {
        res.status(500).send({ error: 'Failed to fetch DeepSeek results', details: err.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});
