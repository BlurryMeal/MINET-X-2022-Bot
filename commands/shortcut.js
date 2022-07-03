const Discord = require('discord.js');
module.exports = {
	name: 'shortcut',
	description: "this is a shortcut command!",
	execute(message, args, cmd, client, Discord) {
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Shortcut Commands')
			.setURL('https://minet.co/events')
			.setDescription('Here is a list of all the shortcuts of the commands on this server, if you want to view what the commands do. Type xhelp.')
			.setThumbnail('https://i.imgur.com/vBWPJ6R.png')
			.addFields(
				{ name: 'xp', value: 'Shortcut for xplay.' ,inline: true},
                { name: 'xs', value: 'Shortcut for xskip.' ,inline: true},
                { name: 'xd', value: 'Shortcut for xdesign.' ,inline: true},
                { name: 'xprog', value: 'Shortcut for xprogramming.' ,inline: true},
                { name: 'xgg', value: 'Shortcut for xgaming.' ,inline: true},
                { name: 'xpg', value: 'Shortcut for xphotography.' ,inline: true},
                { name: 'xq', value: 'Shortcut for xquiz.' ,inline: true},
                { name: 'xgd', value: 'Shortcut for xgroupdiscussion.' ,inline: true},
                { name: 'xfm', value: 'Shortcut for xfilmmaking.' ,inline: true},
                { name: 'xpt', value: 'Shortcut for xpitching.' ,inline: true},
                { name: 'xshh', value: 'Shortcut for xsurprise.' ,inline: true},
                { name: 'xnotacryptxhint', value: 'Not-so-much a shortcut for xcryptx.' ,inline: true}
			)
			.setTimestamp()
			.setFooter('X 2022');

		message.channel.send(exampleEmbed);
	}
}