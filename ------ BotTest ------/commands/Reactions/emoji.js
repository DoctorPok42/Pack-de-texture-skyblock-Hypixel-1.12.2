const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
  // message.react('⭐');
  // message.react('706869108238450699');

  await message.react('🟥');
  await message.react('🟦');
  await message.react('🟩');
};

module.exports.help = MESSAGES.COMMANDS.REACTIONS.EMOJI;
