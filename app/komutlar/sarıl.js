const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('**Kime Sarılacağımı Yazmalısın**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor("#36393F")
    .setDescription(`** ${mesaj} ` + message.author.username + ' Sana Sarıldı!**')
    .setImage(`https://media1.tenor.com/images/eccd57215b317c1131ce92ee891c053f/tenor.gif?itemid=11567415`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sarıl',
  description: 'İstediğiniz Kişiye Sarılırsınız.',
  usage: 'sarıl'
};