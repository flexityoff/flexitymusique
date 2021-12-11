module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = player.getQueue(int.guildId);

    switch (int.customId) {
        case 'saveTrack':
            {
                if (!queue || !queue.playing) return int.reply({ content: `Aucune musique en cours de lecture... essayez à nouveau ? ❌`, ephemeral: true, components: [] });

                int.member.send(`Vous avez enregistré la piste ${queue.current.title} | ${queue.current.author} depuis le serveur ${int.member.guild.name} ✅`).then(() => {
                    return int.reply({ content: `Je t'ai envoyé le titre de la musique par messages privés ✅`, ephemeral: true, components: [] });
                }).catch(error => {
                    return int.reply({ content: `Impossible de vous envoyer un message privé... réessayez ? ❌`, ephemeral: true, components: [] });
                });
            }
    }
};