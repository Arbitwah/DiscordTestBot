const Discord = require('discord.js');
module.exports = {
    name: 'exit',
    description:"kills discord bot",
    execute(message,client){
             message.channel.send('Terminating bot');
             client.destroy();
            }
};