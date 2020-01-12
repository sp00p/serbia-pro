const Discord = require('discord.js');
const client = new Discord.Client();
const botconfig = require('./botconfig.json');
let prefix = botconfig.prefix;
const fs = require('fs');
client.commands = new Discord.Collection();
client.login(botconfig.token);


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

  if(message.content.includes('anime')){

    message.channel.send("fucking you mom");

  }

  if(message.content.includes('helloing serbia pro')){

    message.channel.send('helloing and mansallam bro');

  }

  if(message.channel.name == "verify") {
    if(message.content === `${prefix}verify`) {
      const verifyRole = message.guild.roles.find("name", "Verified")
      message.member.addRole(verifyRole);
      message.author.send({ embed: {
        color: 0xffffff,
        title: "serbia pro Verification",
        description: "you are now verified! :sunglasses:",
        footer: {
          text: "Created by Sean#0004"
        },
        timestamp: new Date()
      }})
      message.delete(100);
    } else message.delete()
  }

});
