import { gems10, gems50, gems100, gems500, gems1000, gems5000 } from "./ItemLists/GemLists";

const Gems = () => {
  var itemList = [];
  gems10.forEach((element) => {
    itemList.push(element);
  });
  gems50.forEach((element) => {
    itemList.push(element);
  });
  gems100.forEach((element) => {
    itemList.push(element);
  });
  gems500.forEach((element) => {
    itemList.push(element);
  });
  gems500.forEach((element) => {
    itemList.push(element);
  });
  gems1000.forEach((element) => {
    itemList.push(element);
  });
  gems5000.forEach((element) => {
    itemList.push(element);
  });

  itemList.sort((x,y) => (x.name > y.name) ? 1 : -1);
  return (
    <table>
      <tr>
        <th>Name</th>
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

export default Gems;