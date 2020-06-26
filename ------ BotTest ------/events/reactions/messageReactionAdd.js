module.exports = async (client, messageReaction, user) => {
  const message = messageReaction.message;
  const member = message.guild.members.cache.get(user.id);
  const emoji = messageReaction.emoji.name;
  const channel = message.guild.channels.cache.find(c => c.id === '724554915300769835');
  const lapinRole = message.guild.roles.cache.get("724554915300769835");
  const wahRole = message.guild.roles.cache.get("724554915300769835");
  if (member.user.bot) return;

  if (messageReaction.partial) {
    await messageReaction.fetch();
    return;
  }

  if (["laphello", "waaaah"].includes(emoji) && message.channel.id === channel.id) {
    switch (emoji) {
      case "laphello":
        member.roles.add(lapinRole);
        message.channel.send(`Le rôle ${lapinRole.name} a été ajouté avec succès!`);
        break;
      case "waaaah":
        member.roles.add(wahRole);
        message.channel.send(`Le rôle ${wahRole.name} a été ajouté avec succès!`);
        break;
    };
  };

  if (emoji === "🟥") message.delete();
  if (emoji === "🟦") message.reactions.removeAll();
  if (emoji === "🟩") message.channel.send(`Je suis un carré vert: 🟩`);
}