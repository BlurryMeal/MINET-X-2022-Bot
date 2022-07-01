const Discord = require('discord.js');
module.exports = {
	name: 'ping',
	description: "this is a ping command!",
	execute(message, args, cmd, client, Discord) {
        message.channel.send("Pinging...").then(m =>{
            // The math thingy to calculate the user's ping
              var ping = m.createdTimestamp - message.createdTimestamp;
  
            // Basic embed
              var embed = new Discord.MessageEmbed()
              .setAuthor(`Your ping is ${ping}ms`)
              .setColor("#6699EE")
              
              // Then It Edits the message with the ping variable embed that you created
              m.edit(embed)
          });
	}
}