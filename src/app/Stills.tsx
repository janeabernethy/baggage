import React from 'react';
import styles from "./baggage.module.css";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export const Stills = ({ height, disableAnimations, stillsRef, isMobile, imagesRow1, imagesRow2 }: { height: number,  disableAnimations: boolean, stillsRef: React.RefObject<HTMLDivElement|null>, isMobile: boolean, imagesRow1: string[], imagesRow2: string[] }) => {
  
    const imagesRef = React.useRef<HTMLDivElement>(null);
  
    const isPlaying = React.useRef(false)// Track animation state

    const animationRef = React.useRef(null);

  React.useEffect(() => {
    const ctx = gsap.context(() => {

    if(disableAnimations){
      return;
    }
    if (!stillsRef.current || !imagesRef.current) {
      return
    }

    if (!isMobile) {
      
      animationRef.current = gsap.fromTo(
        imagesRef.current.children,
        { opacity: 0, y: 20 }, // Initial state
        {
          opacity: 1,
          y: 0,
          stagger: 0.1, // Delay between each div animation
          duration: 0.5,
          scrollTrigger: {
            trigger: stillsRef.current,
            start: 'top 50%', // Trigger when container reaches 80% into viewport
            toggleActions: 'play none none none',
          },
        }
      );
    }
    else {


      if (stillsRef.current) {
        animationRef.current = gsap.fromTo(
          
          imagesRef.current.children,
          { opacity: 0, y: 50 }, 
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.7,
            scrollTrigger: {

              trigger: stillsRef.current,
              start: 'top 100%',
              end: 'top 30%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }});
    return ()=> { ctx.revert()}

  }, [isMobile, height]);


  return (<div ref={stillsRef} className={isMobile ? styles.stillsContainerMobile : styles.stillsContainer} >
    <div className={isMobile ? styles.stillsOuterMobile : styles.stillsOuter}>
      <div ref={imagesRef} className={isMobile ? styles.stillsInnerMobile : styles.stillsInner}>
        {imagesRow1.map((i, index) => {
          return <div key={index} className={isMobile ? styles.stillImageContainerMobile : styles.stillImageContainer}>
            <img alt="" className={styles.stillImage} src={i} />
          </div>
        })}
      </div>
    </div>
  </div>)
}
