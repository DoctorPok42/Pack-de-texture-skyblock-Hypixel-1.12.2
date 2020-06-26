const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");
const moment = require("moment");

module.exports.run = (client, message, args) => {
  // member = GuildMember | user = User
  let member = message.member;
  if (args[0]) member = message.guild.member(message.mentions.users.first()); 
  let user = member.user;

  const embed = new MessageEmbed()
    .setColor('#CCE0B4')
    .setThumbnail(user.displayAvatarURL())
    .addField(
      `Plus d'informations à propos de **${user.username}**`,`
      ∙ Nom: ${user.tag}
      ∙ Bot: ${user.bot ? 'true' : 'false'}
      ∙ Créé le: ${moment.utc(user.createdAt).format('DD/MM/YYYY | hh:mm')}
      ∙ Statut: ${user.presence.status.toUpperCase()} 
    `,
    );

  message.channel.send(embed);
  message.channel.send(
    `L'utilisateur **${user.username}** ${
      member.nickname === undefined ? '' : `aka **${member.nickname}** `
    }a rejoint le ${moment.utc(member.joinedAt).format('DD/MM/YYYY - hh:mm')} et possède les rôles suivants: ${member.roles.cache.map(roles => `\`${roles.name}\``).join(', ')}.`
  );
};

module.exports.help = MESSAGES.COMMANDS.MISC.USERINFO;
