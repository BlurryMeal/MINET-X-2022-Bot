const Discord = require('discord.js');
module.exports = {
	name: 'photography',
	aliases: ['pg'],
	description: "this is a photography command!",
	execute(message, args, cmd, client, Discord) {
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Photography Event')
			.setURL('https://minet.co/events')
			.setDescription('Take picture - > Get gud - > Win prize.\n Very Simple. \n For more information, click **Photography Event**\n [ Title of the bot message ]')
			.setThumbnail('https://i.imgur.com/vBWPJ6R.png')
			.addFields(
				{ name: 'Date Of Event', value: '16/08/21' ,inline: true},
                { name: 'Number Of Participants', value: '1 Members',inline: true }
			)
			.setTimestamp()
			.setFooter('X 2021');

		message.channel.send(exampleEmbed);
	}
}