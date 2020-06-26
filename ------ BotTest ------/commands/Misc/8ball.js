const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
  const replies = ["Oui", "Non", "Peut-être"];
  const question = args.join(" ");
  const response = Math.floor(Math.random() * replies.length);

  const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor("#cb4e41")
    .setThumbnail("https://cdn.discordapp.com/attachments/705029954844360715/720585881420955658/ball-pool-png-8-ball-pool-png-photos-512.png")
    .addField(question, replies[response]);

  message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MISC.EIGHTBALL;
