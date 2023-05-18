import * as alt from '@altv/server';

export type ClientEvent<Args> = alt.Events.ClientScriptEventContext & { args: Args };
