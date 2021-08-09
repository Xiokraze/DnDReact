class Weapon {
  constructor(description, value, damage, weight, properties, type) {
    this.description = description;
    this.value = value;
    this.damage = damage;
    this.weight = weight;
    this.properties = properties;
    this.type = type;
  }
}

export const simpleMelee = [
  new Weapon(
    "Club",
    "1 sp",
    "1d4 bludgeoning",
    "2 lbs",
    "Light",
    "Simple Melee"
  ),
  new Weapon(
    "Dagger",
    "2 gp",
    "1d4 piercing",
    "1 lbs",
    "Finesse, Light, Thrown (range 20/60)",
    "Simple Melee"
  ),
  new Weapon(
    "Greatclub",
    "2 sp",
    "1d8 bludgeoning",
    "10 lbs",
    "Two-handed",
    "Simple Melee"
  ),
  new Weapon(
    "Handaxe",
    "5 gp",
    "1d6 slashing",
    "2 lbs",
    "Light, Thrown (range 20/60)",
    "Simple Melee"
  ),
  new Weapon(
    "Javelin",
    "5 sp",
    "1d6 piercing",
    "2 lbs",
    "Thrown (range 30/120)",
    "Simple Melee"
  ),
  new Weapon(
    "Light Hammer",
    "2 gp",
    "1d4 bludgeoning",
    "2 lbs",
    "Light, Thrown (range 20/60)",
    "Simple Melee"
  ),
  new Weapon("Mace", "5 gp", "1d6 bludgeoning", "4 lbs", "-", "Simple Melee"),
  new Weapon(
    "Quarterstaff",
    "2 sp",
    "1d6 bludgeoning",
    "4 lbs",
    "Versatile (1d8)",
    "Simple Melee"
  ),
  new Weapon(
    "Sickle",
    "1 gp",
    "1d4 slashing",
    "2 lbs",
    "Light",
    "Simple Melee"
  ),
  new Weapon(
    "Spear",
    "1 gp",
    "1d6 piercing",
    "3 lbs",
    "Thrown (range 20/60), Versatile (1d8)",
    "Simple Melee"
  ),
];

export const simpleRanged = [
  new Weapon(
    "Crossbow, Light",
    "25 gp",
    "1d8 piercing",
    "5 lbs",
    "Ammunition (range 80/320), Loading, Two-handed",
    "Simple Ranged"
  ),
  new Weapon(
    "Dart",
    "5 cp",
    "1d4 piercing",
    "1/4 lbs",
    "Finesse, Thrown (range 20/60)",
    "Simple Ranged"
  ),
  new Weapon(
    "Shortbow",
    "25 gp",
    "1d6 piercing",
    "2 lbs",
    "Ammunition (range 80/320), Two-handed",
    "Simple Ranged"
  ),
  new Weapon(
    "Sling",
    "1 sp",
    "1d4 bludgeoning",
    "-",
    "Ammunition (range 30/120)",
    "Simple Ranged"
  ),
];

export const martialMelee = [
  new Weapon(
    "Battleaxe",
    "10 gp",
    "1d8 slashing",
    "4 lbs",
    "Versatile (1d10)",
    "Martial Melee"
  ),
  new Weapon(
    "Flail",
    "10 gp",
    "1d8 bludgeoning",
    "2 lbs",
    "-",
    "Martial Melee"
  ),
  new Weapon(
    "Glaive",
    "20 gp",
    "1d10 slashing",
    "6 lbs",
    "Heavy, Reach, Two-handed",
    "Martial Melee"
  ),
  new Weapon(
    "Greataxe",
    "30 gp",
    "1d12 slashing",
    "7 lbs",
    "Heavy, Two-handed",
    "Martial Melee"
  ),
  new Weapon(
    "Greatsword",
    "50 gp",
    "2d6 slashing",
    "6 lbs",
    "Heavy, Two-handed",
    "Martial Melee"
  ),
  new Weapon(
    "Halberd",
    "20 gp",
    "1d10 slashing",
    "6 lbs",
    "Heavy, Reach, Two-handed",
    "Martial Melee"
  ),
  new Weapon(
    "Lance",
    "10 gp",
    "1d12 piercing",
    "6 lbs",
    "Reach, Special",
    "Martial Melee"
  ),
  new Weapon(
    "Longsword",
    "15 gp",
    "1d8 slashing",
    "3 lbs",
    "Versatile (1d10)",
    "Martial Melee"
  ),
  new Weapon(
    "Maul",
    "10 gp",
    "2d6 bludgeoning",
    "10 lbs",
    "Heavy, Two-handed",
    "Martial Melee"
  ),
  new Weapon(
    "Morningstar",
    "15 gp",
    "1d8 piercing",
    "4 lbs",
    "-",
    "Martial Melee"
  ),
  new Weapon(
    "Pike",
    "5 gp",
    "1d10 piercing",
    "18 lbs",
    "Heavy, Reach, Two-handed",
    "Martial Melee"
  ),
  new Weapon(
    "Rapier",
    "25 gp",
    "1d8 piercing",
    "2 lbs",
    "Finesse",
    "Martial Melee"
  ),
  new Weapon(
    "Scimitar",
    "25 gp",
    "1d6 slashing",
    "3 lbs",
    "Finesse, Light",
    "Martial Melee"
  ),
  new Weapon(
    "Shortsword",
    "10 gp",
    "1d6 piercing",
    "2 lbs",
    "Finesse, Light",
    "Martial Melee"
  ),
  new Weapon(
    "Trident",
    "5 gp",
    "1d6 piercing",
    "4 lbs",
    "Thrown (range 20/60), Versatile (1d8)",
    "Martial Melee"
  ),
  new Weapon("War Pick", "5 gp", "1d8 piercing", "2 lbs", "-", "Martial Melee"),
  new Weapon(
    "Warhammer",
    "15 gp",
    "1d8 bludgeoning",
    "2 lbs",
    "Versatile (1d10)",
    "Martial Melee"
  ),
  new Weapon(
    "Whip",
    "2 gp",
    "1d4 slashing",
    "3 lbs",
    "Finesse, Reach",
    "Martial Melee"
  ),
];

export const martialRanged = [
  new Weapon(
    "Blowgun",
    "10 gp",
    "1 piercing",
    "1 lbs",
    "Ammunition (range 25/100), Loading",
    "Martial Ranged"
  ),
  new Weapon(
    "Crossbow, Hand",
    "75 gp",
    "1d6 piercing",
    "3 lbs",
    "Ammunition (range 30/120), Light, Loading",
    "Martial Ranged"
  ),
  new Weapon(
    "Crossbow, Heavy",
    "50 gp",
    "1d10 piercing",
    "18 lbs",
    "Ammunition (range 100/400), Heavy, Loading, Two-handed",
    "Martial Ranged"
  ),
  new Weapon(
    "Longbow",
    "50 gp",
    "1d8 piercing",
    "2 lbs",
    "Ammunition (range 150/600), Heavy, Two-handed",
    "Martial Ranged"
  ),
  new Weapon(
    "Net",
    "1 gp",
    "-",
    "3 lbs",
    "Special, Thrown (range 5/15)",
    "Martial Ranged"
  ),
];
