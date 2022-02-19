const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/BY13nKv.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Pʀɪɴᴄᴇ Sᴇʀ Bᴏᴛ💝*
ᴄʀᴇᴀᴛᴏʀ ɴᴜᴍʙᴇʀ: wa.me/918590565968

ᴄʀᴇᴀᴛᴏʀ ɴᴜᴍʙᴇʀ: wa.me/917994093863

Pʀɪɴᴄᴇ ʙᴏᴛ ɢʀᴏᴜᴘ: https://chat.whatsapp.com/FH8pCHTfpCMFkHbWVGVaLv

Gɪᴛʜᴜʙ ʟɪɴᴋ:    https://github.com/PRINCE-SER/Prince_ser

Aᴜᴅɪᴏ ᴄᴏᴍᴍᴀᴅᴇ :   https://github.com/PRINCE-SER/Prince_ser/tree/master/Prince_bgms

Sᴛɪᴄᴋᴇʀ ᴄᴏᴍᴍᴀᴅᴇ: https://github.com/PRINCE-SER/Prince_ser/tree/master/Prince_stickers


💝Pʀɪɴᴄᴇ sᴇʀ Bᴏᴛ Cʀᴇᴀᴛᴇᴅ Bʏ ᴘʀɪɴᴄᴇ ᴀɴᴅ sᴘɪʀɪᴛ💝
`}) 

}));
