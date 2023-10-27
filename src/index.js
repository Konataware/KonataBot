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
}); 

client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()) return;
    
    if(interaction.commandName === 'ping'){
        interaction.reply(`Ping recebido! (｡•̀ᴗ-)✧`);
    }

    if(interaction.commandNAme === 'soma'){
        interaction.reply(`Placeholder`);
    }

});
client.login(process.env.BOT_TOKEN);
