const Discord = require('discord.js');
module.exports = {
	name: 'notacryptxhint',
	description: "this is a cryptx command!",
	execute(message, args, cmd, client, Discord) {
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Is this important?')
			.setDescription('https://docs.google.com/spreadsheets/d/1WEr1eGINkKXvDXJ3fQilKoe6qz3S2gI4iw_Ihn9IZ_s/edit?usp=sharing')
			.setThumbnail('https://i.imgur.com/vBWPJ6R.png')
			.setTimestamp()
			.setFooter('X 2021');

		message.author.send(exampleEmbed);
	}
}