module.exports = {
    name: 'messageCreate',
    once: false,
    execute(message){
        if (message.author.bot) return
        message.reply(message.author.username + " I am your father")
    }

}