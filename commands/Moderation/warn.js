const { MessageEmbed, Client, WebhookClient, Message } = require("discord.js");
const db = require("quick.db");
module.exports = {
    name: "warn",
    aliases: ['w'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
       message.channel.send("Running the `warn` command...")
       
        if(!message.member.hasPermission("MANAGE_MESSAGES")){
            let errEmbed1 = new MessageEmbed()
            .setDescription(":x: Insufficent Permissions.")
        }
        let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

   if(!user) {
    let errEmbed2 = new MessageEmbed()
    .setDescription(":mag_right: Insufficient user.")
    message.channel.send({embeds: [errEmbed2]})
   }
   let reason = args.slice(1).join(" ");
if(!reason) {
 
    let errEmbed3 = new MessageEmbed()
    .setDescription(`:x: Reason invalid.`)
    message.channel.send({embeds: [errEmbed3]})
} 

db.add(`Warnings_${message.guild.id}_${user.id}`, 1);
  
 user.send(`>>> :warning: | **Warned - ${message.guild.name}**\n📃 | Reason: **${reason}**\n\n🙏 | **Want to appeal?** \n Create a ticket with the topic: \`Punishment Appeal\`.`)
  
 message.channel.send(`Sucessfully Warned ${user.tag} .`)

let logEmbed = new MessageEmbed()
.setTitle("Member Warned")
.setFields("User", `<@${user.id}>`, "Moderator", `<@${message.author.id}>`, "Reason", `${reason}`)
 new WebhookClient({url: process.env.LOGS_WEBHOOK}).send({embeds: [logEmbed]}).catch((err) => console.log(err))
  }
    }
 
    


    