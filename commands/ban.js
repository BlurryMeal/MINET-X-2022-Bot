module.exports = {
    name: 'ban',
    description: "This command ban a member!",
    execute(message, args, cmd, client, Discord){
        const target = message.mentions.users.first();
        if(target){
            if(message.member.roles.cache.has('996366654290284606')){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("User has been banned");
            }else{
                message.channel.send("You cannot ban members :(")
            }
        }else{
            message.channel.send(`You coudn't ban that member!`);
        }
    }
}