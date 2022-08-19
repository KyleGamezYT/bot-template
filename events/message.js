const { Message} = require("discord.js");
const client = require("../index");
const db = require("quick.db");
const automod = require("../AutoMod-Settings/config.json");
const Fs = require("fs");

client.on('message', async(msg) => {
    let UserJSON = JSON.parse(Fs.readFileSync("./DB/users.json"));
    if(msg.author.bot) return;
    if(!msg.guild) return;
    if(msg.content.length >= config.max) {
        msg.delete();
        msg.channel.send(`<@${message.author.id}> spamming is prohibited in this server. Continuing doing this will be a mute.`)
        db.add(`Warnings_${message.guild.id}_${user.id}`, 1);

        message.autor.send(``)

        if (!UserJSON[msg.author.id]) {
            if (msg.author.bot) return;
            UserJSON[msg.author.id] = {
              warns: 0
            }
            Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));
          }

          UserJSON[msg.author.id].warns += 1;
            Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));


            if (UserJSON[msg.author.id].warns === 3) {
 
                (Fs.readFileSync("./DB/users.json"));
                  UserJSON[msg.author.id].warns = 0;
                  Fs.writeFileSync("./DB/users.json", JSON.stringify(UserJSON));
                
                  const user = msg.member
                  let role = msg.guild.roles.cache.find(r => r.name === `${config.role}`);
                
                  user.roles.add(role)
                  console.log(`lol i muted ${msg.author}`)

                  
                }

    }
})
