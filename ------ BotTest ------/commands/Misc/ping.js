const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
  const channel = client.guilds.cache.get('700323775471681557').channels.cache.get('716236393445326888');
  channel.send("Salut");
};

module.exports.help = MESSAGES.COMMANDS.MISC.PING;
