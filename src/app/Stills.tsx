import React from 'react';
import styles from "./baggage.module.css";

import gsap from 'gsap';

export const Stills = React.memo(({ disableAnimations, stillsRef, isMobile, imagesRow1, imagesRow2 }: { disableAnimations: boolean, stillsRef: React.RefObject<HTMLDivElement|null>, isMobile: boolean, imagesRow1: string[], imagesRow2: string[] }) => {

  const topRowRef = React.useRef<HTMLDivElement>(null);
  const bottomRowRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      if (!topRowRef.current || !bottomRowRef.current) {
        return
      }

      if(disableAnimations) {
        return;
      }

      gsap.fromTo(
        topRowRef.current,
        { x: isMobile ? "-250%" : "-50%"}, // Initial state
        {
          x: isMobile ? "0%" : "0%",
          stagger: 0.1, // Delay between each div animation
          duration: 0.5,
          scrollTrigger: {
            scrub: 0.5,
            end: 'bottom 0%',
            trigger: stillsRef.current,
            start: 'top 100%', // Trigger when container reaches 80% into viewport
            toggleActions: 'play none none reset',
          },
        }
      );
      gsap.fromTo(
        bottomRowRef.current,
        { x: isMobile ? "-150%" : "0%" }, // Initial state
        {
          x: isMobile ? "-400%" : "-50%",
          stagger: 0.1, // Delay between each div animation
          duration: 0.5,
          scrollTrigger: {
            scrub: 0.5,
            end: 'bottom 0%',
            trigger: stillsRef.current,
            start: 'top 100%', // Trigger when container reaches 80% into viewport
            toggleActions: 'play none none reset',
          },
        }
      );

      return () => { ctx.revert() }
    });

  }, [])

  return <div ref={stillsRef} className={isMobile ? styles.stillsContainerMobile : styles.stillsContainer} >
    <div className={isMobile ? styles.stillsOuterMobile : styles.stillsOuter}>
      <div ref={topRowRef} className={styles.stillsInner}>
        {imagesRow1.map((i, index) => {
          return <div key={index} className={styles.stillImageContainer}>
            <img alt="" className={styles.stillImage} src={i} />
          </div>
        })}
      </div>

      <div ref={bottomRowRef} className={styles.stillsInner} >
        {imagesRow2.map((i, index) => {
          return <div key={index} className={styles.stillImageContainer}>
            <img alt="" className={styles.stillImage} src={i} />
          </div>
        })}
      </div>
    </div>
  </div>
})