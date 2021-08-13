import React from "react";
//import styles from "./SpellModal.module.css";

const SpellModal = ({ selectedSpell, onConfirm }) => {
  // return (
  //   <React.Fragment>
  //     <div className={styles.spellModalBackdrop} onClick={onConfirm}>
  //       <div className={styles.spellModal}>
  //         <h1 className={styles.spellModalH1}>{selectedSpell.name}</h1>
  //         <div className={styles.spellModalContent}>
  //           <p><span className={styles.category}>Level: </span>{selectedSpell.level}</p>
  //           <p><span className={styles.category}>Cast Time: </span>{selectedSpell.castTime}</p>
  //           <p><span className={styles.category}>Components: </span>{selectedSpell.components}</p>
  //           <p><span className={styles.category}>Duration: </span>{selectedSpell.duration}</p>
  //           <p><span className={styles.category}>School: </span>{selectedSpell.school}</p>
  //           <p><span className={styles.category}>Attack: </span>{selectedSpell.attack}</p>
  //           <p><span className={styles.category}>Damage/Effect: </span>{selectedSpell.damageEffect}</p>
  //           <p><span className={styles.category}>Ritual: </span>{selectedSpell.ritual}</p>
  //           <p><span className={styles.category}>Concentration: </span>{selectedSpell.concentration}</p>
  //           <p><span className={styles.category}>Source: </span>{selectedSpell.source}</p>
  //           <p><span className={styles.category}>At Higher Level: </span>{selectedSpell.atHigherLevel}</p>
  //           <p><span className={styles.category}>Castable By: </span>{selectedSpell.castableBy}</p>
  //           <p><span className={styles.category}>Description: </span></p>
  //           <p>{selectedSpell.description}</p>
  //         </div>
  //         <footer className={styles.spellModalActions}>
  //           <button onClick={selectedSpell.onConfirm}>Back</button>
  //         </footer>
  //       </div>
  //     </div>
  //   </React.Fragment>
  // );
};

export default SpellModal;
