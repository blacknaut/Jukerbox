//*****************************[ BOT ]*********************************//
const { Client, Intents, Collection, MessageEmbed } = require("discord.js");
const client = new Client({ intents: [32767] });
//****************************[ NPM's ]********************************//
const { readdirSync }= require('fs');
const {red, blue, yellow, black, cyan, greenBright, green} = require('chalk');
//****************************[ LOGIN ]********************************//
client.login('ODkzMTg4NTc5NTIwNTY1MzA5.YVX0rw.Nb6_f3foKmyRxVCAM_nsBPStYkQ');
//**************************[ COLLECTION ]*****************************//
client.commands = new Collection();
client.aliases = new Collection();
//***************************[ HANDLER ]*******************************//
readdirSync("./src/comandos/").forEach(dir => {
  const commands = readdirSync(`./src/comandos/${dir}/`).filter(file => file.endsWith(".js"))
  for(let file of commands) {
      let pull = require(`./src/comandos/${dir}/${file}`)
      if(pull.name) {
          client.commands.set(pull.name, pull)
      } else {
          continue;
      } if(pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name))
}
});
const eventFile = readdirSync('./src/eventos/').forEach(f => {
const name = f.split('.')[0]
const content = require(`./src/eventos/${f}`)
client.on(name, content.bind(null, client))
});
//****************************[ SLASH ]*******************************//
client.api.applications('893188579520565309').commands.post({data:{
  "name": "ping",
  "description": "📡 | Veja minha latencia",
}})
client.ws.on("INTERACTION_CREATE", async interaction => {
    const command = interaction.data.name.toLowerCase();
    const args = interaction.data.options;
if(command == "ping"){
client.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
            type: 4,
            data: {
                content: `📡 **|** Minha latência esta em \`${client.ws.ping}ms\``,
                EPHEMERAL: false
            }
        }
    });
}
})
//****************************[ MUSICA ]*******************************//
const { DisTube } = require("distube");
const disTube = require("distube").default
const { SpotifyPlugin } = require("@distube/spotify");
const { SoundCloudPlugin } = require("@distube/soundcloud");
client.distube = new DisTube(client, { 
  searchSongs: 0, 
  emitNewSongOnly: true, 
  leaveOnFinish: true,
  leaveOnEmpty: true,
  emptyCooldown: 0,
  plugins: [new SpotifyPlugin(), new SoundCloudPlugin()]
})
const status = queue => ``

client.distube
  .on("playSong", (queue, song) => {
   let embed = new MessageEmbed()
   .setColor("#33FF33")
   .setImage(`${song.thumbnail}`)
   .setFooter(`Jukerbox Corporation | Todos os direitos reservados`)
   
  queue.textChannel.send({ content: `<:JB_disco:886979486917201941> **|** Tocando Agora: \`${song.name} - ${song.formattedDuration}\`\n👤 **|** Pedida pelo: ${song.user}`, embeds: [embed] })
  }) 
  .on("error", (channel, error) => {
  channel.send(`\`\`\`[ERROR] - ${error}\`\`\``)
  })
  /*.on("finish", queue => {
    queue.textChannel.send(`📻 **|** Fila de Músicas Acabou. estou saindo do canal: ${message.guild.me.voice.channel}`)
  })
  .on("empty", (message, queue, channel) => {
    //channel.send(`⚠ **|** Saindo do ${message.guild.me.voice.channel}, pois ninguen mais esta na call`)
  })*/
  .on("initQueue", queue => {
    queue.autoplay = true;
    queue.volume = 100;
  })
  .on("noRelated", queue => {
    queue.textChannel.send(`❗ **|** Música não Encontrada`)
  })
  .on('finishSong', (queue, song) => queue.textChannel.send(`🎶 **|** A Música \`${song.name}\` acabou, indo para a **próxima** música`))
	.on('disconnect', queue => queue.textChannel.send(`📭 **|** Desconectando da call pois nao possue usuarios no canal`))