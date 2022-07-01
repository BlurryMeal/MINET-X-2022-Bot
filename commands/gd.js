const Discord = require('discord.js');
module.exports = {
	name: 'groupdiscussion',
	aliases: ['gd'],
	description: "this is a gd command!",
	execute(message, args, cmd, client, Discord) {
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Group Discussion Event')
			.setURL('https://minet.co/events')
			.setDescription('Forget the conventional GD. We test your desicion-making skills under immense, immense pressure. Are you up for this task? \n For more information, click **Group Discussion Event**\n [ Title of the bot message ]')
			.setThumbnail('https://i.imgur.com/vBWPJ6R.png')
			.addFields(
				{ name: 'Date Of Prelims', value: '16/08/21' ,inline: true},
                { name: 'Number Of Participants', value: '1 Member',inline: true }
			)
			.setTimestamp()
			.setFooter('X 2021');

		message.channel.send(exampleEmbed);
	}
}