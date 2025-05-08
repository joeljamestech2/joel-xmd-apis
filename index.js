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
        image: 'https://i.waifu.pics/-ZeGw8v.gif',
        premiumumusers: '[255714595078,255781144539,255767570963]',
        caption: '╭━━━〔 *ʙᴏᴛ ᴜᴘᴅᴀᴛᴇ ᴀʟᴇʀᴛ* 〕━━━╮\n┃  *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟᴏʀᴅ ᴊᴏᴇʟ - ᴊᴏᴇʟ-ᴜᴘ ᴏɴ ᴛᴏᴘ*\n┃  \n┃  ✦ New futuristic **ᴍᴇɴᴜ** unlocked\n┃  ✦ Fresh set of **ᴄᴏᴍᴍᴀɴᴅꜱ** added in style\n┃  ✦ Entertaining **ɢᴀᴍᴇꜱ**: `connect4`, `wcg`, & more\n┃  ✦ Premium-exclusive features now live\n┃  \n┃  ⟶ *ᴘʀᴇᴍɪᴜᴍ ᴜꜱᴇʀꜱ:*\n┃     DM the **Owner** to upgrade your access\n┃  \n┃  ⟶ *ꜱᴛᴀʏ ᴜᴘᴅᴀᴛᴇᴅ:*\n┃     Tap the button below & join the mission\n╰━━━━━━━━━━━━━━━━━━━╯\n**[ View Channel ]** → *t.me/joelxmdnews*\n\n_ᴛʜɪꜱ ɪꜱ ɴᴏᴛ ᴊᴜꜱᴛ ᴀ ʙᴏᴛ, ɪᴛ’ꜱ ᴀ ꜱʏꜱᴛᴇᴍ ʀᴜɴ ʙʏ ꜰᴜᴛᴜʀᴇ._'
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
