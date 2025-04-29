const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Root Endpoint: Send formatted JSON
app.get('/', (req, res) => {
    const data = {
        title: 'Joel XMD Bot',
        thumbnail: 'owner.jpg',
        img: 'starting.jpg',
        caption: 'This is Joel XMD'
    };
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data, null, 4)); // 4-space indentation
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Joel XMD server running on port ${PORT}`);
});
