import React from 'react';
import styles from "./baggage.module.css";


export const Landing = ({ landingRef, isMobile, disableAnimations }: { isMobile: boolean, landingRef: React.RefObject<HTMLDivElement | null>, disableAnimations: boolean }) => {
  return <div ref={landingRef} className={isMobile ? styles.landingMobile : styles.landing}>
    <div className={isMobile ? styles.videoContainerMobile: styles.videoContainer}>
      {disableAnimations &&
        <img style={{ width: "100%", "borderRadius": 20 }} src="titlethumb.avif" alt="baggage poster" />
      }
      {!disableAnimations &&
        <video muted playsInline className={styles.landingVideo} loop autoPlay>
          <source src='BAGGAGE-trailer-footage.mp4' type='video/mp4' />
          Your browser does not support the video tag.

        </video>
      }
    </div>

    <div className={isMobile ? styles.landingTextMobile : styles.landingText}>
      Three girlfriends check in their baggage at the airport, but one is carrying a little more than the others. As they travel along the conveyor belt to security, can she hide what’s inside?
    </div>

  </div>
}