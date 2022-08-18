const { MessageEmbed, Client } = require("discord.js");

module.exports = {
    name: "ping",
    aliases: ['p'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
       let fetchingPing = new MessageEmbed()
       .setTitle("Fetching Ping")
       .setDescription("I am currently fetching the ping in millseconds")
       message.channel.send({embeds: [fetchingPing]})   
       

       
       let gotMyPing = new MessageEmbed()
       .setTitle("Pong!")
       .setDescription(`The bot edited this message with the ping of ${client.ws.ping}ms .`)

       .then((sentMessage) => 
          


           sentMessage.edit({embeds: [gotMyPing]})
       ); 
    },
};
