import React from 'react';
import styles from "./baggage.module.css";

import gsap from 'gsap';

export const Selections = React.memo(({ disableAnimations, isMobile, selectionRef }: { disableAnimations: boolean, isMobile: boolean, selectionRef: React.RefObject<HTMLDivElement|null> }) => {

  const selectionImgsRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const ctx = gsap.context(() => {
    if(disableAnimations){
      return;
    }
    if (!selectionRef.current) {
      return
    }

    if (!isMobile) {
      gsap.fromTo(
        selectionRef.current.children,
        { opacity: 0, y: 20 }, // Initial state
        {
          opacity: 1,
          y: 0,
          stagger: 0.1, // Delay between each div animation
          duration: 0.5,
          scrollTrigger: {
            trigger: selectionRef.current,
            start: 'top 50%', // Trigger when container reaches 80% into viewport
            toggleActions: 'play none none reset',
          },
        }
      );
    }
    else {
      if (selectionImgsRef.current) {
        gsap.fromTo(
          selectionImgsRef.current.children,
          { opacity: 0, y: 50 }, 
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.5,
            scrollTrigger: {
              scrub:0.5,
              trigger: selectionImgsRef.current,
              start: 'top 60%',
              end: 'top 30%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }});
    return ()=> { ctx.revert()}

  }, [isMobile]);


  return (
    <div ref={selectionRef} className={isMobile ? styles.selectionOuterMobile : styles.selectionOuter} style={{ opacity: 1 }}>


      <div ref={selectionImgsRef} className={isMobile ? styles.selectionContainerMobile : styles.selectionContainer}>
        <div onClick={() => window.open("https://schedule.sxsw.com/2025/directors/2206193")} className={styles.selectionImageContainer}>
          <img className={styles.selectionImage} src={isMobile ? "/laurels/mobile/sxsw.jpeg"  : "/laurels/sxsw.jpeg" }/>
        </div>
        <div onClick={() => window.open("https://liaf.org.uk/schedule/liaf-2024-international-competition-programme-6-stop-motion-panorama-15?wcs_timestamp=1732827600")} className={styles.selectionImageContainer}>
          <img className={styles.selectionImage} src={isMobile ? "/laurels/mobile/liaf.jpg"  :"/laurels/liaf.jpeg"} />
        </div>
        <div onClick={() => window.open("https://flickerfest.com.au/programme/best-of-australian-shorts-1-2025/")} className={styles.selectionImageContainer}>
          <img className={styles.selectionImage} src={isMobile ? "/laurels/mobile/flickerfest.jpg"  :"/laurels/flickerfest.jpeg" }/>
        </div>
        <div onClick={() => window.open("https://www.instagram.com/p/DFW6v-_y5ow/")} className={styles.selectionImageContainer}>
          <img className={styles.selectionImage} src={isMobile ? "/laurels/mobile/peninsula.jpg" : "/laurels/peninsula.jpeg" }/>
        </div>
        <div onClick={() => window.open("https://animationdingle.com/home-2/")} className={styles.selectionImageContainer}>
          <img className={styles.selectionImage} src={isMobile ? "/laurels/mobile/dingle.jpg" : "/laurels/dingle.jpg"} />
        </div>
        <div onClick={() => window.open("https://www.brightoninternationalanimationfestival.com/")} className={styles.selectionImageContainer}>
          <img className={styles.selectionImage} src={isMobile ? "/laurels/mobile/biaf.jpg": "/laurels/biaf.jpeg" }/>
        </div>
        <div onClick={() => window.open("https://www.clevelandfilm.org/")} className={styles.selectionImageContainer}>
          <img className={styles.selectionImage} src={isMobile ? "/laurels/mobile/cleveland.jpg" : "/laurels/cleveland.jpeg" }/>
        </div>

      </div>
    </div>)
});
