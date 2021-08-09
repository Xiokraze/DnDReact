import {
  ammunition,
  arcaneFoci,
  druidicFoci,
  generalItems,
  holySymbols,
} from "./ItemLists/GeneralList";

const GeneralItems = () => {
  var itemList = [];
  ammunition.forEach((element) => {
    itemList.push(element);
  });
  arcaneFoci.forEach((element) => {
    itemList.push(element);
  });
  druidicFoci.forEach((element) => {
    itemList.push(element);
  });
  generalItems.forEach((element) => {
    itemList.push(element);
  });
  holySymbols.forEach((element) => {
    itemList.push(element);
  });
  itemList.sort((x, y) => (x.description > y.description ? 1 : -1));

  return (
    <table>
      <tr>
        <th>Description</th>
        <th>Value</th>
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

export default GeneralItems;
