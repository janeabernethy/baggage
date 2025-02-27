import React from 'react';
import styles from "./baggage.module.css";

export const Press = React.memo(({ disableAnimations, pressRef, isMobile }: { disableAnimations: boolean, pressRef: React.RefObject<HTMLDivElement | null>, isMobile: boolean }) => {
    return <div ref={pressRef} className={isMobile ? styles.pressContainerMobile : styles.pressContainer}>
        <div className={isMobile ? styles.selectionHeaderMobile : styles.selectionHeader} style={{}}>
            <div className={isMobile ? styles.selectionHeaderTextMobile : styles.selectionHeaderText}>
                Press
            </div>
        </div>
        <div className={isMobile ?  styles.pressItemsContainerMobile : styles.pressItemsContainer}>
            <PressItem isMobile={isMobile} imgSrc="/press/collider.png" title="Collider" subtitle="Aardman Animation Scans for Emotional 'Baggage' in Adorable Short Film Trailer [Exclusive]" link="https://collider.com/baggage-trailer-aardman/" />
            <PressItem isMobile={isMobile} imgSrc="/press/vicscreen.png" title="VicScreen" subtitle="From Melbourne to Aardman: The Stop-Motion Journey of Lucy Davidson" link="https://vicscreen.vic.gov.au/news/from-melbourne-to-aardman-the-stop-motion-journey-of-lucy-davidson" />
            <PressItem isMobile={isMobile} imgSrc="/press/mxdwn.png" title="MXDWN" subtitle="Emotional Baggage Turns Literal In New Animated Short Film Premiered At SXSW" link="https://movies.mxdwn.com/news/emotional-baggage-turns-literal-in-new-animated-short-film-premiered-at-sxsw/" />
            <PressItem isMobile={isMobile} imgSrc="/press/redcarpetcrash.png" title="Red Carpet Crash" subtitle="Movie Short Review: ‘Baggage’" link="https://movies.mxdwn.com/news/emotional-baggage-turns-literal-in-new-animated-short-film-premiered-at-sxsw/" />
            <PressItem isMobile={isMobile} imgSrc="/press/beyondthecineramadome.png" title="Beyond the Cinerama Dome" subtitle="SXSW: Director Lucy Davidson Unpacks Her Baggage" link="https://www.youtube.com/watch?v=0khpU8CvKbE" />
        </div>
    </div>
})


const PressItem = React.memo(({ isMobile, imgSrc, title, subtitle, link }: { isMobile: boolean, imgSrc: string, title: string, subtitle: string, link: string }) => {
    return (
        <div onClick={() => { window.open(link)}} className={styles.pressItem}>
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