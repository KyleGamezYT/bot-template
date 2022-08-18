const { Client, Collection } = require("discord.js");
const colors = require("colors")
const client = new Client({
    intents: 32767,
    precense: {
        status: "dnd",
        activity: {
            name: "no",
            type: "PLAYING"
        }
    }
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
require("dotenv").config();
// Initializing the project
require("./handler")(client);

client.login(process.env.TOKEN).catch(() => console.warn("[CLIENT] Invalid Client Token was provided, or Missing Intents.".bold.red))
