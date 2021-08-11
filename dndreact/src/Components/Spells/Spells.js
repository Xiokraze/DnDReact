import { spellList } from "./SpellList";
import { FixedSizeList as List } from "react-window";
import WindowDimensions from "../../Hooks/WindowDimensions";
import useWindowDimensions from "../../Hooks/WindowDimensions";
import React, { useState, useRef } from "react";

const Spells = () => {
  const reactWindowRef = useRef(null);
  const { height, width } = useWindowDimensions();
  const Row = ({ index, style }) => (
    <div className={"reactWindowRow"} style={style}>
      {spellList[index].name}
    </div>
  );
  let yOffset = 0;

  // Recalculate the list's height to make it scale with devices
  // and window resizing.
  let element = document.querySelector(".reactWindow");
  if (element) {
    var rect = element.getBoundingClientRect();
    yOffset = rect.top;
  }
  let reactWindowHeight = Math.round((height - yOffset) * .95);
  let reactWindowWidth = Math.round(width * .95);

  return (
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
