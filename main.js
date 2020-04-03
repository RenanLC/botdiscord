const { Client } = require('discord.js');
const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') msg.channel.send('Pong!');
  if (msg.content === 'ying') msg.channel.send('Yang!');
  if (msg.content === 'paulin') msg.channel.send('Renan!');
  if (msg.content === 'adrien') msg.channel.send('BOUUUUFFFFFFEEE!');
});

client.login('Njk1Mzc0ODI5NzAzOTIxNzM0.Xocowg.lO7MBWwz82EvIgL1WOfc7bx_U8w');