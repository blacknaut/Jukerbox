module.exports = {
    name: "ping",
    aliases: ["latencia", "latency", "ms"],
    run: async (client, message, args) => {

      message.reply({ content: `📡 **|** Minha latência esta em \`${client.ws.ping}ms\`` })

    }
}