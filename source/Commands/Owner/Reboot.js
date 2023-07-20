module.exports = {
	config: {
		aliases: ["reboot"],
		name: "reboot",
    help: "reboot",
		enabled: true
	},

	run: async ({ client, message, args, embed, guild, author }) => {
        
        message.channel.send("__NİTRO GİFT__ üretimi durduruldu.").then(msg => {
    console.log(`BOT: Bot yeniden başlatıldı!`);
    process.exit(0);
  })

}};
