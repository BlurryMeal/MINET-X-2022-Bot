const Discord = require('discord.js');
module.exports = {
	name: 'programming',
    aliases: ['prog'],
	description: "this is a programming command!",
	execute(message, args, cmd, client, Discord) {
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Programming Event')
			.setURL('https://minet.co/events')
			.setDescription("Materials required: Brain. \n Maybe a computer but mostly a brain. Yes, that's about it.   \n For more information, click **Programming Event**\n [ Title of the bot message ]")
			.setThumbnail('https://i.imgur.com/vBWPJ6R.png')
			.addFields(
				{ name: 'Date Of Event', value: '18/08/21' ,inline: true},
                { name: 'Number Of Participants', value: '2 Members',inline: true }
			)
			.setTimestamp()
			.setFooter('X 2021');

		message.channel.send(exampleEmbed);
	}
}