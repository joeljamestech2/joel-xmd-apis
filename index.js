const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// joel Xmd starting message from apis 
app.get('/', (req, res) => {
    res.json({
        title: 'joel Xmd bot',
        creator: 'joeljamestech'
        thumbnail: 'owner.jpg',
        image: 'starting.jpg',
        caption: 'This is Joel XMD'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`joel xmd server running on port ${PORT}`);
});
