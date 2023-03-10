const fs = require('node:fs');
const path = require('node:path');
const { REST, Routes } = require('discord.js');
require('dotenv/config');

// CLIENT_ID is ID of our application, while GUILD_ID is ID of server/s he will operate on (for multiple servers needs to be array, and changes in code so that it resolves arrays)

const CLIENT_ID = process.env.CLIENT_ID;
//const GUILD_ID = process.env.GUILD_ID;

const commands = []
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

/**
 * guild commands registration
 */
/*
rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands })
	.then((data) => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);
*/

rest.put(Routes.applicationCommands(CLIENT_ID),{ body: commands },)
	.then((data) => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);
