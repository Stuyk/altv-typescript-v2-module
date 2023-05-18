import * as alt from '@altv/server';
import { Events } from '../../shared/events';
import { ClientEvent } from '../interfaces/events';

let kickPlayerIn: { [id: number]: number } = {};

alt.Events.onPlayerConnect(({ player }) => {
    Object.keys(kickPlayerIn).forEach((id) => {
        if (kickPlayerIn[id] > Date.now()) {
            return;
        }

        const somePlayer = alt.Player.all.find((x) => x.id === parseInt(id));
        if (!somePlayer) {
            delete kickPlayerIn[id];
            return;
        }

        somePlayer.kick('Failed to Login');
    });

    kickPlayerIn[player.id] = Date.now() + 60000 * 3;
    player.emit(Events.toClient.authenticate);
});

type HandleAuthEvent = ClientEvent<[bearer: string]>;
alt.Events.onClient(Events.toServer.finishAuthenticate, async ({ player, args: [bearerToken] }: HandleAuthEvent) => {
    if (typeof bearerToken === 'undefined') {
        player.kick('Open Discord, and Rejoin the Server');
        return;
    }

    const request: Response = await fetch('https://discordapp.com/api/users/@me', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${bearerToken}`,
        },
    }).catch((err) => {
        console.log(err);
        return undefined;
    });

    if (!request || request.status !== 200) {
        player.kick('Open Discord, and Rejoin the Server');
        return;
    }

    const data = await request.json();
    if (!data) {
        player.kick('Failed to obtain discord name or discriminator.');
        return;
    }

    // Setup General Player Information
    const name = `${data.username}#${data.discriminator}`;

    player.streamSyncedMeta.authenticated = true;
    player.streamSyncedMeta.name = name;

    player.model = 'mp_m_freemode_01';
    player.spawn(new alt.Vector3(0, 0, 72));

    // const arena = getCurrentArena();
    // arena.spawnPlayer(player);

    alt.log(`${name} has joined the match.`);
    delete kickPlayerIn[player.id];

    player.emit(Events.toClient.startTicks);
});
