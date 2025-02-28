import React from 'react';
import styles from "./baggage.module.css";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export const Stills = ({ height, disableAnimations, stillsRef, isMobile, imagesRow1, imagesRow2 }: { height: number,  disableAnimations: boolean, stillsRef: React.RefObject<HTMLDivElement|null>, isMobile: boolean, imagesRow1: string[], imagesRow2: string[] }) => {

  const topRowRef = React.useRef<HTMLDivElement>(null);
  const bottomRowRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    console.log("Rerender")
    console.log(height)
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {



      if (!topRowRef.current  || !stillsRef.current) {
        return
      }

      if(disableAnimations) {
        return;
      }

      gsap.fromTo(
        topRowRef.current,
        { x: isMobile ? "-500%" : "-50%"}, // Initial state
        {
          x: isMobile ? "0%" : "0%",
          duration: 0.5,
          stagger: 0.5,
          scrollTrigger: {
            markers: true,
            scrub: 0.5,
            trigger: topRowRef.current,
            start: 'bottom bottom', // Trigger when container reaches 80% into viewport
            end: 'top top',
       
            toggleActions: 'play none none reverse',
          },
        }
      );
      // gsap.fromTo(
      //   bottomRowRef.current,
      //   { x: isMobile ? "-150%" : "0%" }, // Initial state
      //   {
      //     x: isMobile ? "-400%" : "-50%",
      //     stagger: 0.1, // Delay between each div animation
      //     duration: 0.5,
      //     scrollTrigger: {
      //       scrub: 0.5,
      //       trigger: stillsRef.current,
      //       start: 'top 110%', // Trigger when container reaches 80% into viewport
      //       end: 'bottom -10%',
      //       toggleActions: 'play none none reverse',
      //     },
      //   }
      // );

      return () => { ctx.revert() }
    });

  }, [height])

  return <div ref={stillsRef} className={isMobile ? styles.stillsContainerMobile : styles.stillsContainer} >
    <div className={isMobile ? styles.stillsOuterMobile : styles.stillsOuter}>
      <div ref={topRowRef} style={{background: "purple"}} className={styles.stillsInner}>
        {imagesRow1.map((i, index) => {
          return <div key={index} className={styles.stillImageContainer}>
            <img alt="" className={styles.stillImage} src={i} />
          </div>
        })}
      </div>

      {/* <div ref={bottomRowRef} className={styles.stillsInner} >
        {imagesRow2.map((i, index) => {
          return <div key={index} className={styles.stillImageContainer}>
            <img alt="" className={styles.stillImage} src={i} />
          </div>
        })}
      </div> */}
    </div>
  </div>
}