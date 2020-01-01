module.exports.run = async(client, message, args, ops) => {

  if(!message.member.voiceChannel) return message.channel.send("connect to vc dumb");

  if(!message.guild.me.voiceChannel) return message.channel.send("not connected lol!");

  if(message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send("u not in my vc idoit");

  message.guild.me.voiceChannel.leave()

  message.channel.send('ok am leaving!');


}

module.exports.help = {
  name: "leave"
}
