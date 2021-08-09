import React from "react";
//import { FixedSizeList as List } from "react-window";
//import styles from "./Items.module.css";
import { lightArmor, mediumArmor, heavyArmor, shields } from "./ItemLists/ArmorLists";

const Armor = () => {
  var itemList = [];
  lightArmor.forEach((element) => {
    itemList.push(element);
  });
  mediumArmor.forEach((element) => {
    itemList.push(element);
  });
  heavyArmor.forEach((element) => {
    itemList.push(element);
  });
  shields.forEach((element) => {
    itemList.push(element);
  });

  itemList.sort((x,y) => (x.description > y.description) ? 1 : -1);

  return (
    <table>
      <tr>
        <th>Description</th>
        <th>Value</th>
        <th>Armor Class</th>
        <th>Req. Str</th>
        <th>Stealth</th>
        <th>Weight</th>
        <th>Type</th>
      </tr>
      {itemList.map((item) => (
        <tr key={item.id}>
          {Object.values(item).map((val) => (
            <td>{val}</td>
          ))}
        </tr>
      ))}
    </table>
  );
};

export default Armor;
