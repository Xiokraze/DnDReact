import {
  simpleMelee,
  simpleRanged,
  martialMelee,
  martialRanged,
} from "./ItemLists/WeaponList";

const Weapons = () => {
  var itemList = [];
  simpleMelee.forEach((element) => {
    itemList.push(element);
  });
  simpleRanged.forEach((element) => {
    itemList.push(element);
  });
  martialMelee.forEach((element) => {
    itemList.push(element);
  });
  martialRanged.forEach((element) => {
    itemList.push(element);
  });

  itemList.sort((x,y) => (x.description > y.description) ? 1 : -1);

  return (
    <table>
      <tr>
        <th>Description</th>
        <th>Value</th>
        <th>Damage</th>
        <th>Weight</th>
        <th>Properties</th>
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

export default Weapons;
