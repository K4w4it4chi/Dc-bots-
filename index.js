const {
    Client,
    Attachment
} = require('discord.js');
const bot = new Client();
const ytdl = require("ytdl-core")

const tonken = 'OTQ2ODgyNzgyNzk2MzE2NzAy.GmruUY.d-LEpr_YWre0e2UK-K4hzVOF9ABL9-arTo1DdQ';

const prefix = "f!";

var version ='1.2';

var servers = {};


bot.on('ready'( => {
    console.log('Fizzy Bot 100% online ^ ^ !'+ version);
})



bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split("!");

    switch(args[0]) {
        case 'play':

           function play(connection,message){
            var server = servers[message.guild_id];
            
            server.dispatcher =  connection.playStream(ytdl(server.queue[0],fukter: "audioonly"}) );
            
            server.queue.shift(
                server.dispatcher.on("end",)){
                    if(server.queue[0]){
                        play(connection.message);
                    }else{
                        connection.disconnect()
                    }
            
            
                   

            if(!args[1]){
                nessage,channel.send(" você precisa do link ^ ^");
                return;
            }
        
            if(!message.member.voifceChannel){ 
                message.channel.send("Você precisa estar no canal para ouvir o bot !");
            }

            var server = servers [message.guild.id];

            server.queue.push(args[1];)

            if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection{
               play(connection,message);
            })
            
        break;

    
);

bot.login(token);
