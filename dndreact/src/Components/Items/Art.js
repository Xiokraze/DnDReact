import {art25, art250, art750, art2500, art7500} from "./ItemLists/ArtLists";

const Art = () => {
  var itemList = [];
  art25.forEach((element) => {
    itemList.push(element);
  });
  art250.forEach((element) => {
    itemList.push(element);
  });
  art750.forEach((element) => {
    itemList.push(element);
  });
  art2500.forEach((element) => {
    itemList.push(element);
  });
  art7500.forEach((element) => {
    itemList.push(element);
  });


  return (
    <table>
      <tr>
        <th>Description</th>
        <th>Value</th>
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
}

export default Art;