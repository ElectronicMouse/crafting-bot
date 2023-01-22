module.exports = {
    name: 'ready',
    once: true,
    execute(client){

        const guild = client.guilds.cache.get('934380732225302558');
        guild.members.fetch({ withPresences: true }).then(fetchedMembers => {
	        fetchedMembers.filter(member => {
                if((!member.user.bot)&&(member.roles.cache.has("1066760497824800789"))){
                    member.send(member.user.username)
                }
                
                
            });
        });

    }

}