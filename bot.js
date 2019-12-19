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
  const channel = member.guild.channels.find(ch => ch.name === 'member-log'); // Change to the channel you'd like to send message to

  if(!channel) return;

  channel.send(`Welcome to the server, ${member}`);
});

client.on('message', message => {

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandFile = client.commands.get(cmd.slice(prefix.length));
  if(commandFile) commandFile.run(client,message,args);

  if(message.content.includes('anime')){

    message.channel.send("fucking you mom");

  }

  if(message.content.includes('helloing serbia pro')){

    message.channel.send('helloing and mansallam bro');

  }

});

client.login(botconfig.token);
