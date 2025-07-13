// index.js
const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once('ready', () => {
  console.log(`🤖 Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.content.toLowerCase() === 'hi friday') {
    message.reply('Hello! I am Friday, your assistant bot 🧠');
  }
});

client.login(process.env.TOKEN);
