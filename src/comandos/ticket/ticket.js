const { MessageSelectMenu, MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")
module.exports = {
    name: "ticket",
    run: async (client, message, args) => {
      var category = "891362064638046259";//ID DA CATEGORIA ONDE O TICKET VAI SER COLOCADO

        let embed = new MessageEmbed()
        .setColor("#2f3136")
        .setTitle(`Precisando de um Suporte ?`)
        .setDescription(`**Clique na reação para abrir um Ticket\nHorário de atendimento: ( 10h as 00h )**`)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setFooter(`© todos os direitos reservados | studios111`)

      const row = new MessageActionRow()
			.addComponents([
				new MessageButton()
					.setCustomId('🎨・DESINGS')
          .setEmoji(`🎨`)
					.setLabel('・ Desings')
					.setStyle('PRIMARY'),
        new MessageButton()
					.setCustomId('🔫・FIVEM')
          .setEmoji(`🔫`)
					.setLabel(`・ FIVEM`)
					.setStyle('SECONDARY'),   
        new MessageButton()
					.setCustomId('🎮・MTA')
          .setEmoji(`🎮`)
					.setLabel(`・ MTA`)
					.setStyle('SUCCESS'),      
        new MessageButton()
					.setCustomId('⚙・DISCORD')
          .setEmoji(`⚙`)
					.setLabel(`・ Discord`)
					.setStyle('DANGER')  
            ]);

        const close = new MessageActionRow()
			  .addComponents([
        new MessageButton()
					.setCustomId('CLOSE')
          .setEmoji(`🔒`)
					.setLabel(`・ FECHAR`)
					.setStyle('DANGER') 
        ]);    

        message.channel.send({ embeds: [embed], components: [row] }).then(msg => {

            const filtro = (interaction) => 
            interaction.isSelectMenu()
      
          const coletor = msg.createMessageComponentCollector({
            filtro
          });

          coletor.on('collect', async (collected) => {

            collected.deferUpdate()

                let embed_geral = new MessageEmbed()
                .setColor("#2f3136")
                .setTitle(`❓ ・ Suporte **${collected.customId}**`)
                .setDescription(`Seja bem vindo ao seu ticket`)
                .setFooter(`© todos os direitos reservados ・ Studios111`)

                message.guild.channels.create(`${collected.customId}--${collected.user.username}`, {
                    type : 'GUILD_TEXT',
                    permissionOverwrites : [
                        {
                            id : message.guild.id,
                            deny : ['VIEW_CHANNEL']
                        },
                        {
                            id : collected.user.id,
                            allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES']
                        }
                    ]
                }).then(async (chat_111) => {

                    chat_111.setParent(`${category}`, { lockPermissions: false })

                    chat_111.send({ content: `${collected.user}`, embeds: [embed_geral], components: [close] }).then(msg => {
          const filtrob = (interaction) => 
            interaction.isSelectMenu()
      
          const coletora = msg.createMessageComponentCollector({
            filtrob
          });

          coletora.on('collect', async (collected) => {

            collected.deferUpdate()

            collected.channel.delete('Comando Ticket pronto')

                })
            })
       })
    })
})
}
}
