const Discord = require('discord.js')


module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("that command not for u dumb")

  let bannedMember = await bot.fetchUser(args[0])
    if(!bannedMember) return message.channel.send("give user id to unban lol")

    let reason = args.slice(1).join(" ")
      if(!reason) reason = "no reason given lol"

    if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("i cant do that :(")
    message.delete()
    try{
      message.guild.unban(bannedMember, {reason: reason})
      message.channel.send(`${bannedMember.tag} is no ban anynmoiore`)
    } catch(e) {
      console.log(e.message)
    }


}

module.exports.help = {
  name: "unban"
}
