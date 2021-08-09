import styles from "./Items.module.css";
import React, { useState } from "react";
import Armor from "./Armor";
import Art from "./Art";
import Gems from "./Gems";
import GeneralItems from "./GeneralItems";
import Trinkets from "./Trinkets";
import Weapons from "./Weapons";


const Items = () => {
  const [showHideArmor, setShowHideArmor] = useState(false);
  const [showHideArt, setShowHideArt] = useState(false);
  const [showHideGems, setShowHideGems] = useState(false);
  const [showHideGeneral, setShowHideGeneral] = useState(false);
  const [showHideTrinkets, setShowHideTrinkets] = useState(false);
  const [showHideWeapons, setShowHideWeapons] = useState(false);

  const hideComponents = () => {
    setShowHideArmor(false);
    setShowHideArt(false);
    setShowHideGems(false);
    setShowHideGeneral(false);
    setShowHideTrinkets(false);
    setShowHideWeapons(false);
  };

  const showComponent = (component) => {
    hideComponents();
    switch (component) {
      case "armor":
        setShowHideArmor(true);
        break;
      case "art":
        setShowHideArt(true);
        break;
      case "gems":
        setShowHideGems(true);
        break;
      case "general":
        setShowHideGeneral(true);
        break;
      case "trinkets":
        setShowHideTrinkets(true);
        break;
      case "weapons":
        setShowHideWeapons(true);
        break;
      default:
        break;
    }
  };

  const armorClicked = () => {
    showComponent("armor");
  };
  const artClicked = () => {
    showComponent("art");
  };
  const gemsClicked = () => {
    showComponent("gems");
  };
  const generalClicked = () => {
    showComponent("general");
  };
  const trinketsClicked = () => {
    showComponent("trinkets");
  };
  const weaponsClicked = () => {
    showComponent("weapons");
  };

  const armorClass = showHideArmor ? styles.liOptionFocused : styles.liOption;
  const artClass = showHideArt ? styles.liOptionFocused : styles.liOption;
  const gemsClass = showHideGems ? styles.liOptionFocused : styles.liOption;
  const generalClass = showHideGeneral ? styles.liOptionFocused : styles.liOption;
  const trinketsClass = showHideTrinkets ? styles.liOptionFocused : styles.liOption;
  const weaponsClass = showHideWeapons ? styles.liOptionFocused : styles.liOption;
  
  return (
    <div className={styles.itemDiv}>
      <ul className={styles.ulList}>
        <li onClick={armorClicked} className={armorClass}>
          Armor
        </li>
        <li onClick={artClicked} className={artClass}>
          Art
        </li>
        <li onClick={gemsClicked} className={gemsClass}>
          Gems
        </li>
        <li onClick={generalClicked} className={generalClass}>
          General
        </li>
        <li onClick={trinketsClicked} className={trinketsClass}>
          Trinkets
        </li>
        <li onClick={weaponsClicked} className={weaponsClass}>
          Weapons
        </li>
      </ul>
      <div className={styles.dataContainer}>
        {showHideArmor && <Armor/>}
        {showHideArt && <Art/>}
        {showHideGems && <Gems/>}
        {showHideGeneral && <GeneralItems/>}
        {showHideTrinkets && <Trinkets/>}
        {showHideWeapons && <Weapons/>}
      </div>
    </div>
  );
};

export default Items;
