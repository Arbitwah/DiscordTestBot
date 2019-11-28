const Discord = require('discord.js');
const oryx = new Discord.RichEmbed()
.setColor('#0099ff')
.setTitle("Oryx the Taken King")
.setAuthor("Hive")
.setDescription(`Oryx, the Taken King, born Aurash and formerly known as Auryx (meaning "Long Thought"), is the sovereign of the Osmium Throne, the God-King of the Hive, and master of the Taken. Reborn from the Darkness itself through a wicked pact, Oryx is the founder of the Hive race, alongside his sisters and fellow deities, Savathûn, the Witch-Queen and Xivu Arath, God of War, and the source of their terrible power. Of all the Hive gods, he alone holds the power to bend other races to his will. Oryx is also the father of the dreaded Crota, a deadly Hive Prince who slew thousands of Guardians during the Great Disaster, and Nokris, his estranged second-born and herald of the Worm God Xol. Enraged at the death of Crota, Oryx traveled to the Solar System aboard his Dreadnaught seeking revenge but was defeated by the Guardian. After escaping to his throne realm; his second match with the Guardians ends with his permanent loss and the threat he posed to the Solar System`)
.setThumbnail('https://www.destinypedia.com/images/c/c9/Grimoire_card_Oryx_rebuked.jpg')
module.exports = {
    name: 'oryx',
    description:"the taken king",
    execute(message){
             message.channel.send(oryx);
            }
};