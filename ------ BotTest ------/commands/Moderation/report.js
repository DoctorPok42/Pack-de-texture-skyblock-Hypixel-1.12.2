const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");

const isFirstCharNumeric = c => /\d/.test(c);

module.exports.run = async (client, message, args) => {
  let user = message.mentions.users.first();
  let raison = args[1];
  
  if (!raison) return message.reply("Indiquer une raison!");

  const embed = new MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setThumbnail(user.displayAvatarURL())
    .addFields(
      { name: `Reporté`, value: user.username, inline: true },
      { name: "Lien du message", value: isFirstCharNumeric(raison.charAt(0)) ? `[Click me](https://discordapp.com/channels/${message.guild.id}/${message.channel.id}/${args[1]})` : 'Aucun lien précisé', inline: true },
      { name: "Raison", value: isFirstCharNumeric(raison.charAt(0)) ? args.slice(args.indexOf(args[2])).join(" ") : args.slice(args.indexOf(args[1])).join(" ") },
    )
    .setTimestamp()
    .setFooter("Cette commande est inutilement difficile!");
  
    client.channels.cache.get('705055460255989841').send(embed);
  // [I'm an inline-style link](https://www.google.com)
  // https://discordapp.com/channels/guildID/channelID/messageID
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.REPORT;
