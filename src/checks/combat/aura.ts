import { Entity, world } from "@minecraft/server";

world.afterEvents.entityHitEntity.subscribe(event => {
    const attacker: Entity = event.damagingEntity;
    const victim: Entity = event.hitEntity;

    if (attacker.typeId !== "minecraft:player") return;

    // This file is incomplete and is being worked on.
});