import React from 'react';
import styles from "./baggage.module.css";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export const Menu = ({ currentItem, updateCurrentSection }: { currentItem: number, updateCurrentSection: (newSection: number) => void }) => {
    React.useEffect(() => {
      // console.log("currentItem " + currentItem)
    }, [currentItem])
  
    return (
      <div className={styles.menu}>
        <div onClick={() => updateCurrentSection(0)} className={styles.menuItem}>
          <div className={styles.menuText}>Home</div>
          {currentItem === 0 &&
            <div className={styles.menuUnderline} />
          }
        </div>
        <div onClick={() => updateCurrentSection(1)} className={styles.menuItem}>
          <div className={styles.menuText}>About</div>
          {currentItem === 1 &&
            <div className={styles.menuUnderline} />
          }
        </div>
        <div onClick={() => updateCurrentSection(2)} className={styles.menuItem}>
          <div className={styles.menuText}>Selections</div>
          {currentItem === 2 &&
            <div className={styles.menuUnderline} />
          }
        </div>
        <div onClick={() => updateCurrentSection(3)} className={styles.menuItem}>
          <div className={styles.menuText}>Credits</div>
          {currentItem === 3 &&
            <div className={styles.menuUnderline} />
          }
        </div>
      </div>
    )
  }
  
  