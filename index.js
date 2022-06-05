// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
// const { token } = require('./config.json');
const AsciiTable = require('ascii-table');
const shopKeeper = require('./shopKeeper');

const token = process.env.TOKEN;
 
// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});


client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	// switch (commandName) {
	// 	case 'ping': 
	// 		await interaction.reply('Pong!');
	// 		break;
	// 	case 'server':
	// 		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	// 		break;
	// 	case 'user': 
	// 		await interaction.reply('User info.');
	// 		break;
	// 	case 'shop': 
	// 		const shop = shopKeeper();
	// 		var table = new AsciiTable('Shop').setHeading('Name', 'Type', 'Rarity', 'Price');;

	// 		for (let i = 0; i < shop.length; i++) {
	// 			if (table.toString().length > 2000) {
	// 				while(table.toString().length >= 2000) {
	// 					table.__rows.pop();
	// 				}
	// 					return await interaction.reply(` \`\`\`${table.toString()}\`\`\` `);
	// 				}
	// 			table.addRow(shop[i].name, shop[i].type, shop[i].rarity, shop[i].price)			
	// 		}
	// 		await interaction.reply(` \`\`\`${table.toString()}\`\`\` `);
	// 		break;

	// }

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
	} else if (commandName === 'd20') {
		await interaction.reply(Math.ceil(Math.random() * 20 ))
	} else if (commandName === 'd12') {
		await interaction.reply(Math.ceil(Math.random() * 12 ))
	} else if (commandName === 'd10') {
		await interaction.reply(Math.ceil(Math.random() * 10 ))
	} else if (commandName === 'd8') {
		await interaction.reply(Math.ceil(Math.random() * 8 ))
	} else if (commandName === 'd6') {
		await interaction.reply(Math.ceil(Math.random() * 6 ))
	} else if (commandName === 'd4') {
		await interaction.reply(Math.ceil(Math.random() * 4 ))
	}

});

// Login to Discord with your client's token
client.login(token);