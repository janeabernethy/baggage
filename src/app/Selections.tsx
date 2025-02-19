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
          { opacity: 0, y: 20 }, // Initial state
          {
            opacity: 1,
            y: 0,
            stagger: 0.2, // Delay between each div animation
            duration: 0.5,
            scrollTrigger: {
              trigger: selectionImgsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reset',
            },
          }
        );
      }
    }});
    return ()=> { ctx.revert()}

  }, [isMobile]);


  return (
    <div ref={selectionRef} className={isMobile ? styles.selectionOuterMobile : styles.selectionOuter} style={{ opacity: 1 }}>
      {isMobile && <div className={isMobile ? styles.selectionHeaderMobile : styles.selectionHeader} style={{}}>
        <div className={isMobile ? styles.selectionHeaderTextMobile : styles.selectionHeaderText}>
          Selections
        </div>
      </div>}
      <div ref={selectionImgsRef} className={isMobile ? styles.selectionContainerMobile : styles.selectionContainer}>
        <div onClick={() => window.open("")} className={styles.selectionImageContainer}>
          <img className={styles.selectionImage} src="/laurels/sxsw.jpeg" />
        </div>
        <div onClick={() => window.open("")} className={styles.selectionImageContainer}>
          <img className={styles.selectionImage} src="/laurels/liaf.jpeg" />
        </div>
        <div onClick={() => window.open("")} className={styles.selectionImageContainer}>
          <img className={styles.selectionImage} src="/laurels/flickerfest.jpeg" />
        </div>
        <div onClick={() => window.open("")} className={styles.selectionImageContainer}>
          <img className={styles.selectionImage} src="/laurels/peninsula.jpeg" />
        </div>
        <div onClick={() => window.open("")} className={styles.selectionImageContainer}>
          <img className={styles.selectionImage} src="/laurels/dingle.jpg" />
        </div>
        <div onClick={() => window.open("")} className={styles.selectionImageContainer}>
          <img className={styles.selectionImage} src="/laurels/cleveland.jpeg" />
        </div>
        <div onClick={() => window.open("")} className={styles.selectionImageContainer}>
          <img className={styles.selectionImage} src="/laurels/biaf.jpeg" />
        </div>
      </div>
    </div>)
});
