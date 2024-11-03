import { Player, world } from "@minecraft/server";

export const illegalCharacters = [
    "§", // Used for colored text
    ":_input_key.jump:", // Jump Emoji Input Key
    ":_input_key.sneak:", // Sneak Emoji Input Key
    ":_input_key.sprint:", // Sprint Emoji Input Key
    ":_input_key.forward:", // Forward Emoji Input Key
    ":_input_key.back:", // Back Emoji Input Key
    ":_input_key.left:", // Left Emoji Input Key
    ":_input_key.right:", // Right Emoji Input Key
    ":_input_key.attack:", // Attack Emoji Input Key
    ":_input_key.inventory:", // Inventory Emoji Input Key
    ":_input_key.cycleItemLeft:", // Cycle Item Left Emoji Input Key
    ":_input_key.cycleItemRight:", // Cycle Item Right Emoji Input Key
    ":_input_key.use:", // Use Emoji Input Key
    ":_input_key.drop:", // Drop Emoji Input Key
    ":_input_key.codeBuilder:", // Code Builder Emoji Input Key
    "", // Food Emoji
    "", // Armor Emoji
    "", // Heart Emoji
    "", // Wooden Pickaxe Emoji
    "", // Wooden Sword Emoji
    "", // Crafting Table Emoji
    "", // Furnace Emoji
    "", // Minecoin Emoji
    "", // Token Emoji
    "", // Craft Toggle On Emoji
    "", // Craft Toggle Off Emoji
    "", // Crosshair Emoji
    "", // Agent Emoji
    "", // Immersive Reader Emoji
    "", // Hollow Star Emoji
    "", // Solid Star Emoji
    "", // New Touch Jump Emoji
    "", // New Touch Attack Emoji
    "", // New Touch Joystick Emoji
    "", // New Touch Place Emoji
    "", // New Touch Sneak Emoji
    "", // New Touch Sprint Emoji
    "", // New Touch Fly Up Emoji
    "", // New Touch Fly Down Emoji
    "", // New Touch Dismount Emoji
    "", // Old Touch Jump Emoji
    "", // Old Touch Crouch Emoji
    "", // Old Touch Fly Up Emoji
    "", // Old Touch Fly Down Emoji
    "", // Old Touch Stop Flying Emoji
    "", // Old Touch Left Arrow Emoji
    "", // Old Touch Right Arrow Emoji
    "", // Old Touch Up Arrow Emoji
    "", // Old Touch Down Arrow Emoji
    "", // Old Touch Small Jump Emoji
    "", // Old Touch Small Crouch Emoji
    "", // Old Touch Small Fly Up Emoji
    "", // Old Touch Small Fly Down Emoji
    "", // Old Touch Small Left Arrow Emoji
    "", // Old Touch Small Right Arrow Emoji
    "", // Old Touch Small Up Arrow Emoji
    "", // Old Touch Small Down Arrow Emoji
    "", // Old Touch Small Inventory Emoji
    "", // Left Click Emoji
    "", // Right Click Emoji
    "", // Middle Click Emoji
    "", // Small Left Click Emoji
    "", // Small Right Click Emoji
    "", // Small Middle Click Emoji
    "", // Small Mouse Emoji
    "", // Xbox Y Emoji
    "", // Xbox B Emoji
    "", // Xbox A Emoji
    "", // Xbox X Emoji
    "", // Xbox Back Emoji
    "", // Xbox Start Emoji
    "", // Xbox Left Bumper Emoji
    "", // Xbox Right Bumper Emoji
    "", // Xbox Left Trigger Emoji
    "", // Xbox Right Trigger Emoji
    "", // Xbox Left Stick Emoji
    "", // Xbox Right Stick Emoji
    "", // Xbox D-pad Up Emoji
    "", // Xbox D-pad Right Emoji
    "", // Xbox D-pad Down Emoji
    "", // Xbox D-pad Left Emoji
    "", // Nintendo Switch X Emoji
    "", // Nintendo Switch A Emoji
    "", // Nintendo Switch B Emoji
    "", // Nintendo Switch Y Emoji
    "", // Nintendo Switch + Emoji
    "", // Nintendo Switch - Emoji
    "", // Nintendo Switch Left Bumper Emoji
    "", // Nintendo Switch Right Bumper Emoji
    "", // Nintendo Switch Left Trigger Emoji
    "", // Nintendo Switch Right Trigger Emoji
    "", // Nintendo Switch Left Stick Emoji
    "", // Nintendo Switch Right Stick Emoji
    "", // Nintendo Switch D-pad Up Emoji
    "", // Nintendo Switch D-pad Right Emoji
    "", // Nintendo Switch D-pad Down Emoji
    "", // Nintendo Switch D-pad Left Emoji
    "", // PlayStation Triangle Emoji
    "", // PlayStation Circle Emoji
    "", // PlayStation Cross Emoji
    "", // PlayStation Square Emoji
    "", // PlayStation Options/Share Emoji
    "", // PlayStation Touch Pad Emoji
    "", // PlayStation Left Bumper Emoji
    "", // PlayStation Right Bumper Emoji
    "", // PlayStation Left Trigger Emoji
    "", // PlayStation Right Trigger Emoji
    "", // PlayStation Left Stick Emoji
    "", // PlayStation Right Stick Emoji
    "", // PlayStation D-pad Up Emoji
    "", // PlayStation D-pad Right Emoji
    "", // PlayStation D-pad Down Emoji
    "", // PlayStation D-pad Left Emoji
    "", // Oculus 0 Emoji
    "", // Oculus B Emoji
    "", // Oculus A Emoji
    "", // Oculus Y Emoji
    "", // Oculus X Emoji
    "", // Oculus Left Grip Emoji
    "", // Oculus Right Grip Emoji
    "", // Oculus Left Trigger Emoji
    "", // Oculus Right Trigger Emoji
    "", // Oculus Left Stick Emoji
    "", // Oculus Right Stick Emoji
    "", // Windows Mixed Reality Menu Emoji
    "", // Windows Mixed Reality Windows Emoji
    "", // Windows Mixed Reality Left Touchpad Emoji
    "", // Windows Mixed Reality Left Horizontal Touchpad Emoji
    "", // Windows Mixed Reality Left Vertical Touchpad Emoji
    "", // Windows Mixed Reality Right Touchpad Emoji
    "", // Windows Mixed Reality Right Horizontal Touchpad Emoji
    "", // Windows Mixed Reality Right Vertical Touchpad Emoji
    "", // Windows Mixed Reality Left Trigger Emoji 
    "", // Windows Mixed Reality Right Trigger Emoji 
    "", // Windows Mixed Reality Left Grab Emoji
    "", // Windows Mixed Reality Right Grab Emoji
    "", // Windows Mixed Reality Left Stick Emoji
    "", // Windows Mixed Reality Right Stick Emoji
];

world.beforeEvents.chatSend.subscribe(event => {
    const player: Player = event.sender;
    const message: string = event.message;

    if (illegalCharacters.some(illegalCharacters => message.includes(illegalCharacters))) {
        event.cancel = true;
    }
});