import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Spell.module.css";

const Spell = () => {
  const location = useLocation();
  const [spell, setSpell] = useState();

  useEffect(() => {
    setSpell(location.state.detail);
  }, [location]);

  return (
    <React.Fragment>
      {spell && spell.name && (
        <React.Fragment>
          <h1 className={styles.spellModalH1}>{spell.name}</h1>
          <div className={styles.spellModalContent}>
            <p>
              <span className={styles.category}>Level: </span>
              {spell.level}
            </p>
            <p>
              <span className={styles.category}>Cast Time: </span>
              {spell.castTime}
            </p>
            <p>
              <span className={styles.category}>Components: </span>
              {spell.components}
            </p>
            <p>
              <span className={styles.category}>Duration: </span>
              {spell.duration}
            </p>
            <p>
              <span className={styles.category}>School: </span>
              {spell.school}
            </p>
            <p>
              <span className={styles.category}>Attack: </span>
              {spell.attack}
            </p>
            <p>
              <span className={styles.category}>Damage/Effect: </span>
              {spell.damageEffect}
            </p>
            <p>
              <span className={styles.category}>Ritual: </span>
              {spell.ritual}
            </p>
            <p>
              <span className={styles.category}>Concentration: </span>
              {spell.concentration}
            </p>
            <p>
              <span className={styles.category}>Source: </span>
              {spell.source}
            </p>
            <p>
              <span className={styles.category}>At Higher Level: </span>
              {spell.atHigherLevel}
            </p>
            <p>
              <span className={styles.category}>Castable By: </span>
              {spell.castableBy}
            </p>
            <p>
              <span className={styles.category}>Description: </span>
            </p>
            <p>{spell.description}</p>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Spell;
