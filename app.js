const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.on('ready', async() => {
	console.log('Ready!');
//	client.user.setActivity("something boring, probably");
});

client.on('message', async message => {
	let messageArray = message.content.split(" ");
	let cmd = messageArray [0];
	let args = messageArray.slice(1);

	if (message.content.startsWith(`${prefix}botinfo`)) {
		let botIcon = client.user.displayAvatarURL;
		let botEmbed = new Discord.RichEmbed()
		.setTitle("Behold. The Bot Himself.")
		.setDescription(`hi, i'm ren's funky little server bot.\ni've been a real pain in the ass to\ncode! sorry 哈哈\n(psst, ren should learn some js)`)
		.setColor("#ffce17")
		.setThumbnail(botIcon);

		message.channel.send(botEmbed);
	}

	else if (message.content.startsWith(`${prefix}ping`)) {
			message.channel.send('Pong.');
	}

  else if (message.content === `${prefix}server`) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members:
			${message.guild.memberCount}`);
	}

	else if (message.content === `${prefix}userinfo`) {
		message.channel.send(`Your username is ${message.author.username}\nYour
			icon is\n${message.author.avatarURL}`);
	}
});


client.login(process.env.BOT_TOKEN);
