const Discord = require('discord.js');
const client = new Discord.Client();
const botconfig = require('./botconfig.json');
const fs = require('fs');
const prefix = '.';
client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");

  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) => {

    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    client.commands.set(props.help.name, props);

  })
})

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdded', () =>{
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  const channel = member.guild.channels.find(ch => ch.name === 'member-log'); // Change to the channel you'd like to send message to

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

  if(message.content.startsWith('!youtube')){

    channel.send('https://www.youtube.com/channel/UCnl3g8J2Z6NEukWS9PmKvlA?view_as=subscriber');

  }
});

client.login(auth.token);
