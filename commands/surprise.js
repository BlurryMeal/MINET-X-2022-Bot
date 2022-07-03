const Discord = require('discord.js');
module.exports = {
	name: 'surprise',
	aliases: ['shh'],
	description: "this is a cryptx command!",
	execute(message, args, cmd, client, Discord) {
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Surprise Event')
			.setURL('https://minet.co/events')
			.setDescription("At this point you've read all variations of 'expect the unexpected', but lets be honest hum dono ko pata hai kya hota hai. \n For more information, click **Surprise Event**\n [ Title of the bot message ]")
			.setThumbnail('https://i.imgur.com/vBWPJ6R.png')
			.addFields(
				{ name: 'Date Of Round 1', value: '16/08/21' ,inline: true},
                { name: 'Number Of Participants', value: '2 Members',inline: true }
			)
			.setTimestamp()
			.setFooter('X 2022');

		message.channel.send(exampleEmbed);
	}
}