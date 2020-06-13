const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('**Kimi Öpeceğimi Yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor("#36393F")
    .setDescription(`** ${mesaj} ` + message.author.username + ' Seni Öptü!**')
    .setImage(`https://media1.tenor.com/images/104b52a3be76b0e032a55df0740c0d3b/tenor.gif?itemid=10194764`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'öp',
  description: 'İstediğiniz Kişiye Sarılırsınız.',
  usage: '/öp'
};