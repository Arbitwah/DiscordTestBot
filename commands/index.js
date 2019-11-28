const Discord = require('discord.js');
module.exports = {
    name: 'ping',
    description:'sends the message pong to the user',
    execute(message){
             message.channel.send('pong.');
        }
};

