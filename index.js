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
        channel_link: 'https://whatsapp.com/channel/0029Vak2PevK0IBh2pKJPp2K',
        channel_jid: '120363317462952356@newsletter',
        thumbnail: 'https://raw.githubusercontent.com/joeljamestech2/JOEL-XMD/refs/heads/main/mydata/media/joelXbot.jpg',
        image: 'https://raw.githubusercontent.com/joeljamestech2/JOEL-XMD/refs/heads/main/mydata/media/Xstarting.jpg',
        caption: 'Today we recognize your dedication, patience, and hard work. We thank you for your continued trust and loyalty, we will continue to serve you.'
    };
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data, null, 4)); // 4-space indentation
});

// Start server
app.listen(PORT, () => {
    console.log(`joel Xmd server running on port ${PORT}`);
});
//joel Xmd starting message server 
//╭━━ 『 ᴊᴏᴇʟ-ᴍᴅ ɪɴɪᴛɪᴀʟɪᴢᴇᴅ 』\n┃  ⚡ ʙᴏᴛ ɴᴀᴍᴇ: ᴊᴏᴇʟ-ᴍᴅ \n┃  👑 ᴏᴡɴᴇʀ: ʟᴏʀᴅ ᴊᴏᴇʟ \n┃  ⚙️ ᴍᴏᴅᴇ: *private*\n┃  🎯 ᴘʀᴇꜰɪx: *.*\n┃  ✅ ꜱᴛᴀᴛᴜꜱ: ᴏɴʟɪɴᴇ & ꜱᴛᴀʙʟᴇ\n╰━━━━━━━━━━━━━━━━━━━╯\n\n⚠️ ʀᴇᴘᴏʀᴛ ᴀɴʏ ɢʟɪᴛᴄʜᴇꜱ ᴅɪʀᴇᴄᴛʟʏ ᴛᴏ ᴛʜᴇ ᴏᴡɴᴇʀ.\n\n╭──────────────────★\n│ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟᴏʀᴅ ᴊᴏᴇʟ\n╰──────────────────★
