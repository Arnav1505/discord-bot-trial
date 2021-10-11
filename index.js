// const Discord = require('discord.js');
// const bot = new Discord.Client({ intents: ["GUILD_MEMBERS", "GUILD_MEMBER_ADD"] });
// // const client = new Discord.Client({ intents: ["GUILD_MEMBERS", "GUILD_MEMBER_ADD"] })

// const Token = 'ODk2Nzk0NDU5MzQ0MzU1MzU4.YWMS7A.LF9MHRZsDik2sktCMiMJHBIQfD0';

// bot.on('ready', () => {
//     console.log('This bot is online');
// })

// bot.login(Token);
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Logged in !`);
});


client.login('ODk3MDQwNTYzOTYwOTU0ODkw.YWP4IA.UUZWI55EYRFkiYiazTnOF1tp4eA');