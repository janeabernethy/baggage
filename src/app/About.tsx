
import React from 'react';
import styles from "./baggage.module.css";


import gsap from 'gsap';


export const About = ({ disableAnimations, isMobile, aboutRef, pic }: { disableAnimations: boolean, isMobile: boolean, aboutRef: React.RefObject<HTMLDivElement|null>, pic: string }) => {

  const textRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {

    if(disableAnimations) {
      return;
    }
    if (!aboutRef.current) {
      return
    }


    if (!isMobile) {
      gsap.fromTo(
        aboutRef.current.children,
        { opacity: 0, y: 20 }, // Initial state
        {
          opacity: 1,
          y: 0,
          stagger: 0.1, // Delay between each div animation
          duration: 0.5,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 80%', // Trigger when container reaches 80% into viewport
            toggleActions: 'play none none none',
          },
        }
      );
    }
    else {
      if (!textRef.current) {
        return;
      }
      gsap.fromTo(
        textRef.current.children,
        { opacity: 0, y: 0 }, // Initial state
        {
          opacity: 1,
          y: 0,
          stagger: 0.2, // Delay between each div animation
          duration: 0.5,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%', // Trigger when container reaches 80% into viewport
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, [isMobile]);

  return <div ref={aboutRef} className={isMobile ? styles.aboutMobile : styles.about}>
    <GutsPoster isMobile={isMobile} pic={pic} />
    <div ref={textRef} className={isMobile ? styles.abouttextMobile : styles.abouttext}>
      <div className={isMobile ? styles.aboutSectionMobile : styles.aboutSection}>
      <div className={styles.aboutDesc}>
      Three girlfriends check in their baggage at the airport, but one is carrying a little more than the others. As they travel along the conveyor belt to security, can she hide what’s inside?
      </div>
    </div>

  </div>
  </div>
}


export const GutsPoster = React.memo(({ isMobile, pic }: { isMobile: boolean, pic: string }) => {

  const [posterNumber, setPosterNumber] = React.useState('1.png');


  React.useEffect(() => {
    setPosterNumber(pic);
  }, [pic]);

  return (
    <div onClick={() => {
      const currentNum = posterNumber;
      setPosterNumber("2.png");

      setTimeout(() => {
        setPosterNumber(currentNum);
      }, 90)

    }} className={isMobile ? styles.posterContainerMobile : styles.posterContainer}>
      <div className={styles.poster} >

        <img className={isMobile ? styles.posterImageMobile : styles.posterImage} src={isMobile ? "Baggage-poster.png" : "poster-landscape.png"} />
        {/* <img className={styles.posterJane} style={{ opacity: posterNumber === "1.png" ? 1 : 0 }} src={"/guts/1.png"} />
        <img className={styles.posterJane} style={{ opacity: posterNumber === "2.png" ? 1 : 0 }} src={"/guts/2.png"} />
        <img className={styles.posterJane} style={{ opacity: posterNumber === "3.png" ? 1 : 0 }} src={"/guts/3.png"} />
        <img className={styles.posterJane} style={{ opacity: posterNumber === "4.png" ? 1 : 0 }} src={"/guts/4.png"} />
        <img className={styles.posterJane} style={{ opacity: posterNumber === "5.png" ? 1 : 0 }} src={"/guts/5.png"} />
        <img className={styles.posterJane} style={{ opacity: posterNumber === "7.png" ? 1 : 0 }} src={"/guts/7.png"} />
        <img className={styles.posterJane} style={{ opacity: posterNumber === "8.png" ? 1 : 0 }} src={"/guts/8.png"} />
        <img className={styles.posterJane} style={{ opacity: posterNumber === "9.png" ? 1 : 0 }} src={"/guts/9.png"} />
        <img className={styles.posterJane} style={{ opacity: posterNumber === "10.png" ? 1 : 0 }} src={"/guts/10.png"} /> */}
      </div>
    </div>
  )
});