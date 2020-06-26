const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
  await message.delete();
  await client.channels.cache.get('720977762650816573').send("Le bot redémarre!");
  process.exit();
};

module.exports.help = MESSAGES.COMMANDS.ADMIN.RELOAD;
