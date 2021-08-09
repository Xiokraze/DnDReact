import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeaderNavBar = () => {
  useEffect(() => {
    var menuSelection = localStorage.getItem("menuSelection");
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
    localStorage.setItem("menuSelection", "home");
  };

  const itemsClicked = (event) => {
    setHomeFocused(false);
    setItemsFocused(true);
    setSpellsFocused(false);
    localStorage.setItem("menuSelection", "items");
  };

  const spellsClicked = (event) => {
    setHomeFocused(false);
    setItemsFocused(false);
    setSpellsFocused(true);
    localStorage.setItem("menuSelection", "spells");
  };

  const homeClass = homeFocused ? "navMenuSelected" : "navMenu";
  const itemClass = itemsFocused ? "navMenuSelected" : "navMenu";
  const spellClass = spellsFocused ? "navMenuSelected" : "navMenu";

  return (
    <div>
      <ul class="navMenu">
        <li class={homeClass} onClick={homeClicked}>
          <Link to="/">Home</Link>
        </li>
        <li class={itemClass}>
          <Link to="/items" onClick={itemsClicked}>
            Items
          </Link>
        </li>
        <li class={spellClass}>
          <Link to="/spells" onClick={spellsClicked}>
            Spells
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderNavBar;
