const Discord = require('discord.js');
module.exports = {
	name: 'cryptx',
	description: "this is a cryptx command!",
	execute(message, args, cmd, client, Discord) {
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('CryptX Event')
			.setURL('https://minet.co/events')
			.setDescription('Our trademark cryptic hunt, is back online, again.\n Wait, it always has been. \n For more information, click **CryptX Event**\n [ Title of the bot message ]')
			.setThumbnail('https://i.imgur.com/vBWPJ6R.png')
			.addFields(
				{ name: 'Date Of Event', value: '9:41 AM | 13/08/21' ,inline: true},
                { name: 'Number Of Participants', value: 'Infinite',inline: true }
			)
			.setTimestamp()
			.setFooter('X 2022');

		message.channel.send(exampleEmbed);
	}
}