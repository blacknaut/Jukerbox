module.exports = {
    name: "skip",
    aliases: ["s", "pular"],
    run: async (client, message, args) => {
      let channel = message.member.voice.channel;

      let myVoice = message.guild.me.voice.channel;

      if (!channel) {
        return message.reply({ content: `⚠ **|** Você precisa estar conectado a um canal de voz.` })
      };

      if (myVoice && channel.id !== myVoice.id) {
        return message.reply({ content: `🎵 **|** Eu já estou a tocar em outro canal de voz!` })
      };

      message.reply({ content: `⏭️ **|** Musica **Pulada** com sucesso` })

      client.distube.skip(message)

    }
}