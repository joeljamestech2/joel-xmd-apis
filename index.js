const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Root Endpoint: Send formatted JSON
app.get('/', (req, res) => {
    const data = {
        title: 'joel Xmd starting messages',
        bot_name: 'joel Xmd bot',
        creator: 'joeljamestech',
        thumbnail: 'owner.jpg',
        img: 'starting.jpg',
        caption: '╭━━ 『 ᴊᴏᴇʟ-ᴍᴅ ɪɴɪᴛɪᴀʟɪᴢᴇᴅ 』 ┃\n┃  ⚡ ʙᴏᴛ ɴᴀᴍᴇ: ᴊᴏᴇʟ-ᴍᴅ ┃\n┃  👑 ᴏᴡɴᴇʀ: ʟᴏʀᴅ ᴊᴏᴇʟ ┃\n┃  ⚙️ ᴍᴏᴅᴇ: ${config.MODE} ┃\n┃  🎯 ᴘʀᴇꜰɪx: ${config.PREFIX} ┃\n┃  ✅ ꜱᴛᴀᴛᴜꜱ: ᴏɴʟɪɴᴇ & ꜱᴛᴀʙʟᴇ\n╰━━━━━━━━━━━━━━━━━━━╯\n\n⚠️ ʀᴇᴘᴏʀᴛ ᴀɴʏ ɢʟɪᴛᴄʜᴇꜱ ᴅɪʀᴇᴄᴛʟʏ ᴛᴏ ᴛʜᴇ ᴏᴡɴᴇʀ.\n\n╭──────────────────★\n│ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟᴏʀᴅ ᴊᴏᴇʟ\n╰──────────────────★'
    };
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data, null, 4)); // 4-space indentation
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Joel XMD server running on port ${PORT}`);
});
