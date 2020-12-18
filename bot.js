const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'billy') {

       message.reply('is cool');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NzcxMjc3MTgxMTMzMjU4Nzgy.X5px2Q.rH9UelKwQV1L7qOX9KySUA5umcw);
