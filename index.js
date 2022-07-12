const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const Auditlog = require("discord-auditlog");
const Welcome = require("discord-welcome");
const ReactionRole = require("reaction-role");
const system = new ReactionRole("OTkyNDQxODQxNjUzOTE1NzA5.G6JrPQ.e2WLKH6oNirr1wfgCXRwsBJ-DwGuGp8l2Yb7Bs"); 

config = {
	prefix: "x",
};

Auditlog(client, {
	"996366654755844104": {
		auditlog: "audit-log",	
		movement: "audit-log",
		auditmsg: '996366654755844104', 
		voice: false, 
		trackroles: false, 
	}
});

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
});	


client.commands = new Discord.Collection();
client.events = new Discord.Collection();
['command_handler' , 'event_handler'].forEach(handler =>{
	require(`./handlers/${handler}`)(client, Discord);
})

//reaction roles
let minet_emoji = system.createOption("✅", "996366654231564332");
let surprise_emoji = system.createOption("vsln:861936930387001374", "996366654248333385");
let design_emoji = system.createOption("dhmnuwu:861927501924007946", "996366654248333388");
let programming_emoji = system.createOption("babysgr:861940660995227690", "996366654248333386");
let gaming_emoji = system.createOption("moan:859808418973745202", "996366654248333383");
let gd_emoji = system.createOption("rishvibe:861962545300897843", "996366654231564335");
let quiz_emoji = system.createOption("malheart:862557852245819395", "996366654231564337");
let photography_emoji = system.createOption("cutieprez:861929319635091496", "996366654231564334");
let pitching_emoji = system.createOption("crook:861969952986890240", "996366654248333390");
let filmmkaing_emoji = system.createOption("creep:870652321867120641", "996366654231564333");
let crossword_emoji = system.createOption("creep:870652321867120641", "996450612348731483");

system.createMessage("870663605295665234", "870660962716381294", 10, null,pitching_emoji, design_emoji , programming_emoji, gaming_emoji, gd_emoji, quiz_emoji, surprise_emoji, photography_emoji, filmmkaing_emoji, crossword_emoji);
system.createMessage("996449590129729677", "996366654290284608", 1, null, minet_emoji);

system.init();


client.once('ready', () => {
	client.user.setActivity("X 2022 | minet.co");
	Welcome(client, {
		publicmsg : "@MEMBER Welcome to MINET X 2022. ",
		publicchannel : "996366655041048702"
		})

	//server stats

	 const guild = client.guilds.cache.get('996366654231564328');
	 const totalUsers = client.channels.cache.get('996366655041048703');
	 const Participants = client.channels.cache.get('996366655041048704');
	 setInterval(function () {
	 	console.log('Getting stats update..')
	 	var userCount = guild.memberCount;
	 	var participantCount = guild.roles.cache.get('996366654231564332').members.size;
	 	console.log("Total Members: " + userCount);
	 	console.log("Participants: " + participantCount);
	 	totalUsers.setName("Total Members: " + userCount)
	 		.then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
	 		.catch(console.error);

	 	Participants.setName("Participants: " + participantCount)
	 		.then(newChannel => console.log(`Stat channel renamed to: ${newChannel.name}`))
	 		.catch(console.error);
	 }, 30000)
});


client.on('guildMemberAdd', member => {
	console.log('User ' + member.user.username + ' has joined the server!')
  });


/*const initial = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Register for X 2021 Programming')
			.setDescription('Answer the Following questions in order to register for the programming event.')
			.setThumbnail('https://i.imgur.com/vBWPJ6R.png')
			.addField("Please Fill out the form with the the participants and school details.", "\u200b")
			.setTimestamp()
			.setFooter('X 2021');

const q1 = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Question 1')
			.setDescription('Participant 1 Full Name')
			.setTimestamp()
			.setFooter('X 2021');

const q2 = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Question 2')
			.setDescription('Participant 1 Email Address')
			.setTimestamp()
			.setFooter('X 2021');

const q3 = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Question 3')
			.setDescription('Participant 2 Full Name')
			.setTimestamp()
			.setFooter('X 2021');

const q4 = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Question 4')
			.setDescription('Participant 2 Email Address')
			.setTimestamp()
			.setFooter('X 2021');

const q5 = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Question 5')
			.setDescription('What is your Hackerrank Username? ( Enter the name of the username you will use to participate in the programming event )')
			.setTimestamp()
			.setFooter('X 2021');

const q6 = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Question 6')
			.setDescription('What is your School Name?')
			.setTimestamp()
			.setFooter('X 2021');

const ty = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Register')
			.setDescription('Thank you for registering for the programming event, if you are facing an issues then contact BlurryMeal#9359.')
			.setTimestamp()
			.setFooter('X 2021');


		
let userApplications = {}
client.on("message", function(message) {
	if (message.author.equals(client.user)) return;
  
	let authorId = message.author.id;
  
	if (message.content === "xprog_reg") {
		console.log(`Apply begin for authorId ${authorId}`);
		// User is not already in a registration process    
		if (!(authorId in userApplications)) {
			userApplications[authorId] = { "step" : 1}
			
			message.channel.send("The Programming Registration form has been sent to your DMs");
			message.author.send(initial);
			message.author.send(q1);
		}
  
	} else {
  
		if (message.channel.type === "dm" && authorId in userApplications) {
			let authorApplication = userApplications[authorId];
  
			if (authorApplication.step == 1 ) {
				authorApplication.answer1 = message.content;
				message.author.send(q2);
				authorApplication.step ++;
			}
			else if (authorApplication.step == 2) {
				authorApplication.answer2 = message.content;
				message.author.send(q3);
				authorApplication.step ++;
			}
			else if (authorApplication.step == 3) {
				authorApplication.answer3 = message.content;
				message.author.send(q4);
				authorApplication.step ++;
			}
			else if (authorApplication.step == 4) {
				authorApplication.answer4 = message.content;
				message.author.send(q5);
				authorApplication.step ++;
			}
			else if (authorApplication.step == 5) {
				authorApplication.answer5 = message.content;
				message.author.send(q6);
				authorApplication.step ++;
			}
  
			else if (authorApplication.step == 6) {
				authorApplication.answer6 = message.content;
				message.author.send(ty);
				//before deleting, you can send the answers to a specific channel by ID
				client.channels.cache.get("875008198271205447")
				  .send(`${message.author.tag}\n ------------------------------------\n **Participant 1:** ${authorApplication.answer1}\n **Participant 1 Mail:** ${authorApplication.answer2}\n **Participant 2:** ${authorApplication.answer3}\n **Participant 2 Mail:** ${authorApplication.answer4}\n **Hackerrank Username:** ${authorApplication.answer5}\n **School Name:** ${authorApplication.answer6}\n ------------------------------------`);
				delete userApplications[authorId];
			}
		}
	}
  });

const initial1 = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Register for X 2021 Gaming')
			.setDescription('Answer the Following questions in order to register for the Gaming event.')
			.setThumbnail('https://i.imgur.com/vBWPJ6R.png')
			.addField("Please Fill out the form with the the participants and school details.", "\u200b")
			.setTimestamp()
			.setFooter('X 2021');

const qq1 = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Question 1')
			.setDescription('Participant 1 Full Name')
			.setTimestamp()
			.setFooter('X 2021');

const qq2 = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Question 2')
			.setDescription('Participant 1 Email Address')
			.setTimestamp()
			.setFooter('X 2021');

const qq3 = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Question 3')
			.setDescription('Participant 2 Full Name')
			.setTimestamp()
			.setFooter('X 2021');

const qq4 = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Question 4')
			.setDescription('Participant 2 Email Address')
			.setTimestamp()
			.setFooter('X 2021');


const qq5 = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Question 5')
			.setDescription('What is your School Name?')
			.setTimestamp()
			.setFooter('X 2021');

const ty1 = new Discord.MessageEmbed()
			.setColor('#6699EE')
			.setTitle('Register')
			.setDescription('Thank you for registering for the Gaming event, if you are facing an issues then contact RADΞR#5376.')
			.setTimestamp()
			.setFooter('X 2021');


		
let userApplications1 = {}
client.on("message", function(message) {
	if (message.author.equals(client.user)) return;
  
	let authorId = message.author.id;
  
	if (message.content === "xgaming_reg") {
		console.log(`Apply begin for authorId ${authorId}`);
		// User is not already in a registration process    
		if (!(authorId in userApplications1)) {
			userApplications1[authorId] = { "step" : 1}
			
			message.channel.send("The Gaming Registration form has been sent to your DMs");
			message.author.send(initial1);
			message.author.send(qq1);
		}
  
	} else {
  
		if (message.channel.type === "dm" && authorId in userApplications1) {
			let authorApplication1 = userApplications1[authorId];
  
			if (authorApplication1.step == 1 ) {
				authorApplication1.aanswer1 = message.content;
				message.author.send(qq2);
				authorApplication1.step ++;
			}
			else if (authorApplication1.step == 2) {
				authorApplication1.aanswer2 = message.content;
				message.author.send(qq3);
				authorApplication1.step ++;
			}
			else if (authorApplication1.step == 3) {
				authorApplication1.aanswer3 = message.content;
				message.author.send(qq4);
				authorApplication1.step ++;
			}
			else if (authorApplication1.step == 4) {
				authorApplication1.aanswer4 = message.content;
				message.author.send(qq5);
				authorApplication1.step ++;
			}
  
			else if (authorApplication1.step == 5) {
				authorApplication1.aanswer5 = message.content;
				message.author.send(ty1);
				//before deleting, you can send the answers to a specific channel by ID
				client.channels.cache.get("876517505424826388")
				  .send(`${message.author.tag}\n ------------------------------------\n **Participant 1:** ${authorApplication1.aanswer1}\n **Participant 1 Mail:** ${authorApplication1.aanswer2}\n **Participant 2:** ${authorApplication1.aanswer3}\n **Participant 2 Mail:** ${authorApplication1.aanswer4}\n**School Name:** ${authorApplication1.aanswer5}\n ------------------------------------`);
				delete userApplications1[authorId];
			}
		}
	}
  });
*/




client.login("OTkyNDQxODQxNjUzOTE1NzA5.G6JrPQ.e2WLKH6oNirr1wfgCXRwsBJ-DwGuGp8l2Yb7Bs");