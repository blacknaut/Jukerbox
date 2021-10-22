module.exports = {
    name: "help",
    aliases: ["ajuda", "comandos", "commands"],
    run: async (client, message, args) => {
      let txt = "**COMMAND's PREFIX**\n\`\`\`,play | ,skip | ,ping\`\`\`\n**SLASH COMMAND**\n\`\`\`/ping\`\`\`"

      message.react('🇭')
      message.react('🇪')
      message.react('🇱')
      message.react('🇵')

      message.reply({ content: `${txt}` })

      //message.reply({ content: `<:livro:886998990627930212> **|** Acabei de enviar minha lista de comandos no seu **privado**` })

      //client.users.cache.get(message.author.id).send({ content: `${txt}` })

    }
}