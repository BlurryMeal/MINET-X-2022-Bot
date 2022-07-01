const Discord = require('discord.js');
module.exports = {
	name: 'design',
	aliases: ['d'],
	description: "this is a design command!",
	execute(message, args, cmd, client, Discord) {
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Design Event')
			.setURL('https://minet.co/design')
			.setDescription('One of the two halves of Make, the design team has the responsibility of handling your startup and constructing it from the ground up. \n For more information, click **Design Event**\n [ Title of the bot message ]')
			.setThumbnail('https://i.imgur.com/vBWPJ6R.png')
			.addFields(
				{ name: 'Date Of Event', value: '17/08/21' ,inline: true},
                { name: 'Number Of Participants', value: '3 Members',inline: true },
				{ name: 'Design Prompt', value: 'https://minet.co/design' }
			)
			.setTimestamp()
			.setFooter('X 2021');

		message.channel.send(exampleEmbed);
	}
}