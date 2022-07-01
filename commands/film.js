const Discord = require('discord.js');
module.exports = {
	name: 'filmmaking',
    aliases: ['fm'],
	description: "this is a film making command!",
	execute(message, args, cmd, client, Discord) {
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Film Making Event')
			.setURL('https://minet.co/events')
			.setDescription('Picture abhi baaki hai ( actually picture abhi banani hai ), mere participant. \n For more information, click **Film Making Event** \n[ Title of the bot message ] ')
			.setThumbnail('https://i.imgur.com/vBWPJ6R.png')
			.addFields(
				{ name: 'Submission Date', value: '16/08/21' ,inline: true},
                { name: 'Number Of Participants', value: '4 Members',inline: true }
			)
			.setTimestamp()
			.setFooter('X 2021');

		message.channel.send(exampleEmbed);
	}
}