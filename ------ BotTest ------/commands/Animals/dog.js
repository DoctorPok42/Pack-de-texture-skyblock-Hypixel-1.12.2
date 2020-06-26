const fetch = require("node-fetch");
const { MessageEmbed, Message } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
  const dog = await fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(json => json.message);

  const embed = new MessageEmbed()
    .setImage(dog)
    .setFooter("Powered by 'https://dog.ceo/api/breeds/image/random'");

  message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.ANIMALS.DOG;
