const fetch = require("node-fetch");
const { MessageEmbed, Message } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
  const fox = await fetch("https://randomfox.ca/floof/")
    .then(res => res.json())
    .then(json => json.image);

  const embed = new MessageEmbed()
    .setImage(fox)
    .setFooter("Powered by 'https://randomfox.ca/floof/'");

  message.channel.send(embed);
};

module.exports.help = MESSAGES.COMMANDS.ANIMALS.FOX;
