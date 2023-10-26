require('dotenv').config();
const {Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`✅ ${c.user.tag} está ativa e funcionando!`);
})

client.on('messageCreate', (message) =>{
    if (message.author.bot){
        return;
    }
    let contentUpperCase = message.content.toUpperCase();
    console.log(message.content);
    if(contentUpperCase === 'PING'){
        message.reply('Ping recebido! (｡•̀ᴗ-)✧')
    }
})
client.login(process.env.BOT_TOKEN);
