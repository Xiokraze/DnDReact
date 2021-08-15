import { spellList } from "./SpellList";
import { FixedSizeList as List } from "react-window";
import useWindowDimensions from "../../Hooks/WindowDimensions";
import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Spells = () => {
  const history = useHistory();
  const reactWindowRef = useRef(null);
  const { height, width } = useWindowDimensions();
  const [spell, setSpell] = useState("");
  const [foundSpells, setFoundSpells] = useState(spellList);

  useEffect(() => {
    var keyword = sessionStorage.getItem("spellSearch");
    if (keyword != null && keyword !== "") {
      var filteredList = spellList.filter(function (event) {
        return event.name.toUpperCase().includes(keyword.toUpperCase());
      });
      setFoundSpells(filteredList);
      sessionStorage.setItem("spellSearch", keyword);
      setSpell(keyword);
    } else {
      setFoundSpells(spellList);
    }
  }, []);

  const searchSpellEvent = (e) => {
    const keyword = e.target.value;
    if (keyword !== "") {
      var filteredList = spellList.filter(function (event) {
        return event.name.toUpperCase().includes(keyword.toUpperCase());
      });
      setFoundSpells(filteredList);
    } else {
      setFoundSpells(spellList);
    }
    sessionStorage.setItem("spellSearch", keyword);
    setSpell(keyword);
  };

  const spellChosen = (spell) => {
    history.push({
      pathname: "/spell",
      state: { detail: spell },
    });
  };

  const Row = ({ index, style }) => (
    <div
      onClick={() => spellChosen(foundSpells[index])}
      className={"reactWindowRow"}
      style={style}
    >
      {foundSpells[index].name}
    </div>
  );

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
      <input
        type="search"
        value={spell}
        onChange={searchSpellEvent}
        className="searchBar"
        placeholder="Search..."
      />
      <List
        ref={reactWindowRef}
        className={"reactWindow"}
        height={reactWindowHeight}
        itemCount={foundSpells.length}
        itemSize={35}
        width={reactWindowWidth}
      >
        {Row}
      </List>
    </div>
  );
};

export default Spells;
