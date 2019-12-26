const Discord = require('discord.js');

module.exports.run = async(client, message) => {

  if (message.member.hasPermission("KICK_MEMBERS", "ADMINISTRATOR")){
    var member = message.mentions.members.first();

    member.kick().then((member) => {
        message.channel.send(":slight_smile: " + member.displayName + " have been kick lol");
    }).catch(() => {
        message.channel.send("that command not for u dumb");
    });
  }

}


module.exports.help = {
  name: "kick"
}
