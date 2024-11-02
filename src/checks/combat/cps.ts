const maxCps = 15;
const cpsRange = 1;

import { Entity, world, system } from "@minecraft/server";

world.afterEvents.entityHitEntity.subscribe(event => {
    const attacker: Entity = event.damagingEntity;
    const victim: Entity = event.hitEntity;

    if (attacker.typeId !== "minecraft:player") return;

    const cpsValue = attacker.getDynamicProperty("cps");
    const newCpsValue = (typeof cpsValue === 'number' ? cpsValue : 0) + 1;
    attacker.setDynamicProperty("cps", newCpsValue);

    // CPS Check A (Max CPS Limit Reached)
    if (newCpsValue > maxCps) {
        if (victim.typeId === "minecraft:player") {
            console.warn(`[CPS Check A] Max CPS limit reached by ${attacker.nameTag}. Victim: ${victim.nameTag}`);
        } else {
            console.warn(`[CPS Check A] Max CPS limit reached by ${attacker.nameTag}. Victim: ${victim.typeId}`);
        }
        try {
            victim.addEffect("instant_health", 1, {showParticles: false, amplifier: 0});
        } catch {
            console.warn("Failed to add Instant Health to Victim");
        }
    }

    // CPS Check B (Consistent/Inhuman CPS Patterns)
    if (
        // @ts-ignore
        Math.abs(attacker.getDynamicProperty("cps") - attacker.getDynamicProperty("cp1")) <= cpsRange ||
        // @ts-ignore
        Math.abs(attacker.getDynamicProperty("cps1") - attacker.getDynamicProperty("cp2")) <= cpsRange
    ) {
        if (victim.typeId === "minecraft:player") {
            console.warn(`[CPS Check B] Consistent/Inhuman CPS Patterns triggered by ${attacker.nameTag}. Victim: ${victim.nameTag}`);
        } else {
            console.warn(`[CPS Check B] Consistent/Inhuman CPS Patterns triggered by ${attacker.nameTag}. Victim: ${victim.typeId}`);
        }
        try {
            victim.addEffect("instant_health", 1, {showParticles: false, amplifier: 0});
        } catch {
            console.warn("Failed to add Instant Health to Victim");
        }
    }
})

system.runInterval(() => {
    for (const player of world.getAllPlayers()) {
        player.setDynamicProperty("cps1", player.getDynamicProperty("cps"));
        player.setDynamicProperty("cps", 0);
        player.setDynamicProperty("cps2", player.getDynamicProperty("cps1"));
        player.setDynamicProperty("cps3", player.getDynamicProperty("cps2"));
        player.setDynamicProperty("cps4", player.getDynamicProperty("cps3"));
    }
}, 20);