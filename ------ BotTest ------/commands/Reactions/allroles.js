const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
  const lapinRole = message.guild.roles.cache.get("708603873618821121");
  const wahRole = message.guild.roles.cache.get("708603902378901514");
  const lapinEmoji = message.guild.emojis.cache.get("706869108238450699");
  const wahEmoji = message.guild.emojis.cache.get("708603630441332756");

  const embed = new MessageEmbed()
    .setTitle("Rôles")
    .setDescription("Cliquez sur une des réactions ci-dessous pour obtenir le rôle correspondant")
    .setColor("#dc143c")
    .addField(
      "Les rôles disponibles:",
      `
      ${lapinEmoji} - ${lapinRole.toString()}
      ${wahEmoji} - ${wahRole.toString()}
      `
    );

    client.channels.cache.get('708593997890977823').send(embed).then(async msg => {
      await msg.react(lapinEmoji);
      await msg.react(wahEmoji);
    })
};

module.exports.help = MESSAGES.COMMANDS.REACTIONS.ALLROLES;
