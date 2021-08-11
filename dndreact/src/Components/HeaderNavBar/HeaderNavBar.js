import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeaderNavBar = () => {
  useEffect(() => {
    var menuSelection = sessionStorage.getItem("menuSelection");
    if (menuSelection) {
      switch (menuSelection) {
        case "home":
          homeClicked();
          break;
        case "items":
          itemsClicked();
          break;
        case "spells":
          spellsClicked();
          break;
        default:
          break;
      }
    }
  }, []);

  const [homeFocused, setHomeFocused] = useState(true);
  const [itemsFocused, setItemsFocused] = useState(false);
  const [spellsFocused, setSpellsFocused] = useState(false);

  const homeClicked = (event) => {
    setHomeFocused(true);
    setItemsFocused(false);
    setSpellsFocused(false);
    sessionStorage.setItem("menuSelection", "home");
  };

  const itemsClicked = (event) => {
    setHomeFocused(false);
    setItemsFocused(true);
    setSpellsFocused(false);
    sessionStorage.setItem("menuSelection", "items");
  };

  const spellsClicked = (event) => {
    setHomeFocused(false);
    setItemsFocused(false);
    setSpellsFocused(true);
    sessionStorage.setItem("menuSelection", "spells");
  };

  const homeClass = homeFocused ? "navMenuSelected" : "navMenu";
  const itemClass = itemsFocused ? "navMenuSelected" : "navMenu";
  const spellClass = spellsFocused ? "navMenuSelected" : "navMenu";

  return (
    <div>
      <ul className="navMenu">
        <li className={homeClass} onClick={homeClicked}>
          <Link to="/">Home</Link>
        </li>
        <li className={itemClass}>
          <Link to="/items" onClick={itemsClicked}>
            Items
          </Link>
        </li>
        <li className={spellClass}>
          <Link to="/spells" onClick={spellsClicked}>
            Spells
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderNavBar;
