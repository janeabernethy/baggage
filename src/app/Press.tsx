import React from 'react';
import styles from "./baggage.module.css";

export const Press = React.memo(({ disableAnimations, pressRef, isMobile, height, width }: { height: number, width: number, disableAnimations: boolean, pressRef: React.RefObject<HTMLDivElement | null>, isMobile: boolean }) => {
    
    const itemWidth = width - 50;
    const itemHeight = itemWidth * 9/16;

    return <div ref={pressRef} className={isMobile ? styles.pressContainerMobile : styles.pressContainer}>

        <div className={isMobile ?  styles.pressItemsContainerMobile : styles.pressItemsContainer}>
            <PressItem itemWidth={itemWidth} itemHeight={itemHeight} isMobile={isMobile} imgSrc="/press/collider.png" title="Collider" subtitle="Aardman Animation Scans for Emotional 'Baggage' in Adorable Short Film Trailer [Exclusive]" link="https://collider.com/baggage-trailer-aardman/" />
            <PressItem itemWidth={itemWidth} itemHeight={itemHeight}  isMobile={isMobile} imgSrc="/press/vicscreen.png" title="VicScreen" subtitle="From Melbourne to Aardman: The Stop-Motion Journey of Lucy Davidson" link="https://vicscreen.vic.gov.au/news/from-melbourne-to-aardman-the-stop-motion-journey-of-lucy-davidson" />
            <PressItem itemWidth={itemWidth} itemHeight={itemHeight} isMobile={isMobile} imgSrc="/press/mxdwn.png" title="MXDWN" subtitle="Emotional Baggage Turns Literal In New Animated Short Film Premiered At SXSW" link="https://movies.mxdwn.com/news/emotional-baggage-turns-literal-in-new-animated-short-film-premiered-at-sxsw/" />
            <PressItem itemWidth={itemWidth} itemHeight={itemHeight} isMobile={isMobile} imgSrc="/press/redcarpetcrash.png" title="Red Carpet Crash" subtitle="Movie Short Review: ‘Baggage’" link="https://movies.mxdwn.com/news/emotional-baggage-turns-literal-in-new-animated-short-film-premiered-at-sxsw/" />
            <PressItem itemWidth={itemWidth} itemHeight={itemHeight} isMobile={isMobile} imgSrc="/press/beyondthecineramadome.png" title="Beyond the Cinerama Dome" subtitle="SXSW: Director Lucy Davidson Unpacks Her Baggage" link="https://www.youtube.com/watch?v=0khpU8CvKbE" />
        </div>
    </div>
})


const PressItem = React.memo(({ itemWidth, itemHeight, isMobile, imgSrc, title, subtitle, link }: { itemWidth: number, itemHeight: number, isMobile: boolean, imgSrc: string, title: string, subtitle: string, link: string }) => {
    return (
        <div style={{height: isMobile ? itemHeight: "auto" }}onClick={() => { window.open(link)}} className={styles.pressItem}>
            <div className={styles.pressItemImageContainer}>
                <img className={styles.pressItemImage} src={imgSrc} alt="" />
            </div>
            <div className={isMobile ? styles.pressItemTextContainerMobile: styles.pressItemTextContainer}>
                <div className={styles.pressItemTitle}>{title}</div>
                <div className={styles.pressItemSubtitle}>{subtitle}</div>
            </div>
        </div>
    )
})