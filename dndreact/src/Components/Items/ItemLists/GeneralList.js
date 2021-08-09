class GeneralItem {
  constructor(description, value, weight, type) {
    this.description = description;
    this.value = value;
    this.weight = weight;
    this.type = type;
  }
}

export const holySymbols = [
  new GeneralItem("Amulet", "5 gp", "1 lb", "Holy Symbol"),
  new GeneralItem("Emblem", "5 gp", "-", "Holy Symbol"),
  new GeneralItem("Reliquary", "5 gp", "2 lbs", "Holy Symbol"),
];

export const druidicFoci = [
  new GeneralItem("Sprig of Mistletoe", "1 gp", "-", "Druidic Focus"),
  new GeneralItem("Totem", "1 gp", "-", "Druidic Focus"),
  new GeneralItem("Wooden Staff", "5 gp", "4 lbs", "Druidic Focus"),
  new GeneralItem("Yew Wand", "10 gp", "1 lb", "Druidic Focus"),
];

export const arcaneFoci = [
  new GeneralItem("Crystal", "10 gp", "1 lb", "Arcane Focus"),
  new GeneralItem("Orb", "20 gp", "3 lbs", "Arcane Focus"),
  new GeneralItem("Rod", "10 gp", "2 lb", "Arcane Focus"),
  new GeneralItem("Staff", "5 gp", "4 lbs", "Arcane Focus"),
  new GeneralItem("Wand", "10 gp", "1 lb", "Arcane Focus"),
];

export const ammunition = [
  new GeneralItem("Arrows (20)", "1 gp", "1 lb", "Ammunition"),
  new GeneralItem("Blowgun Needles (50)", "1 gp", "1 lb", "Ammunition"),
  new GeneralItem("Crossbow Bolts (20)", "1 gp", "1 1/2 lbs", "Ammunition"),
  new GeneralItem("Sling Bullets (20)", "4 cp", "1 1/2 lbs", "Ammunition"),
];

export const generalItems = [
  new GeneralItem("Abacus", "2 gp", "2 lb", "General Good"),
  new GeneralItem("Acid (vial)", "25 gp", "1 lb", "General Good"),
  new GeneralItem("Alchemist's fire (flask)", "50 gp", "1 lb", "General Good"),
  new GeneralItem("Antitoxin (vial)", "50 gp", "-", "General Good"),
  new GeneralItem("Backpack", "2 gp", "5 lbs", "General Good"),
  new GeneralItem(
    "Ball bearings (bag of 1,000)",
    "1 gp",
    "2 lbs",
    "General Good"
  ),
  new GeneralItem("Barrel", "2 gp", "70 lbs", "General Good"),
  new GeneralItem("Basket", "4 sp", "2 lbs", "General Good"),
  new GeneralItem("Bedroll", "1 gp", "7 lbs", "General Good"),
  new GeneralItem("Bell", "1 gp", "-", "General Good"),
  new GeneralItem("Blanket", "5 sp", "3 lbs", "General Good"),
  new GeneralItem("Block and tackle", "1 gp", "5 lbs", "General Good"),
  new GeneralItem("Book", "25 gp", "5 lbs", "General Good"),
  new GeneralItem("Bottle, glass", "2 gp", "2 lbs", "General Good"),
  new GeneralItem("Bucket", "5 cp", "2 lbs", "General Good"),
  new GeneralItem("Caltrops (bag of 20)", "1 gp", "2 lbs", "General Good"),
  new GeneralItem("Candle", "1 cp", "-", "General Good"),
  new GeneralItem("Case, crossbow bolt", "1 gp", "1 lb", "General Good"),
  new GeneralItem("Case, map or scroll", "1 gp", "1 lb", "General Good"),
  new GeneralItem("Chain (10 feet)", "5 gp", "10 lbs", "General Good"),
  new GeneralItem("Chalk (1 piece)", "1 cp", "-", "General Good"),
  new GeneralItem("Chest", "5 gp", "25 lbs", "General Good"),
  new GeneralItem("Climber's kit", "25 gp", "12 lbs", "General Good"),
  new GeneralItem("Clothes, common", "5 sp", "3 lbs", "General Good"),
  new GeneralItem("Clothes, costume", "5 gp", "4 lbs", "General Good"),
  new GeneralItem("Clothes, fine", "15 gp", "6 lbs", "General Good"),
  new GeneralItem("Clothes, traveler's", "2 gp", "4 lbs", "General Good"),
  new GeneralItem("Component pouch", "25 gp", "2 lbs", "General Good"),
  new GeneralItem("Crowbar", "2 gp", "5 lbs", "General Good"),
  new GeneralItem("Fishing tackle", "1 gp", "4 lbs", "General Good"),
  new GeneralItem("Flask or tankard", "2 cp", "1 lb", "General Good"),
  new GeneralItem("Grappling hook", "2 gp", "4 lbs", "General Good"),
  new GeneralItem("Hammer", "1 gp", "3 lbs", "General Good"),
  new GeneralItem("Hammer, sledge", "2 gp", "10 lbs", "General Good"),
  new GeneralItem("Healer's kit", "5 gp", "3 lbs", "General Good"),
  new GeneralItem("Holy water (flask)", "25 gp", "1 lb", "General Good"),
  new GeneralItem("Hourglass", "25 gp", "1 lb", "General Good"),
  new GeneralItem("Hunting trap", "5 gp", "25 lbs", "General Good"),
  new GeneralItem("Ink (1 ounce bottle)", "10 gp", "-", "General Good"),
  new GeneralItem("Ink pen", "2 cp", "-", "General Good"),
  new GeneralItem("Jug or pitcher", "2 cp", "4 lbs", "General Good"),
  new GeneralItem("Ladder (10 foot)", "1 sp", "25 lb", "General Good"),
  new GeneralItem("Lamp", "5 sp", "1 lb", "General Good"),
  new GeneralItem("Lantern, bullseye", "10 gp", "2 lbs", "General Good"),
  new GeneralItem("Lantern, hooded", "5 gp", "2 lbs", "General Good"),
  new GeneralItem("Lock", "10 gp", "1 lb", "General Good"),
  new GeneralItem("Magnifying glass", "100 gp", "-", "General Good"),
  new GeneralItem("Manacles", "2 gp", "6 lbs", "General Good"),
  new GeneralItem("Mess kit", "2 sp", "1 lb", "General Good"),
  new GeneralItem("Mirror, steel", "5 gp", "1/2 lb", "General Good"),
  new GeneralItem("Oil (flask)", "1 sp", "1 lb", "General Good"),
  new GeneralItem("Paper (one sheet)", "2 sp", "-", "General Good"),
  new GeneralItem("Parchment (one sheet)", "1 sp", "-", "General Good"),
  new GeneralItem("Perfume (vial)", "5 gp", "-", "General Good"),
  new GeneralItem("Pick, miner's", "2 gp", "10 lbs", "General Good"),
  new GeneralItem("Piton", "5 cp", "1/4 lb", "General Good"),
  new GeneralItem("Poison, basic (vial)", "100 gp", "-", "General Good"),
  new GeneralItem("Pole (10-foot)", "5 cp", "7 lbs", "General Good"),
  new GeneralItem("Pot, iron", "2 gp", "10 lbs", "General Good"),
  new GeneralItem(
    "Potion of Healing (2d4 + 2)",
    "50 gp",
    "1/2 lb",
    "General Good"
  ),
  new GeneralItem(
    "Potion of Greater Healing (4d4 + 4)",
    "200-250 gp",
    "1/2 lb",
    "General Good"
  ),
  new GeneralItem(
    "Potion of Superior Healing (8d4 + 8)",
    "2000-2500 gp",
    "1/2 lb",
    "General Good"
  ),
  new GeneralItem(
    "Potion of Supreme Healing (10d4 + 20)",
    "20000-25000 gp",
    "1/2 lb",
    "General Good"
  ),
  new GeneralItem("Pouch", "5 sp", "1 lb", "General Good"),
  new GeneralItem("Quiver", "1 gp", "1 lb", "General Good"),
  new GeneralItem("Ram, portable", "4 gp", "35 lbs", "General Good"),
  new GeneralItem("Rations (1 day)", "5 sp", "2 lbs", "General Good"),
  new GeneralItem("Robes", "1 gp", "4 lbs", "General Good"),
  new GeneralItem("Rope, hempen (50 feet)", "1 gp", "10 lbs", "General Good"),
  new GeneralItem("Rope, silk (50 feet)", "10 gp", "5 lbs", "General Good"),
  new GeneralItem("Sack", "1 cp", "1/2 lb", "General Good"),
  new GeneralItem("Scale, merchant's", "5 gp", "3 lbs", "General Good"),
  new GeneralItem("Sealing wax", "5 sp", "-", "General Good"),
  new GeneralItem("Shovel", "2 gp", "5 lbs", "General Good"),
  new GeneralItem("Signal whistle", "5 cp", "-", "General Good"),
  new GeneralItem("Signet ring", " 5 gp", "-", "General Good"),
  new GeneralItem("Soap", "2 cp", "-", "General Good"),
  new GeneralItem("Spellbook", "50 gp", "3 lbs", "General Good"),
  new GeneralItem("Spikes, iron (10)", "1 gp", "5 lbs", "General Good"),
  new GeneralItem("Spyglass", "1,000 gp", "1 lb", "General Good"),
  new GeneralItem("Tent, two-person", "2 gp", "20 lbs", "General Good"),
  new GeneralItem("Tinderbox", "5 sp", "1 lb", "General Good"),
  new GeneralItem("Torch", "1 cp", "1 lb", "General Good"),
  new GeneralItem("Vial", "1 gp", "-", "General Good"),
  new GeneralItem("Waterskin (full)", "2 sp", "5 lbs", "General Good"),
  new GeneralItem("Whetstone", "1 cp", "1 lb", "General Good"),
];
