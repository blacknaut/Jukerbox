const {MessageEmbed} = require('discord.js');
module.exports = {
    name: "eval",
    aliases: ["e", "eval2", "e2"],
    run: async (client, message, args) => {
   const donos = ['852589272553095248', '844614464812744734', '664529575618805809']
        
if(!(await donos.includes(message.author.id))) return message.channel.send('⚠ **|** Somente senvolvedoresevelops podem usar este **comando**');
        let code = args.join(' ')
        if(!code) return message.reply({ content: `⚠ **|** Fale um codigo para eu **executar**`})
        try {
            let resultado = await eval(code)             
            var tipo = typeof(resultado)

            let embed = new MessageEmbed()
             .addField('Código:', '```js\n' + `${code}` + '\n```', true)
             .addField('Tipo:', `\`\`\`${tipo}\`\`\``, true)
             .addField('Resultado:', '```js\n' + `${resultado}` + '\n```', false)
             .setColor("#33FF33")
            message.reply({ embeds: [embed] })
        } catch(err) {
            let embed = new MessageEmbed()
             .addField('Código', '```js\n' + `${code}` + '\n```', true)
             .addField('Erro', '```js\n' + `${err}` + '\n```', true)
             .setColor("#33FF33")
            message.reply({ embeds: [embed] })
	}
}
}