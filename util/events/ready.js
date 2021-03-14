const Discord = require("discord.js")

module.exports = bot => {
    console.log(`${bot.user.username} is online!`)
    bot.user.setActivity("twitch.tv/gxmingwithcxllum", {type: "WATCHING"})
}