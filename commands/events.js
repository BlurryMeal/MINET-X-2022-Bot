const Discord = require('discord.js');
module.exports = {
	name: 'events',
	description: "this is a events command!",
	execute(message, args, cmd, client, Discord) {
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Events List')
			.setURL('https://minet.co/events')
			.setDescription('Here is a list of all of the events in X.')
			.setThumbnail('https://i.imgur.com/vBWPJ6R.png')
			.addFields(
				{ name: 'CryptX', value: 'xcryptx' },
                { name: 'Pitching', value: 'xpitching' },
                { name: 'Group Discussion', value: 'xgd'},
                { name: 'Quiz', value: 'xquiz'},
                { name: 'Gaming', value: 'xgaming'},
                { name: 'Design', value: 'xdesign'},
                { name: 'Surprise', value: 'xsurprise'},
                { name: 'Programming', value: 'xprogramming'},
                { name: 'Photography', value: 'xphotography' },
				{ name: 'Film Making', value: 'xfm'},
			)
			.setTimestamp()
			.setFooter('X 2021');

		message.channel.send(exampleEmbed);
	}
}