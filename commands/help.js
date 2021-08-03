module.exports = {
    name: 'help',
    description: "The bot will respond with pong",
    execute(message, args){
        const Discord = require('discord.js');

        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Help Page')
        .setColor('#33aef3')
        .setDescription('**Game Help** \n From simple questions to tips and tricks, this category will help you by providing vital information about the game. Movement controls, trick combos, every bit of basic information like this will be displayed in this category.  \n\n *Specific Command: -gamehelp* \n\n **Server Help** \n Any simple question that pops into your mind at first regarding the server might have a chance to be answered here. Server and role information can be found under this category. Any sort of application, staff and server update and/or server maintenance will be noted down here. \n\n *Specific Command: -serverhelp* \n\n **Support** \n The rules of opening a support ticket and how to correctly present your problem will be found in this category. Information on how to open a ticket and contact the Support Team will be located here as well. \n\n *Specific Command: -support* \n\n **Commands:** \n Any command available for usage with this command, as well as their descriptions will be located under this category. \n\n *Specific Command: -commands* \n\n\n **( Developed by DaffyDavinko and Assisted by k1rboo )**')

        message.channel.send(newEmbed);
    }
}