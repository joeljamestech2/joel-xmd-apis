const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Root Endpoint: Send fixed JSON
app.get('/', (req, res) => {
    res.json({
        title: 'Joel XMD Bot',
        thumbnail: 'owner.jpg',
        img: 'starting.jpg',
        caption: 'This is Joel XMD'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Joel XMD server running on port ${PORT}`);
});
