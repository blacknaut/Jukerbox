const {MessageEmbed} = require('discord.js')
const {red, blue, yellow, black, cyan, greenBright, green} = require('chalk');
module.exports = async client => {

   let server = client.guilds.cache.size

   client.user.setPresence({ activities: [{ name: `🎶 Tocando em ${server} Servidores | Prefix [ , ]`, status: 'dnd' }] });
   client.user.setStatus('dnd')

   setInterval(()=>{
   client.users.cache.sweep(u=>u.bot)
   }, 10000)

   var a = setInterval(()=>{
    console.clear() 
    console.log(``)
    console.log(``)
    console.log(red('     ▄▄▄ ▄▄   ▄▄ ▄▄▄   ▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄   ▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄   ▄▄ '))
    console.log(red('    █   █  █ █  █   █ █ █       █   ▄  █ █  ▄    █       █  █▄█  █'))
    console.log(red('    █   █  █ █  █   █▄█ █    ▄▄▄█  █ █ █ █ █▄█   █   ▄   █       █'))
    console.log(red(' ▄  █   █  █▄█  █      ▄█   █▄▄▄█   █▄▄█▄█       █  █ █  █       █'))
    console.log(red('█ █▄█   █       █     █▄█    ▄▄▄█    ▄▄  █  ▄   ██  █▄█  ██     █ '))
    console.log(red('█       █       █    ▄  █   █▄▄▄█   █  █ █ █▄█   █       █   ▄   █'))
    console.log(red('█▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█▄▄▄█ █▄█▄▄▄▄▄▄▄█▄▄▄█  █▄█▄▄▄▄▄▄▄█▄▄▄▄▄▄▄█▄▄█ █▄▄█'))
    console.log('')
    console.log('')
    console.info(greenBright(`[ JUKERBOX ] CONECTADO NO: ${client.user.tag}`))
    clearInterval(a)
    }, 7000)
    setInterval(()=>{
    console.info(greenBright(`CPU: ${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}% | RAM: ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)}MB`))
    }, 30000)

    var logs = client.channels.cache.get('893263767276765194')

    const embed = new MessageEmbed()
    .setTitle(`⭐ **|** Logs Jukerbox`)
    .setColor(`#33FF33`)
    .setImage('https://cdn.discordapp.com/attachments/893450261325041694/895702278596599828/unknown.png')
    .setFooter(`Jukerbox Corporation | Studios111`)
    .setDescription(`\`\`\`O Jukerbox foi ligado com "sucesso" pelo 'blacknott'\`\`\``)
    .setTimestamp()
    .setThumbnail('https://cdn.discordapp.com/avatars/893188579520565309/ac5cb8ea102b3f0b698045d7377a88ca.png?size=2048')

    logs.send({ embeds: [embed] })
};