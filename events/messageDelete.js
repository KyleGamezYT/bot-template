const { MessageEmbed, Message, WebhookClient } = require("discord.js");
const client = require("../index");

client.on("messageDelete", async (message) => {
if(message.author.bot) return;

const deleteMessageNotice = new MessageEmbed()
.setColor("RED")
.setTitle("Message Deleted")
.setDescription(`A Message By <@${message.author.id}> has been deleted. \n **Deleted Message** \n ${message.content ? message.content : "Couldnt Fetch the deleted message."}`)
.setTimestamp()
.setFooter("Powered by [KyleTheDuck3#0450](https://kyletheduck.tk/)")
new WebhookClient({url: process.env.LOGS_WEBHOOK}).send({embeds: [updateNotice]}).catch((err) => console.log(err))
})
