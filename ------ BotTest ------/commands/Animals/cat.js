const fetch = require("node-fetch");
const { MessageEmbed, Message } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
  const cat = await fetch("http://aws.random.cat/meow")
    .then(res => res.json())
    .then(json => json.file);

  const embed = new MessageEmbed()
    .setImage(cat)
    .setFooter("Powered by 'http://aws.random.cat/meow'");

  message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.ANIMALS.CAT;
