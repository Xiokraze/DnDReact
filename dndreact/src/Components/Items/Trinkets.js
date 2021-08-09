import { trinkets } from "./ItemLists/TrinketList";

const Trinkets = () => {
  trinkets.sort((x, y) => (x.description > y.description ? 1 : -1));
  return (
    <table>
      <tr>
        <th>Description</th>
        <th>Type</th>
      </tr>
      {trinkets.map((item) => (
        <tr key={item.id}>
          {Object.values(item).map((val) => (
            <td>{val}</td>
          ))}
        </tr>
      ))}
    </table>
  );
};

export default Trinkets;
