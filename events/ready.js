module.exports = {
    name: 'ready',
    once: true,
    execute(client){
        const GUILD_ID = process.env.GUILD_ID;
        const TESTER_ID = process.env.TESTER_ID;
        const guild = client.guilds.cache.get(GUILD_ID);
        guild.members.fetch({ withPresences: true }).then(fetchedMembers => {
	        fetchedMembers.filter(member => {
                if((!member.user.bot)&&(member.roles.cache.has(TESTER_ID))){
                    member.send(member.user.username)
                }
                
                
            });
        });

    }

}