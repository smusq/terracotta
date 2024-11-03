import { world } from "@minecraft/server";

import { illegalCharacters } from "checks/chat/characters";

world.afterEvents.playerJoin.subscribe(event => {
    if (illegalCharacters.some(illegalCharacters => event.playerName.includes(illegalCharacters))) {
        try {
            world.getDimension("overworld").runCommandAsync(`kick "${event.playerName}" Invalid Gamertag or Profile Name`);
        } catch {
            console.warn(`Failed to kick "${event.playerName}" for "Invalid Gamertag or Profile Name"`);
        }
    }
});