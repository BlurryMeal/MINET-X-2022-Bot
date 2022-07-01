const Discord = require('discord.js');
module.exports = {
	name: 'pitching',
	aliases: ['pt'],
	description: "this is a pitching command!",
	execute(message, args, cmd, client, Discord) {
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Pitching Event')
			.setURL('https://minet.co/events')
			.setDescription('Following up on the product built by the design team, the pitchers will be presenting the designed project in front of a panel of judges. Plain and simple.  \n For more information, click **Pitching Event**\n [ Title of the bot message ]')
			.setThumbnail('https://i.imgur.com/vBWPJ6R.png')
			.addFields(
				{ name: 'Date Of Event', value: '16/08/21' ,inline: true},
                { name: 'Number Of Participants', value: '2 Members',inline: true }
			)
			.setTimestamp()
			.setFooter('X 2021');

		message.channel.send(exampleEmbed);
	}
}