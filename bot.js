const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdded', () =>{
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');

  if(!channel) return;

  channel.send(`Welcome to the server, ${member}`);
});

client.on('message', message => {

  const channel = message.channel

  if(message.content.includes('anime')){

    channel.send("fucking you mom");

  }

  if(message.content.startsWith('!stream')){

    channel.send("https://www.twitch.tv/chrometheuss");
  }

  if(message.content.includes('helloing serbia pro')){

    channel.send('helloing and mansallam bro');

  }
});

client.login(auth.token);
