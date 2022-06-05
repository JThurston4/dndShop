const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const token = process.env.TOKEN;
const clientId = process.env.CLIENTID;
const guildId = ["227468739484844032", "320712012445384714"];
// const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
	new SlashCommandBuilder().setName('shop').setDescription('Replies with item shop'),
	new SlashCommandBuilder().setName('d20').setDescription('Roll a 20 sided dice'),
	new SlashCommandBuilder().setName('d12').setDescription('Roll a 12 sided dice'),
	new SlashCommandBuilder().setName('d10').setDescription('Roll a 10 sided dice'),
	new SlashCommandBuilder().setName('d8').setDescription('Roll a 8 sided dice'),
	new SlashCommandBuilder().setName('d6').setDescription('Roll a 6 sided dice'),
	new SlashCommandBuilder().setName('d4').setDescription('Roll a 4 sided dice'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

guildId.forEach((id) => rest.put(Routes.applicationGuildCommands(clientId, id), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error))