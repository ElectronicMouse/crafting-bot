const { TextChannel } = require("discord.js")

module.exports = {
    name: 'ready',
    once: true,
    execute(client){
        //const user1 = client.users.fetch('373767659633770498')
        //const user2 = client.users.fetch('657226698185637890')
        client.users.fetch({ withPresences: true }).then(members => {
            members.foreach(member =>{
                dm.send(member.id, "ffs with this")
            })
        })
/*
        client.users.fetch('373767659633770498').then(dm => {
            dm.send(user1.username + " welcome to the game")
        })
        client.users.fetch('657226698185637890').then(dm => {
            dm.send(user2.username + " welcome to your game")
        })*/
    }

}