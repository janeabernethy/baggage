import React from 'react';
import styles from "./baggage.module.css";


const BLACK_INSTA = "/socials/insta_black.svg"
const GRAY_INSTA = "/socials/insta_gray.svg"

const BLACK_LINKEDIN = "/socials/linkedin_black.svg"
const GRAY_LINKEDIN = "/socials/linkedin_gray.svg"

export const Menu = ({ currentItem, updateCurrentSection }: { currentItem: number, updateCurrentSection: (newSection: number) => void }) => {

  const [instaIcon, setInstaIcon] = React.useState(GRAY_INSTA);
  const [linkedinIcon, setLinkedinIcon] = React.useState(GRAY_LINKEDIN);


  function getMenuItemClass(index: number) {
    return index === currentItem ? styles.menuItemSelected : styles.menuItem
  }

  return (
    <div className={styles.menuOuter}>
      <div>
        <div onClick={() => updateCurrentSection(0)} className={getMenuItemClass(0)}>
          <div className={styles.menuText} style={{ fontSize: "x-large" }}>Baggage</div>
        </div>
      </div>
      <div className={styles.menu}>
        <div onClick={() => updateCurrentSection(1)} className={getMenuItemClass(1)}>
          <div className={styles.menuText}>Festivals</div>

        </div>
        <div onClick={() => updateCurrentSection(2)} className={getMenuItemClass(2)}>
          <div className={styles.menuText}>Press</div>

        </div>
        <div onClick={() => updateCurrentSection(3)} className={getMenuItemClass(3)}>
          <div className={styles.menuText}>About</div>

        </div>
      </div>
      <div className={styles.contactIcons}>
        <div className={styles.contactIcon} onMouseOver={() => { setInstaIcon(BLACK_INSTA)}} onMouseOut={() => {setInstaIcon(GRAY_INSTA)}} onClick={() => { window.open("https://www.instagram.com/lucy_maree_davidson/") }}>
          <img className={styles.contactIconImg} src={instaIcon} alt="link to instagram" />
        </div>
        <div className={styles.contactIcon} onMouseOver={() => { setLinkedinIcon(BLACK_LINKEDIN)}} onMouseOut={() => {setLinkedinIcon(GRAY_LINKEDIN)}}  onClick={() => { window.open("https://www.youtube.com/channel/UCiA4Ft1wfLVMVfWrC1wTzog") }}>
          <img className={styles.contactIconImg} src={linkedinIcon} alt="link to linkedin" />
        </div>
      </div>
    </div>
  )
}

