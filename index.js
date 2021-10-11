const Discord = require('discord.js');
// const Bot = new Discord.Client();
const client = new Discord.Client({ intents: ["GUILD_MEMBERS", "GUILD_MEMBER_ADD"] })

const Token = 'ODk2Nzk0NDU5MzQ0MzU1MzU4.YWMS7A.LF9MHRZsDik2sktCMiMJHBIQfD0';

bot.on('ready', () => {
    console.log('This bot is online');
})

bot.login(Token);