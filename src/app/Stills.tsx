import React from 'react';
import styles from "./baggage.module.css";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export const Stills = ({ height, disableAnimations, stillsRef, isMobile, imagesRow1, imagesRow2 }: { height: number,  disableAnimations: boolean, stillsRef: React.RefObject<HTMLDivElement|null>, isMobile: boolean, imagesRow1: string[], imagesRow2: string[] }) => {



  return (<div ref={stillsRef} className={isMobile ? styles.stillsContainerMobile : styles.stillsContainer} >
    <div className={isMobile ? styles.stillsOuterMobile : styles.stillsOuter}>
      <div className={isMobile ? styles.stillsInnerMobile : styles.stillsInner}>
        {imagesRow1.map((i, index) => {
          return <div key={index} className={isMobile ? styles.stillImageContainerMobile : styles.stillImageContainer}>
            <img alt="" className={styles.stillImage} src={i} />
          </div>
        })}
      </div>
    </div>
  </div>)
}
