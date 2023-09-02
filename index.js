// const Discord = require('discord.js');
// // const Bot = new Discord.Client();
// const client = new Discord.Client({ intents: ["GUILD_MEMBERS", "GUILD_MEMBER_ADD"] })

// const Token = 'TOKEN ID';

// bot.on('ready', () => {
//     console.log('This bot is online');
// })
// print.log(Token)

// bot.login(Token);

// const Discord = require('discord.js');
// const bot = new Discord.Client({ intents: ["GUILD_MEMBERS", "GUILD_MEMBER_ADD"] });
// // const client = new Discord.Client({ intents: ["GUILD_MEMBERS", "GUILD_MEMBER_ADD"] })

// const Token = 'ODk2Nzk0NDU5MzQ0MzU1MzU4.YWMS7A.LF9MHRZsDik2sktCMiMJHBIQfD0';

// bot.on('ready', () => {
//     console.log('This bot is online');
// })

// bot.login(Token);
const { Client, Intents } = require('discord.js');
const { version } = require('os');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


const ytdl = require("ytdl-core");

const PREFIX = '!';

var servers = {};

client.on('ready', () => {
  console.log(`The bot is online!`+version);
});

client.on('message', message => {

  let args = message.content.substring(PREFIX.length).split(" ");

  switch(args[0]){
    case 'play':

      function play(connection, message){
        var server = servers[message.guild.id];


        server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));

        server.queue.shift();

        server.dispatcher.on("end", function(){
          if(server.queue[0]){
            play(connection, message);
          }
          else {
            connection.disconnect();
          }
        });


      }


      if(!args[1]){
        message.channel.send("You need to provide a link!");
        return;
      }

      if(!message.member.voiceChannel){
        message.channel.send("You must be in a voice channel to play this bot!");
        return;
      }

      if(!servers[message.guild.id]) servers[message.guild.id] = {
        queue:[]
      }

      var server = servers[message.guild.id];

      server.queue.push(args[1]);

      if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
        play(connection, message);
      });




    break;

  }
});


client.login('Your token');
