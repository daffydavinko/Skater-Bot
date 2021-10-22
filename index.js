// main.js
// @ daffydavinko
// August 3, 2021

require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '-';
const fs = require('fs');


 // PRESENCE
client.on("ready", () => {
    const guildNum = client.guilds.cache.size;
   
    client.user.setActivity(`-help | Skating in ${guildNum} servers.`, {type: "PLAYING"});
})

// COMMAND HANDLER
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

// MESSAGE LOOP
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help'){
        client.commands.get('help').execute(message, args);
    };
})

// LOGIN INITIALIZATION
client.login(process.env.BOT_TOKEN)
