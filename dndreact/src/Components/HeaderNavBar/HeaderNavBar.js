//import { ReactComponent as MenuIcon } from "../../Assets/MenuIcon.svg";
//import { ReactComponent as CloseMenu } from "../../Assets/CloseMenu.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
//import styles from "./HeaderNavBar.module.css";

const HeaderNavBar = () => {
  //const [click, setClick] = useState(false);
  //const handleClick = () => setClick(!click);
  //const closeMobileMenu = () => setClick(false);
  const [homeFocused, setHomeFocused] = useState(true);
  const [itemsFocused, setItemsFocused] = useState(false);
  const [spellsFocused, setSpellsFocused] = useState(false);

  const homeClicked = (event) => {
    setHomeFocused(true);
    setItemsFocused(false);
    setSpellsFocused(false);
  }

  const itemsClicked = (event) => {
    setHomeFocused(false);
    setItemsFocused(true);
    setSpellsFocused(false);
  }

  const spellsClicked = (event) => {
    setHomeFocused(false);
    setItemsFocused(false);
    setSpellsFocused(true);
  }

  const homeClass = homeFocused ? "navMenuSelected" : "navMenu";
  const itemClass = itemsFocused ? "navMenuSelected" : "navMenu";
  const spellClass = spellsFocused ? "navMenuSelected" : "navMenu";

  return (
    <div>
      <ul class="navMenu">
        <li class={homeClass} onClick={homeClicked}>
          <Link to="/" >Home</Link>
        </li>
        <li class={itemClass}>
          <Link to="/" onClick={itemsClicked}>Items</Link>
        </li>
        <li class={spellClass}>
          <Link to="/" onClick={spellsClicked}>Spells</Link>
        </li>
      </ul>
    </div>

    // <div className={styles.headerNavBar}>
    //   <div className={styles.headerNavMenuContainer}>
    //     <div>
    //       <nav>
    //         <ul
    //           className={click ? styles.navOptionsActive : styles.navOptions}
    //           style={{ overflowY: "scroll" }}
    //         >
    //           <li onClick={closeMobileMenu}>
    //             <Link  to="/">
    //               Home
    //             </Link>
    //           </li>
    //           <li onClick={closeMobileMenu}>
    //             <Link  to="/">
    //               Items
    //             </Link>
    //           </li>
    //           <li onClick={closeMobileMenu}>
    //             <Link className={styles.menuLink} to="/">
    //               Spells
    //             </Link>
    //           </li>
    //         </ul>
    //       </nav>
    //     </div>
    //     <div onClick={handleClick}>
    //       {click ? (
    //         <CloseMenu className={styles.menuIcon} />
    //       ) : (
    //         <MenuIcon className={styles.menuIcon} />
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default HeaderNavBar;
