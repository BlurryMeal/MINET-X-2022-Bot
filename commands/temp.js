const Discord = require('discord.js');
module.exports = {
    name: 'temp',
    description: "this is a temp command!",
    execute(message, args, cmd, client, Discord) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#6699EE')
            .setTitle('X 2021 Rules')
            .setURL('https://minet.co/')
            .setDescription("**1:** No spam or self-promotion ( server invites, advertisements, etc ) without permission from a staff member. This includes DMing fellow members the same sort of texts through this server \n( we don't care what happened on other servers ).\n\n **2:** Treat everyone with respect. Absolutely no harassment, witch hunting, sexism, racism, or hate speech will be tolerated. If you need to have an argument, have it somewhere else.\n\n**3:** No NSFW or obscene content. This includes text, images, or links featuring nudity, sex, hard violence, or other graphically disturbing content. If you are found DMing other members of this server through here with this content, you will be banned.\n\n**4:** Don't cause spam of any kind. A bunch of people making text chains in chat is fine, but repeated spamming of any message\n ( especially in caps, or with annoying text ) is not tolerated.\n\n**5:** Please keep your topics relevant in the channel \n( in #spam do whatever as long as it does not violate the rules ).\n\n**6:** If you see something against the rules or something that makes you feel unsafe, let anyone in Leadership know. We want this server to be a welcoming space!\n\n**7:** As long as you abide by these rules, this server will be a place for competitions, fun and more!\n\n**Once you have read and agree to the rules, \nplease react to this message**")
            .setThumbnail('https://i.imgur.com/vBWPJ6R.png')
            .setFooter('X 2021');

        message.channel.send(exampleEmbed);
    }
}