const { MessageSelectMenu, MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")
module.exports = {
    name: "setup",
    run: async (client, message, args) => {
      var category = "896381827604967494";

        let embed = new MessageEmbed()
        .setColor("#2f3136")
        .setTitle(`\`📞\` **|** Área de Atendimento`)
        .setDescription(`**•** Reaja no ícone abaixo correspondente a **categoria** da sua dúvida.\n**•** É terminantemente **proibido mencionar** nossa equipe de suporte ao abrir um ticket.\n**•** É Proibido abri tickets **desnecessário**`)
        .addField(`📂 **|** Categorias:`, `❓ ➜ Suporte\n🗺️ ➜ Duvidas\n🚨 ➜ Denuncias`, true)
        .addField(`🧩 **|** Links Úteis:`, `\n<:JB_Adicionado:860503018888626207> ➜ [Adicionar Bot]( https://discord.com/oauth2/authorize?client_id=893188579520565309&scope=bot&permissions=2150911041)\n<:JB_Global:860211608630591498> ➜ [Website](https://jukerbox-website.guizera2.repl.co/home)\n<:JB_jukerbox:893512779934343219> ➜ [status do bot](https://jukerbox-website.guizera2.repl.co/status)\n<:JB_youtube:893511540127449108> ➜ [Canal no YT](https://www.youtube.com/channel/UCmPJOqAYsm8zYlM3EwDsfIA)`, true)
        .addField(`⭐ **|** Informações`, `⏰ ➜ \`12:30 as 18:30\`\n🚧 ➜ Ticket Abertos: 0\n🧭 ➜ Total de ticket: 0`, true)
        //.setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setFooter(`Jukerbox Suporte ©`, message.guild.iconURL({ dynamic: true }))

      const row = new MessageActionRow()
			.addComponents([    
        new MessageButton()
					.setCustomId('❓・Suporte・')
          .setEmoji(`❓`)
					.setLabel(`- Suporte`)
					.setStyle('SECONDARY'),  
        new MessageButton()
					.setCustomId('🗺️・Duvidas・')
          .setEmoji(`🗺️`)
					.setLabel(`- Duvidas`)
					.setStyle('SECONDARY'), 
        new MessageButton()
					.setCustomId('🚨・Denuncias・')
          .setEmoji(`🚨`)
					.setLabel(`- Denuncias`)
					.setStyle('SECONDARY'),      
        ]);

        const close = new MessageActionRow()
			  .addComponents([
        new MessageButton()
					.setCustomId('CLOSE')
          .setEmoji(`🔒`)
					.setLabel(`・ CLOSE`)
					.setStyle('SECONDARY') 
        ]);   

        const del = new MessageActionRow()
			  .addComponents([
        new MessageButton()
					.setCustomId('DELETE')
          .setEmoji(`⛔`)
					.setLabel(`・ DELETE`)
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

            var tipo = collected.customId

                let embed_geral = new MessageEmbed()
                .setColor("#2f3136")
                .setTitle(`❓ **|** Suporte **Jukerbox**`)
                .setDescription(`**•** Para começar envie sua **duvida, sugestao ou denuncia**\n**•** Marque um \`Mod\` so se for de Extrema importancia\n**•** Nao abra tickets **desnecessário**`)
                .setFooter(`${tipo}jukerbox`)

                message.guild.channels.create(`${collected.customId}${collected.user.username}`, {
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

          coletora.on('collect', async (clcd, msg) => {

            clcd.deferUpdate()

            
            clcd.channel.permissionOverwrites.create(clcd.user.id, {
              SEND_MESSAGES: false,
              VIEW_CHANNEL: false
            }).then(async (chat_111) => {
        
             chat_111.send({ embeds: [new MessageEmbed().setColor(`#2f3136`).setDescription(`🔒 **|** Este canal foi bloqueado`)], components: [del] }).then(msg => {

            const filtro = (interaction) => 
             interaction.isSelectMenu()
      
            const coletor = msg.createMessageComponentCollector({
              filtro
            })
                
            coletor.on('collect', async (collected) => {

             collected.deferUpdate()

              chat_111.send({ embeds: [new MessageEmbed().setDescription(`<:JB_staff:886980017039507497> **|** Suporte sera **deletando** em \`10\` segundos`).setColor(`#2f3136`)] })
   
           setTimeout(() => collected.channel.delete('Blacknaut rei do pvp'), 10000)        
            })         
                })
                })
          })
            })
       })
    })
})
}
}