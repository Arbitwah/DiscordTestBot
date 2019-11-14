//console.log(require('dotenv').config());
//srequire('dotenv').config(); //Dotenv is a zero-dependency module that loads environment variables from a .env file into proccess.env
//Gregory Pugh 
const Discord = require('discord.js');
const{prefix, token} = require('./config.json');
const fs = require('fs');
const client = new Discord.Client();
client.command = new Discord.Collection();
client.once('ready',()=>{
    console.info('Ready!');
})

client.on('message',msg=>{
    if(!msg.content.startsWith(prefix)|| msg.author.bot) return;
    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    console.info(command);

    if(command==='ping'){
        msg.channel.send('pong');
    }else if(command ==='sally'){
        msg.channel.send('Sells Sea Shells down by the Sea Shore');
    }
});

client.on('message',msg=>{
if(!msg.content.startsWith(prefix)|| msg.author.bot) return;
const args = msg.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();

if(command === 'tester'){
    const guildmem = msg.member;
    guildmem.addRole('---');
    msg.channel.send(msg.member +' has been added to the tester channel');
    
}
});


client.login(token);