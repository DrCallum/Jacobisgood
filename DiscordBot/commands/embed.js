const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const talkedRecently = new Set();
    const embed = new Discord.MessageEmbed()
        .setTitle('🔥Jacob🔥 Bot Commands.')
        .setAuthor('TheDrCallum_')
        .setDescription('Complete list of 🔥Jacob🔥 Commands.')
        .setColor('#3354FF')
        .setThumbnail('https://static-cdn.jtvnw.net/jtv_user_pictures/4f51ad4d-5fa7-4506-87b0-a06aebebbc35-profile_image-70x70.png')
        .setImage('https://static-cdn.jtvnw.net/jtv_user_pictures/4f51ad4d-5fa7-4506-87b0-a06aebebbc35-profile_image-70x70.png')
        .setFooter(`Created by: @TheDrCallum_#9982`, 'https://static-cdn.jtvnw.net/jtv_user_pictures/4f51ad4d-5fa7-4506-87b0-a06aebebbc35-profile_image-70x70.png')
        .addFields(
            { name: '-commands', value: 'Shows complete list of commands', inline: true},
            { name: '-socials', value: 'Sends Social Media links'},
            { name: '-clear', value: 'Bot deletes inputed number of messages'},
            { name: 'Test Number 4', value: 'This is a example value'}
        )
     .setTimestamp()

        message.channel.send(embed);
}

module.exports.config = {
    name: "commands",
    description: "Complete list of 🔥Jacob🔥 Commands.",
    usage: "-commands",
    accessableby: "ADMIN",
    aliases: []
}