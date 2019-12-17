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

  if(message.content.startsWith('!stream')){

    channel.send('https://www.youtube.com/channel/UCnl3g8J2Z6NEukWS9PmKvlA?view_as=subscriber');
    
  }
});

client.login(auth.token);
