const { MessageSelectMenu, MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")
module.exports = {
    name: "invite",
    aliases: ["invitation", "add"],
    run: async (client, message, args) => {

      const invite = new MessageActionRow()
			  .addComponents([
        new MessageButton()
          .setEmoji(`860503018888626207`)
					.setLabel(`・ invitation`)
          .setCustomId('teste')
					.setStyle('SECONDARY') 
        ]);  

      message.reply({ embeds: [new MessageEmbed().setDescription(`Me add you guild`).setURL('https://discord.com/oauth2/authorize?client_id=893188579520565309&scope=bot&permissions=2150911041').setColor('#33FF33')], components: [invite] })

    }
}