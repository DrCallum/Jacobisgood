const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('BAN_MEMBERS')) 
        message.channel.send("You don't have permission to use that command.");
    else {
        let bannedMember = await message.guild.members.ban(args);
        if(bannedMember){

        try {
            console.log(bannedMember.tag + " was banned.");
            message.channel.send (`${bannedMember} Has been Banned from The Server by ${message.author}!`)
        }
            catch(err) {
            console.log(err);
        }
    }
}
}

module.exports.config = {
    name: "ban",
    description: "Bans a Users",
    usage: "-ban",
    accessableby: "🔻Admin",
    aliases: []
}