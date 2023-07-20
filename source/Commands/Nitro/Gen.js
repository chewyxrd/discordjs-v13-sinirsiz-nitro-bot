module.exports = {
	config: {
		aliases: ["gen"],
		name: "gen",
    help: "gen",
		enabled: true
	},

	run: async ({ client, message, args, embed, guild, author }) => {

        function chewy(chewyxrd, leiseocde) {

            var random = '';
            
            if (leiseocde.indexOf('A') > -1) random += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                  
            if (leiseocde.indexOf('a') > -1) random += 'abcdefghıjklmnopqrstuvwxyz';      
            
            if (leiseocde.indexOf('0') > -1) random += '1234567890';
            
            var toplam = '';
            
            for (var i = chewyxrd; i > 0; --i) 
            
            {
            
            toplam += random[Math.floor(Math.random() * random.length)];
            
            }
            
            return toplam;
        }

            message.channel.send("discord.gift/"+ chewy(16,'0Aa'));

}};
