module.exports = {
    name: 'clear',
    description: 'clear messages!',
    async execute(message, args, cmd, client, Discord) {
        if(message.member.roles.cache.has('996366654290284606')){
            if(!args[0]) return message.reply("bro how are you so dumb! add a number :|");
            if(isNaN(args[0])) return message.reply("damn, we dont have a shortage of dumb people... add a real number!");

            if(args[0] > 100) return message.reply('I might look powerful but I can only delete 100 messages at a time');
            if(args[0] < 1) return message.reply('I have come to a realisation that humans are dumb, how the heck will I clear less than 1 message!');

            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
        })
            
        } else {
            message.channel.send('HAHA You dont have perms for this command. ;)')
        }
        

         
    }
}