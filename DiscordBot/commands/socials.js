 const Discord = require("discord.js")
    const botconfig = require("../botsettings.json");

    module.exports.run = async (bot, message, args) => {
        message.reply(`__**Check out all of Callum's socials!**__\n\n Twitch: https://www.twitch.tv/TheDrCallum_\n\n YouTube: https://www.youtube.com/channel/UCCCMrMPnSMBB6nOeUuwTI7A?view_as=subscriber\n\n Instagram: https://www.instagram.com/TheDrCallum_\n\n Twitter: https://www.twitter.com/TheDrCallum_\n\n TikTok: https://www.tiktok.com/@thedrcallum_?lang=en\n\n **Following those and being active increases your chances of being in a video!**`)
    }
       
module.exports.config = {
    name: "socials",
    description: "Sends social medias",
    usage: "-socials",
    accessableby: "Members",
    aliases: []
}
