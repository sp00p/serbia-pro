const Discord = require('discord.js');

module.exports.run = async(client, message) => {

  return message.channel.send("https://www.twitch.tv/chrometheuss");

}

module.exports.help = {
  name: "stream"
}
