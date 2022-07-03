const Discord = require('discord.js');
module.exports = {
	name: 'info',
	description: "this is a info command!",
	execute(message, args, cmd, client, Discord) {
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('MINET X 2021')
			.setURL('https://minet.co/')
			.setDescription('We’re organizing our annual IT symposium, X, from 13th to 19th August, 2021.')
			.setThumbnail('https://i.imgur.com/vBWPJ6R.png')
			.addFields(
				{ name: 'Opening Ceremony', value: '13/08/21' ,inline: true},
                { name: 'Events', value: 'https://minet.co/events',inline: true }
			)
			.setTimestamp()
			.setFooter('X 2022');

		message.channel.send(exampleEmbed);
	}
}