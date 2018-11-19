const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");
const prefix = '-';

client.on('message', message => {
    if (message.author.bot) return ;
    if(!message.channel.guild) return ;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(0);
    let a = require("./https://raw.githubusercontent.com/jack12n/Tbon-mamak/master/meow.json");
    if(cmd === prefix + `me`) {
    moment.locale('ru-ly');
    if(!a[message.author.id]){
    a[message.author.id] = {
    a: 0
    };
    }
    let cc = a[message.author.id].a;
    let Embed = new Discord.RichEmbed()
    .setAuthor("Профиль: "+message.author.username)
    .setColor("#00FF00")
    .addField("Провёл в сети:",`
    ● ${moment(message.member.joinedAt).fromNow()}
    ● ${moment(message.member.joinedAt).format('h')} часов
    ● ${moment(message.member.joinedAt).format('mm')} минуты`)
    .addField("Отправил:",`● ${cc} сообщений`)
    .setImage(message.author.displayAvatarURL)
    .setFooter(`ID: ${message.author.id}`)
    message.channel.send(Embed);
    }
    });
    client.on('message', message => {
    if (message.author.bot) return;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(0);
    let a = require("./https://raw.githubusercontent.com/jack12n/Tbon-mamak/master/meow.json");
    if(!a[message.author.id]){
    a[message.author.id] = {
    a: 0
    };
    }
    let msgs = Math.floor(Math.random() * 0) + 1;
    let msgs1 = Math.floor(Math.random() * 0) + 1;
    console.log(`${msgs} ; ${msgs1}`);
    if(msgs === msgs1){
    a[message.author.id] = {
    a: a[message.author.id].a + msgs
    };
    fs.writeFile("./meow.json", JSON.stringify(a), (err) => {
    if (err) console.log(err)
    });
    }
    });
    
     client.login(process.env.zabi);
