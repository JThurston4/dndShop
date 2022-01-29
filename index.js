// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const AsciiTable = require('ascii-table');
const shopKeeper = require('./shopKeeper');

 
// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});


client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	} else if (commandName === 'shop') {
		const shop = shopKeeper();
		var table = new AsciiTable('Shop').setHeading('Name', 'Type', 'Rarity', 'Price');;

		for (let i = 0; i < shop.length; i++) {
			if (table.toString().length > 2000) {
				while(table.toString().length >= 2000) {
					table.__rows.pop();
				}
					return await interaction.reply(` \`\`\`${table.toString()}\`\`\` `);
				}
				table.addRow(shop[i].name, shop[i].type, shop[i].rarity, shop[i].price)			
			}
				return await interaction.reply(` \`\`\`${table.toString()}\`\`\` `);
	}

});

// Login to Discord with your client's token
client.login(token);