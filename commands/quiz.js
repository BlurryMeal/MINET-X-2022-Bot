const Discord = require('discord.js');
module.exports = {
	name: 'quiz',
	aliases: ['q'],
	description: "this is a quiz command!",
	execute(message, args, cmd, client, Discord) {
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Quiz Event')
			.setURL('https://minet.co/events')
			.setDescription('X has always been known for turning the general Quiz format on its head, and this year is no different. Could it be even harder¿   \n For more information, click **Quiz Event**\n [ Title of the bot message ]')
			.setThumbnail('https://i.imgur.com/vBWPJ6R.png')
			.addFields(
				{ name: 'Date Of Prelims', value: '16/08/21' ,inline: true},
                { name: 'Number Of Participants', value: '2 Members',inline: true }
			)
			.setTimestamp()
			.setFooter('X 2022');

		message.channel.send(exampleEmbed);
	}
}