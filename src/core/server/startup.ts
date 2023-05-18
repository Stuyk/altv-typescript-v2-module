import './utility/ipc'; // Used to reconnect, do not remove.
import * as alt from '@altv/server';

import { connectLocalClient } from './utility/reconnect';

alt.log(`alt:V Server - Boilerplate Started`);

alt.Events.onPlayerConnect(handlePlayerConnect);

function handlePlayerConnect({ player }: { player: alt.Player }) {
    alt.log(`[${player.id}] ${player.name} has connected to the server.`);

    player.model = 'mp_m_freemode_01';
    player.spawn(new alt.Vector3(36.19486618041992, 859.3850708007812, 197.71343994140625), 0);
    player.emit('log:Console', 'alt:V Server - Boilerplate Started');
}

connectLocalClient();
