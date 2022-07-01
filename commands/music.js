const Discord = require('discord.js');
const pagination = require('discord.js-pagination')
module.exports = {
	name: 'music',
	description: "this is a music command!",
	execute(message, args, cmd, client, Discord) {
		
		const page1 = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('General Music Commands')
			.setURL('https://minet.co')
			.setDescription('X 2021 Bot has a fully fledged Music System developed by MINET. To get started join a voice channel and play a song by typing `xplay (Song Name)` \n\nHere is the list of all the commands currently present in BlurryBot. ')
			.setThumbnail('https://i.imgur.com/vBWPJ6R.png')
            .addFields(
				{ name: 'xhelp', value: 'Displays this message.' },
				{ name: 'xplay (Song Name / URL)', value: 'Plays the desired song in your voice channel.' },
				{ name: 'xskip', value: 'Skips the current song.' },
				{ name: 'xstop', value: 'Leaves the voice channel.' },
				{ name: 'xpause', value: 'Pauses the current song.' },
				{ name: 'xresume', value: 'Continues playing the song.' },
				{ name: 'xloop | xrepeat', value: 'Loops the song currently playing in the voice channel.' },
				{ name: 'xvolume (Numerical Value)', value: 'Changes the volume of the song.' },
				{ name: 'xjump (Number)', value: 'Jumps to the preferred song in the queue.' },
				{ name: 'xshuffle', value: 'Shuffles the Queue.' },
			)
		
		const page2 = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Filter Music Commands')
			.setURL('https://minet.co')
			.setDescription('Here is the list of all the Filter Commands currently present in X 2021 Bot.')
			.setThumbnail('https://i.imgur.com/vBWPJ6R.png')
            .addFields(
				{ name: 'x3d', value: 'This Filter gives a 3D audio effect for the current song.' },
				{ name: 'xecho', value: 'This Filter gives an echo effect for the current song.' },
				{ name: 'xkaraoke', value: 'Always wanted to sing on discord? Well now is your chance!' },
				{ name: 'xreverse', value: 'This Filter reverses the audio of the current song.' },
				{ name: 'xsurround', value: 'This Filter gives a Surround Sound effect for the current song.' },
				{ name: 'xearwax', value: 'Never had earwax in your ears?' },
				{ name: 'xbassboost', value: 'Increase the Bass of the current song.' },
				{ name: 'xnightcore', value: 'This FIlter increases the pitch and pace of the current song.' },
				{ name: 'xvaporwave', value: 'This Filter makes the current song sound like as if it was made in the 1980s.' },
			)


	
			
		const pages = [
			page1,
			page2,
		]

		const emoji = ["⏪", "⏩"]

		const timeout = '30000'

		pagination(message, pages, emoji, timeout)
	

	}

}