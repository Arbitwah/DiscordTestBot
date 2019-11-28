
//Gregory Pugh 
const Discord = require('discord.js');
const{prefix, token, tester} = require('./config.json');
const fs = require('fs');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
client.once('ready',()=>{
    console.info('Ready!');
})

client.on('message',msg=>{
    if(!msg.content.startsWith(prefix)|| msg.author.bot) return;
    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    console.info(command);
    if(!client.commands.has(command)) return;

    try{
        client.commands.get(command).execute(msg,client,args);
    }catch (error){
        console.info(error);
        msg.reply('There was an error trying to execute that command!');
        client.destroy();
    }
    // if(command==='ping'){
    //     msg.channel.send('pong');
    // }else if(command ==='sally'){
    //     msg.channel.send('Sells Sea Shells down by the Sea Shore');
    // }
});

// client.on('message',msg=>{
// if(!msg.content.startsWith(prefix)|| msg.author.bot) return;
// const args = msg.content.slice(prefix.length).split(/ +/);
// const command = args.shift().toLowerCase();
// 44
// if(command === 'tester'){
//     const guildmem = msg.member;
//     guildmem.addRole(tester);
//     msg.channel.send(msg.member +' has been added to the tester channel');
    
// }

// if(command ==='stoptest'){
//     const guildmem = msg.member;
//     guildmem.removeRole(tester);
//     msg.channel.send(msg.member + 'has been removed from the tester channel');
// }
// });

client.login(token);