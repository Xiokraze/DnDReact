export class Armor {
  constructor(
    description,
    value,
    armorClass,
    strengthRequirement,
    stealth,
    weight,
    type
  ) {
    this.description = description;
    this.value = value;
    this.armorClass = armorClass;
    this.strengthRequirement = strengthRequirement;
    this.stealth = stealth;
    this.weight = weight;
    this.type = type;
  }
}

export const lightArmor = [
  new Armor(
    "Padded",
    "5 gp",
    "11 + Dex Modifier",
    "-",
    "Disadvantage",
    "8 lbs",
    "Light"
  ),
  new Armor(
    "Leather",
    "10 gp",
    "11 + Dex Modifier",
    "-",
    "-",
    "10 lbs",
    "Light"
  ),
  new Armor(
    "Studded Leather",
    "45 gp",
    "12 + Dex Modifier",
    "-",
    "-",
    "13 lbs",
    "Light"
  ),
];

export const mediumArmor = [
  new Armor(
    "Hide",
    "10 gp",
    "12 + Dex Modifier (Max 2)",
    "-",
    "-",
    "12 lbs",
    "Medium"
  ),
  new Armor(
    "Chain Shirt",
    "50 gp",
    "13 + Dex Modifier (Max 2)",
    "-",
    "-",
    "20 lbs",
    "Medium"
  ),
  new Armor(
    "Scale Mail",
    "50 gp",
    "14 + Dex Modifier (Max 2)",
    "-",
    "Disadvantage",
    "45 lbs",
    "Medium"
  ),
  new Armor(
    "Breastplate",
    "400 gp",
    "14 + Dex Modifier (Max 2)",
    "-",
    "-",
    "20 lbs",
    "Medium"
  ),
  new Armor(
    "Half Plate",
    "750 gp",
    "15 + Dex Modifier (Max 2)",
    "-",
    "Disadvantage",
    "40 lbs",
    "Medium"
  ),
];

export const heavyArmor = [
  new Armor("Ring Mail", "30 gp", "14", "-", "Disadvantage", "40 lbs", "Heavy"),
  new Armor(
    "Chain Mail",
    "75 gp",
    "16",
    "13",
    "Disadvantage",
    "55 lbs",
    "Heavy"
  ),
  new Armor("Splint", "200 gp", "17", "15", "Disadvantage", "60 lbs", "Heavy"),
  new Armor("Plate", "1,500 gp", "18", "15", "Disadvantage", "65 lbs", "Heavy"),
];

export const shields = [
  new Armor("Shield", "10 gp", "+2", "-", "-", "6 lbs", "Shield"),
];
