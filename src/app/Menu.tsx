import React from 'react';
import styles from "./baggage.module.css";
import gsap from 'gsap';

const BLACK_INSTA = "/socials/insta_black.svg"
const GRAY_INSTA = "/socials/insta_gray.svg"

const BLACK_LINKEDIN = "/socials/linkedin_black.svg"
const GRAY_LINKEDIN = "/socials/linkedin_gray.svg"



export const Menu = React.memo(({ isMobile, currentItem, updateCurrentSection }: { isMobile: boolean, currentItem: number, updateCurrentSection: (newSection: number) => void }) => {

  const [instaIcon, setInstaIcon] = React.useState(BLACK_INSTA);
  const [linkedinIcon, setLinkedinIcon] = React.useState(BLACK_LINKEDIN);
  const menuImgRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(menuImgRef.current, {
        duration: 0.1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: menuImgRef.current,
          start: "top top",
          end: "10px top",
          scrub: 0.5,
        },
        height: "75px", // Shrink height
      });
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  function getMenuItemClass(index: number) {
    return index === currentItem ? styles.menuItemSelected : styles.menuItem
  }

  if (isMobile) {
    return <MenuMobile currentItem={currentItem} updateCurrentSection={updateCurrentSection} />
  }
  else {
    return (
      <div ref={menuImgRef} className={styles.menuOuter}>
        <div className={styles.menuImageOuter}>
          <div onClick={() => updateCurrentSection(0)} className={styles.menuImage}>
          <img src={"menuheader.png"} alt="Baggage" />
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
          <div className={styles.contactIcon} onMouseOver={() => { setInstaIcon(GRAY_INSTA) }} onMouseOut={() => { setInstaIcon(BLACK_INSTA) }} onClick={() => { window.open("https://www.instagram.com/lucy_maree_davidson/") }}>
            <img className={styles.contactIconImg} src={instaIcon} alt="link to instagram" />
          </div>
          <div className={styles.contactIcon} onMouseOver={() => { setLinkedinIcon(GRAY_LINKEDIN) }} onMouseOut={() => { setLinkedinIcon(BLACK_LINKEDIN) }} onClick={() => { window.open("https://www.linkedin.com/in/lucy-maree-davidson/") }}>
            <img className={styles.contactIconImg} src={linkedinIcon} alt="link to linkedin" />
          </div>
        </div>
      </div>
    )
  }
})


const MenuMobile = React.memo(({ currentItem, updateCurrentSection }: { currentItem: number, updateCurrentSection: (newSection: number) => void }) => {
  function getMenuItemClass(index: number) {
    return index === currentItem ? styles.menuItemSelected : styles.menuItem
  }

  return (<div className={styles.menuMobile}>
    <div className={styles.menuMobileTop}>
      <div onClick={() => updateCurrentSection(0)} className={getMenuItemClass(0)}>
        <div className={styles.menuTextHeaderMobile} >
          <img style={{height: 40}} src="menuheader.png" alt="Baggage" />
        </div>
      </div>
      <div className={styles.contactIcons}>
        <div className={styles.contactIconMenuMobile} onClick={() => { window.open("https://www.instagram.com/lucy_maree_davidson/") }}>
          <img className={styles.contactIconImg} src={BLACK_INSTA} alt="link to instagram" />
        </div>
        <div className={styles.contactIconMenuMobile} onClick={() => { window.open("https://www.linkedin.com/in/lucy-maree-davidson/") }}>
          <img className={styles.contactIconImg} src={BLACK_LINKEDIN} alt="link to linkedin" />
        </div>
      </div>
    </div>
    <div className={styles.menuBottomMobile}>
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

  </div>)
});