const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/pjKI7O7.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*💖𝐑𝐄𝐁𝐄𝐋 𝑺𝑬𝑹 𝑩𝑶𝑻☜︎︎︎✌︎*
ᴄʀᴇᴀᴛᴏʀ ɴᴜᴍʙᴇʀ: wa.me/918590565968

ᴄʀᴇᴀᴛᴏʀ ɴᴜᴍʙᴇʀ: wa.me/917994093863

Tʜɪs ʙᴏᴛ Oᴡɴᴇʀ Nᴀᴍᴇ : 💝ᴘʀɪɴᴄᴇ Sᴇʀ Bᴏᴛ ➪ ᴘʀɪɴᴄᴇ»:-sᴘɪʀɪᴛ ᴍᴜʜᴀᴍᴍᴇᴅ

ʀᴇʙᴇʟ ʙᴏᴛ ɢʀᴏᴜᴘ: https://chat.whatsapp.com/Bq0eHs3UpGJ2BKIHOmy7mk

Gɪᴛʜᴜʙ ʟɪɴᴋ: https://github.com/PRINCE-SER/prince_ser

Aᴜᴅɪᴏ ᴄᴏᴍᴍᴀᴅᴇ : https://github.com/PRINCE-SER/prince_ser/tree/master/uploads

Sᴛɪᴄᴋᴇʀ ᴄᴏᴍᴍᴀᴅᴇ: https://github.com/PRINCE-SER/Prince_ser/tree/master/Amalser

💝ᴘʀɪɴᴄᴇ Sᴇʀ Bᴏᴛ Cʀᴇᴀᴛᴇᴅ Bʏ ʀᴇʙᴇʟ ᴘʀɪɴᴄʀ ᴀɴᴅ sᴘɪʀɪᴛ 💝
`}) 

}));
