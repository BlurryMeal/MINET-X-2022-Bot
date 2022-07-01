const Discord = require('discord.js');
const pagination = require('discord.js-pagination')
module.exports = {
	name: 'help',
	description: "this is a help command!",
	execute(message, args, cmd, client, Discord) {
		
		const page1 = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('General Commands List')
			.setURL('https://minet.co')
			.setDescription('Here is the list of all the commands that will help you out on the server')
			.setThumbnail('https://i.imgur.com/vBWPJ6R.png')
			.addFields(
				{ name: 'xhelp', value: 'Displays this message.' },
				{ name: 'xshortcut', value: 'Displays the shortcut commands.' },
				{ name: 'xmusic', value: 'Provides the list of music commands.' },
				{ name: 'xinfo', value: 'Information about MINET X 2021.' },
				{ name: 'xevents', value: 'Information about Events for X 2021.' },
			)
		
		const page2 = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Event Commands List 1')
			.setURL('https://minet.co')
			.setDescription('Here is the list of all the commands that will help you out on the server')
			.setThumbnail('https://i.imgur.com/vBWPJ6R.png')
			.addFields(
				{ name: 'xdesign', value: 'Description about Design Event.' },
				{ name: 'xfilmmmaking', value: 'Description about Film Making Event.' },
				{ name: 'xgaming', value: 'Description about Gaming Event.' },
				{ name: 'xgroupdiscussion', value: 'Description about Group Discussion Event.' },
				{ name: 'xphotography', value: 'Description about Photography Event.' },
				

			)

		const page3 = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Event Commands List 2')
			.setURL('https://minet.co')
			.setDescription('Here is the list of all the commands that will help you out on the server')
			.setThumbnail('https://i.imgur.com/vBWPJ6R.png')
			.addFields(
				{ name: 'xpitching', value: 'Description about Pitching Event.' },
				{ name: 'xprogramming', value: 'Description about Programming Event.' },
				{ name: 'xquiz', value: 'Description about Quiz Event.' },
				{ name: 'xcryptx', value: 'Description about CryptX Event.' },
				{ name: 'xsurprise', value: 'Wait, what does this do?' }
			)
	
			
		const pages = [
			page1,
			page2,
			page3
		]

		const emoji = ["⏪", "⏩"]

		const timeout = '30000'

		pagination(message, pages, emoji, timeout)
	

	}

}