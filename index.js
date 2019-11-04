require('dotenv').config(); //Dotenv is a zero-dependency module that loads environment variables from a .env file into proccess.env
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.evn.TOKEN;

bot.login(TOKEN);

bot.on ('ready',()=>{
    console.info(`Logged in as ${bot.user.tag}`);
});