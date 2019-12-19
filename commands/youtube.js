const Discord = require('discord.js');

module.exports.run = async(client, message) => {

  message.channel.send('https://www.youtube.com/channel/UCnl3g8J2Z6NEukWS9PmKvlA?view_as=subscriber');

}

module.exports.help = {
  name: "youtube"
}
