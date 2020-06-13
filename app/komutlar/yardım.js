const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '/'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setTitle('📌 Riorwor Yardım Menüsü')
  .setDescription(`:white_small_square: \`${p}yardım eğlence\` = Eğlence Komutlarını Listeler. \n\n:white_small_square: \`${p}yardım moderasyon\` = Moderasyon Komutlarını Listeler. \n\n:white_small_square: \`${p}yardım müzik\` = Müzik Komutlarını Listeler.`)
  message.channel.send({embed})
  }
   if (arg === 'eğlence' || arg === '1') {
  const embed = new Discord.RichEmbed()
  .setTitle('🎉 Eğlence Komutları')
  .setDescription(`:white_small_square: \`${p}düello\` = Sectigin birisine meydan okursun. \n:white_small_square: \`${p}tekerleme\` = Bot rastgele bir tekerleme gönderir. \n:white_small_square: \`${p}zarat\` = Bot senin yerine zar atar. \n:white_small_square: \`${p}kaçcm\` = Malafatın kaç cm oldugunu gösterir. \n:white_small_square: \`${p}tkm\` = Bot ile taş kağıt makas oynarsın.  \n:white_small_square: \`${p}sigara\` = Sigara Yakarsın. \n:white_small_square: \`${p}haspihane\` = Profilinize hapishane efekti ekler.\n:white_small_square: \`${p}sor\` = Bota soru sormanıza yarar (Yapım Asamasında). \n:white_small_square: \`${p}sevgiölçer\` = Etiketledigin birisi ile sevginizi ölçersin. \n:white_small_square: \`${p}efkarım\` = Efkar seviyenizi ölçer. \n:white_small_square: \`${p}sarıl\` = Etiketledigin birisine sarılırsın.  \n:white_small_square: \`${p}öp\` = Etiketledigin birisini öpersin.  \n:white_small_square: \`${p}nahçek\` = Etikeledigin birisine nah çekersin. \n:white_small_square: \`${p}rip\` = Profil resminize RİP efekti ekler. `)
  message.channel.send(embed)
  }
  if (arg === 'müzik' || arg === '2') {
      const embed = new Discord.RichEmbed()
      .setTitle('🎵 Müzik komutları:')
      .setDescription(`:white_small_square: \`Groovybot\` = -play komutu ile çalışmaktadır. \n:white_small_square: \`Rhthm Bot\` = !play komutu ile çalışmaktadır.`)
      return message.channel.send(embed);
}
   if (arg === 'moderasyon' || arg === '3') {
      const embed = new Discord.RichEmbed()
      .setTitle('🔰 Moderasyon komutları:')
      .setDescription(`:white_small_square: \Bu Menü Suanda Yapım Aşamasında.`)
      return message.channel.send(embed);
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','help','y'],
  permlevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Gelişmiş Yardım Menüsü',
  usage: 'yardım'
};