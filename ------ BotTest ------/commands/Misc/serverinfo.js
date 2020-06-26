const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");
const moment = require("moment");

module.exports.run = (client, message, args) => {
  const guild = message.guild;

  const embed = new MessageEmbed()
    .setColor("#C016FF")
    .setThumbnail(guild.iconURL())
    .addField(`Plus d'informations à propos de **${guild.name}**`, 
    `∙ ID: ${guild.id}
    ∙ Owner: ${guild.owner.user.tag} (${guild.ownerID})
    ∙ Roles: ${guild.roles.cache.size}
    ∙ Créé le: ${moment.utc(guild.createdAt).format('DD/MM/YYYY')}`
    );

    message.channel.send(embed);
    message.channel.send(`Votre serveur possède ${guild.channels.cache.filter(ch => ch.type === 'text').size} salons textuels et ${guild.channels.cache.filter(ch => ch.type === 'voice').size} salons vocaux avec ${guild.memberCount - 1} membres.`);
};

module.exports.help = MESSAGES.COMMANDS.MISC.SERVERINFO;
