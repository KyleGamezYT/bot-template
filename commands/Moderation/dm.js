const { WebhookClient, Message, Client } = require("discord.js");

module.exports = {
    name: "dm",
    aliases: ["pm"],

/** 
 * @param {Client} client
 * @param {Message} message
 * @param {String[]} args
 */
 run: async(client, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`:x: | Insufficent Permissions.`)
    let target =
    message.guild.member(message.mentions.users.first()) ||
    message.guild.members.get(args[0]);
    let dMessage = args.join(1).join(" ");
    if(!dMessage) return message.channel.send(`:x: | You need a message to DM the target.`)

    target.send(`This is a message from ${message.author} from the OGVRPS Staff Team  \n ${dMessage}   `)
  }
 }
