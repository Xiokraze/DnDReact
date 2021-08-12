import { spellList } from "./SpellList";
import { FixedSizeList as List } from "react-window";
import useWindowDimensions from "../../Hooks/WindowDimensions";
import React, { useState, useRef } from "react";
import SpellModal from "./SpellModal";

const Spells = () => {
  const reactWindowRef = useRef(null);
  const [selectedSpell, setSelectedSpell] = useState();
  const { height, width } = useWindowDimensions();
  const Row = ({ index, style }) => (
    <div
      onClick={() => setSelectedSpell(spellList[index])}
      className={"reactWindowRow"}
      style={style}
    >
      {spellList[index].name}
    </div>
  );

  const clearSelectedSpell = () => {
    setSelectedSpell(null);
  }

  // Recalculate the list's height to make it scale with devices and window resizing.
  let yOffset = 0;
  let element = document.querySelector(".reactWindow");
  if (element) {
    var rect = element.getBoundingClientRect();
    yOffset = rect.top;
  }
  let reactWindowHeight = Math.round((height - yOffset) * 0.95);
  let reactWindowWidth = Math.round(width * 0.95);

  return (
    <div>
      {selectedSpell && selectedSpell.name && (
        <SpellModal
          selectedSpell={selectedSpell}
          onConfirm={clearSelectedSpell}
        />
      )}
      <List
        ref={reactWindowRef}
        className={"reactWindow"}
        height={reactWindowHeight}
        itemCount={spellList.length}
        itemSize={35}
        width={reactWindowWidth}
      >
        {Row}
      </List>
    </div>

    // <div className={"itemDiv"}>
    //   <ul className={"ulList"}>

    //   </ul>
    // </div>
    // <table>
    //   <tr>
    //     <th>Name</th>
    //     {/* <th>Level</th>
    //     <th>Cast Time</th>
    //     <th>Range</th>
    //     <th>Components</th>
    //     <th>Duration</th>
    //     <th>School</th>
    //     <th>Attack</th>
    //     <th>Damage/Effect</th>
    //     <th>Ritual</th>
    //     <th>Concentration</th>
    //     <th>Source</th>
    //     <th>At Higher Level</th>
    //     <th>Castable By</th>
    //     <th>Description</th> */}
    //   </tr>
    //   {spellList.map((item) => (
    //     <td>{item.name}</td>
    //   ))}
    // </table>
  );
};

export default Spells;
