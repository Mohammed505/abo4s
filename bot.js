 const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("529837052385296398")
setInterval(function() {
channel.send(`447 Is here Guys...`);
}, 30)
})


client.on("message", function(message) {
    var args = message.content.split(/ +/g);
    var command = args.shift()
    
    if(command == ".4s") {
        message.channel.send(args.slice(1, args.length).join(" "))    
    }
});

var prefix = "4"
client.on('message', message => {
if (message.content.startsWith(prefix + "say")) {
var args = message.content.split(" ")
args = args.join(" ").slice(args[0].length);

if (!args) return;

message.channel.send(args);
};
})

client.login(process.env.BOT_TOKEN); 
