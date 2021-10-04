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
        case "generators":
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
  const [generatorsFocused, setGeneratorsFocused] = useState(false);

  const homeClicked = () => {
    setHomeFocused(true);
    setItemsFocused(false);
    setSpellsFocused(false);
    setGeneratorsFocused(false);
    sessionStorage.setItem("menuSelection", "home");
  };

  const itemsClicked = () => {
    setHomeFocused(false);
    setItemsFocused(true);
    setSpellsFocused(false);
    setGeneratorsFocused(false);
    sessionStorage.setItem("menuSelection", "items");
  };

  const spellsClicked = () => {
    setHomeFocused(false);
    setItemsFocused(false);
    setSpellsFocused(true);
    setGeneratorsFocused(false);
    sessionStorage.setItem("menuSelection", "spells");
  };

  const generatorsClicked = () => {
    setHomeFocused(false);
    setItemsFocused(false);
    setSpellsFocused(false);
    setGeneratorsFocused(true);
    sessionStorage.setItem("menuSelection", "generators");
  };

  const homeClass = homeFocused ? "navMenuSelected" : "navMenu";
  const itemClass = itemsFocused ? "navMenuSelected" : "navMenu";
  const spellClass = spellsFocused ? "navMenuSelected" : "navMenu";
  const generatorsClass = generatorsFocused ? "navMenuSelected" : "navMenu";

  return (
    <div>
      <ul className="navMenu">
        <li className={homeClass} onClick={homeClicked}>
          <Link to="/">Home</Link>
        </li>
        <li className={generatorsClass}>
          <Link to="/generators" onClick={generatorsClicked}>
            Generators
          </Link>
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
