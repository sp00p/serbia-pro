const Discord = require('discord.js')

module.exports.run = async(client, messages, args, ops) => {

  let fetched = ops.active.get(message.guild.id);

  if(!fetched) return message.channel.send("there no music lol!");

  if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("not in same channel as bot");

  if(fetched.dispatcher.paused) return message.channel.send("music is playing already....");

  fetched.dispatcher.pause();

  message.channel.send("playing music again :)");
}

module.exports.help = {
  name: "pause"
}
