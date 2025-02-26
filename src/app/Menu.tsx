import React from 'react';
import styles from "./baggage.module.css";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export const Menu = ({ currentItem, updateCurrentSection }: { currentItem: number, updateCurrentSection: (newSection: number) => void }) => {
  React.useEffect(() => {
    // console.log("currentItem " + currentItem)
  }, [currentItem])

  function getMenuItemClass(index: number) {
    return index === currentItem ? styles.menuItemSelected : styles.menuItem
  }

  return (
    <div className={styles.menuOuter}>
      <div>
        <div onClick={() => updateCurrentSection(0)} className={getMenuItemClass(0)}>
          <div className={styles.menuText} style={{ fontSize: "x-large" }}>Baggage</div>
          {/* {currentItem === 0 &&
            <div className={styles.menuUnderline} />
          } */}
        </div>
      </div>
      <div className={styles.menu}>
        <div onClick={() => updateCurrentSection(1)} className={getMenuItemClass(1)}>
          <div className={styles.menuText}>Festivals</div>
          {/* {currentItem === 2 &&
            <div className={styles.menuUnderline} />
          } */}
        </div>
        <div onClick={() => updateCurrentSection(2)} className={getMenuItemClass(2)}>
          <div className={styles.menuText}>Press</div>
          {/* {currentItem === 3 &&
            <div className={styles.menuUnderline} />
          } */}
        </div>
        <div onClick={() => updateCurrentSection(3)} className={getMenuItemClass(3)}>
          <div className={styles.menuText}>About</div>
          {/* {currentItem === 4 &&
            <div className={styles.menuUnderline} />
          } */}
        </div>
      </div>
      <div className={styles.contactIcons}>
        <div className={styles.contactIcon} onClick={() => { window.open("https://www.instagram.com/lucy_maree_davidson/") }}>
          <img className={styles.contactIconImg} src="/socials/insta.svg" alt="link to instagram" />
        </div>
        <div className={styles.contactIcon} onClick={() => { window.open("https://www.youtube.com/channel/UCiA4Ft1wfLVMVfWrC1wTzog") }}>
          <img className={styles.contactIconImg} src="/socials/linkedin.svg" alt="link to linkedin" />
        </div>
      </div>
    </div>
  )
}

