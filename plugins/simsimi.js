const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

// Description
const BOT_DESC = "Chat with an AI Bot.\n Use .bot <message>"
const BOT = ":"
const NOT_FOUNDAC = "*Solicitud no válida*"
const NEED_LOCATIONA = "*Solicitud no válida*"

if (Config.WORKTYPE == 'private') {
  
  Asena.addCommand({pattern: 'skueletor ?(.*)', fromMe: true, desc: BOT_DESC}, async (message, match) => {
	if (match[1] === 'xx') return await message.reply(NEED_LOCATIONA);
	const url = `https://api.simsimi.net/v1/?text=${match[1]}&lang=es&cf=true`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
	  if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '\n*🤖 ' + BOT +'* ```' + json.messages[0].response + '```\n\n' , MessageType.text,{quoted: message.data});
	} catch {
		return await message.client.sendMessage(message.jid, NOT_FOUNDAC, MessageType.text);
	}
});
}

else if (Config.WORKTYPE == 'public') {

 Asena.addCommand({pattern: 'skueletor ?(.*)', fromMe: false, desc: BOT_DESC}, async (message, match) => {
	if (match[1] === 'xx') return await message.reply(NEED_LOCATIONA);
	const url = `https://api.simsimi.net/v1/?text=${match[1]}&lang=es&cf=true`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
	  if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '\n*🤖 ' + BOT +'* ```' + json.messages[0].response + '```\n\n' , MessageType.text,{quoted: message.data});
	} catch {
		return await message.client.sendMessage(message.jid, NOT_FOUNDAC, MessageType.text);
	}
});
}
