const Discord = require('discord.js');
module.exports = {
	name: 'gaming',
	aliases: ['gg'],
	description: "this is a gaming command!",
	execute(message, args, cmd, client, Discord) {
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Gaming Event')
			.setURL('https://minet.co/events')
			.setDescription('You like playing games? We like watching you rage :) \n For more information, click **Gaming Event**\n [ Title of the bot message ]')
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