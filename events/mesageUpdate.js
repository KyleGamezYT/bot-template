const client = require("../index");
const { MessageEmbed, Message, WebhookClient} = require("discord.js")

client.on("messageUpdate", async (oldMessage, newMessage) => {
if(oldMessage.author.bot) return;


if(oldMessage.content === newMessage.content) return;


let Count = 1950;

const OriginalMessage = oldMessage.content.slice(0, Count) + (oldMessage.content.length > 1950 ? " ..." : "")

const EditedMessage = newMessage.content.slice(0, Count) + (newMessage.content.length > 1950 ? " ..." : "")


const updateNotice = new MessageEmbed()
.setColor("#FFFF00")
.setTitle("Message Updated")
.setDescription(`A [message](${newMessage.url}) by <@${newMessage.author.id}> has been updated. \n 
**Orignal Message** \n ${OriginalMessage} \n **Edited Message** \n ${EditedMessage}`)
.setTimestamp()



new WebhookClient({url: process.env.LOGS_WEBHOOK}).send({embeds: [updateNotice]}).catch((err) => console.warn(err.bold.Red))
})
