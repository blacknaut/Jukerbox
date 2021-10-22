const { MessageEmbed, Collection } = require("discord.js");
const Timeout = new Collection();
const db = require('quick.db');
const {red, blue, yellow, black, cyan, greenBright, green} = require('chalk');
module.exports = async (client, message) => {
  
    let prefix = db.get(`prefix_${message.guild.id}`);
    if (prefix === null  || prefix === undefined) {
      prefix = ','
    }
  
    if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return message.reply({ content: `⚠ **|** My prefix: \`${prefix}\`\n🔮 **|** Learn how to use the bot \`${prefix}tutor\`` });
  
    if(!message.author.id === '664529575618805809') {
      message.reply({ content: `ê **|á* Voce esta bloqueado de usar o bot pe:lo **Motivo** \`Nenhum informado\`` })
    }
  
    if(message.author.bot) return
    if(message.channel.type === 'dm') return;
    if(!message.content.toLowerCase().startsWith(prefix)) return;
    if(!message.guild) return;
      
    let args = message.content.slice(prefix.length).trim().split(/ +/g)
    let cmd = args.shift().toLowerCase()
    if(cmd.length == 0) return;
    let command = client.commands.get(cmd);
    if(!command) command = client.commands.get(client.aliases.get(cmd))
      
    if(command){
      if(command.timeout) {
          if(!Timeout.has(command.name)){
             Timeout.set(command.name, new Collection())
           }
           const now = Date.now()
           const pegar = Timeout.get(command.name)
           const amount = "3000";
           if(Timeout.has(message.author.id)){
             const exp = Timeout.get(message.author.id) + amount
             if(now < exp) {
               const left = (exp - now).toFixed(0) / 1000
               var segundos = (left % 60).toFixed(0)
               var fim = (segundos < 10 ? segundos : segundos)
  
               return message.reply({ content: `⚠ **|** Aguarde **${fim}** antes de usar outro \`comando\`` })
             }
           } else {
             Timeout.set(message.author.id, now)
             setTimeout(() => {
               Timeout.delete(message.author.id)
             }, amount)
           }
         }
      command.run(client, message, args, prefix)
      console.info(blue(`${message.author.tag} acabou de usar ${message.content} no ${message.channel.name}`))
    }
} 