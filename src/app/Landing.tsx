import React from 'react';
import styles from "./baggage.module.css";


export const Landing = React.memo(({ didLoad, landingRef, isMobile, disableAnimations, height, width }: { didLoad: () => void, isMobile: boolean, landingRef: React.RefObject<HTMLDivElement | null>, disableAnimations: boolean, height: number, width: number }) => {
  
  const [videoWidth, setVideoWidth] = React.useState(isMobile ? width - 50 : width * 0.7);
  const [videoHeight, setVideoHeight] = React.useState(videoWidth * 9/16);

  const iframeRef = React.useRef(null);
  const [isLoaded, setIsLoaded] = React.useState(false);


  React.useEffect(() => {
    
    const handleLoad = () => { didLoad() }

    if (iframeRef.current) {
      iframeRef.current.addEventListener("load", handleLoad);
    }

    return () => {
      if (iframeRef.current) {
        iframeRef.current.removeEventListener("load", handleLoad);
      }
    };
  }, []);

  React.useEffect(() => {
    setVideoWidth(isMobile ? width - 50 : width * 0.7)
    setVideoHeight(videoWidth * 9/16);

    
  }, [width, height])

  return <div ref={landingRef} className={isMobile ? styles.landingMobile : styles.landing}>
    <div className={isMobile ? styles.landingInnerMobile : styles.landingInner}>

    <div className={isMobile ? styles.videoContainerMobile: styles.videoContainer}>
      {disableAnimations &&
        <img style={{ width: "100%", "borderRadius": 20 }} src="titlethumb.avif" alt="baggage poster" />
      }
      {!disableAnimations &&
      <iframe ref={iframeRef} title="vimeo-player" src="https://player.vimeo.com/video/1054852526?h=db84c96a0f" width={videoWidth} height={videoHeight} frameBorder="0"  allowFullScreen></iframe>
      }
    </div>

    <div className={isMobile ? styles.landingTextMobile : styles.landingText}>
      Three girlfriends check in their baggage at the airport, but one is carrying a little more than the others. As they travel along the conveyor belt to security, can she hide what’s inside?
    </div>
    </div>

  </div>
});