
import React from 'react';
import styles from "./baggage.module.css";




export const About = ({ isMobile, aboutRef }: {isMobile: boolean, aboutRef: React.RefObject<HTMLDivElement | null>}) => {

  const textRef = React.useRef<HTMLDivElement>(null);


  return <div ref={aboutRef} className={isMobile ? styles.aboutMobile : styles.about}>
    <GutsPoster isMobile={isMobile} />
    <div ref={textRef} className={isMobile ? styles.abouttextMobile : styles.abouttext}>
      <div className={isMobile ? styles.aboutSectionMobile : styles.aboutSection}>
        <div className={styles.aboutDesc}>
          Three girlfriends check in their baggage at the airport, but one is carrying a little more than the others. As they travel along the conveyor belt to security, can she hide what’s inside?
        </div>
      </div>

    </div>
  </div>
}


export const GutsPoster = React.memo(({ isMobile }: { isMobile: boolean }) => {

  return (
    <div className={isMobile ? styles.posterContainerMobile : styles.posterContainer}>
      <div style={{ height: isMobile ? "100%" : "auto" }} className={styles.poster} >

        <img className={isMobile ? styles.posterImageMobile : styles.posterImage} src={isMobile ? "Baggage-poster.jpg" : "poster-landscape.jpg"} />

      </div>
    </div>
  )
});