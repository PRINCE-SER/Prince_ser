/* Copyright (C) 2021 prince ser.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License. PRINCE SER*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "Command Kazhinn Yanthankilum Eyuth muthe\n🙄🙄🙄"

if (Config.WORKTYPE == 'private') {

  Asena.addCommand({ pattern: 'watercolor ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/watercolor?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴍᴀᴅᴇ ʙʏ ᴘʀɪɴᴄᴇ sᴇʀ*' })

  }));
}

else if (Config.WORKTYPE == 'public') {

  Asena.addCommand({ pattern: 'watercolor ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/watercolor?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*ᴍᴀᴅᴇ ʙʏ ᴘʀɪɴᴄᴇ sᴇʀ*' })

  }));

}
