const Discord = require('discord.js');
const ytdl = require('ytdl-core');

module.exports.run = async(client, message, args, ops) => {

  if(!message.member.voiceChannel) return message.channel.send('connect to voice channel dumb');

  if(message.guild.me.voiceChannel) return message.channel.send('bot already connect lol!')

  if(!args[0]) return message.channel.send('need url sirrr');

  let validate = await ytdl.validateURL(args[0]);

  if(!validate) return message.channel.send('give **valid** url lol dumb');

  let info = await ytdl.getInfo(args[0]);

  let connection = await message.member.voiceChannel.join();

  let songPlay = await connection.playStream(ytdl(args[0], { filter: 'audioonly' }));

  message.channel.send(`playing ${info.title}`);



}

module.exports.help = {
  name: "play"
}
