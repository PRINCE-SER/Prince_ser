const WhatsAlexa = require('../events');

const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');

const fs = require('fs');

const Config = require('../config')

const axios = require('axios')

const request = require('request');

const os = require('os');

var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    

var ggg = Buffer.from(clh.cd, 'base64')

var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

WhatsAlexa.addCommand({pattern: 'bot', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {

// send a buttons message!

    const buttons = [

        {buttonId: 'id1', buttonText: {displayText: 'I am ok 🙂 \n\n\nOk Boss 😌😂'}, type: 1},

        {buttonId: 'id2', buttonText: {displayText: 'njan fear ayi 😁   \n\n\nnjan fear ayi monwu njan ninde fan ayi 🤭🌚'}, type: 1},

        {buttonId: 'id3', buttonText: {displayText: 'Hlo    \n\n\nchugan thanne🐦'}, type: 1}

      ]

      

      const buttonMessage = {

          contentText: "HLO Bhai anna arpadi?🤭 Chugan thanne alle? 😁",

          footerText: 'Pʀɪɴᴄᴇ & Sᴘɪʀɪᴛ ⌫',

          buttons: buttons,

          headerType: 1

      }

      

      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
