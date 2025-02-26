
import React from 'react';
import styles from "./baggage.module.css";
export const SupportedBy = React.memo(({ disableAnimations, isMobile }: { disableAnimations: boolean, isMobile: boolean }) => {
    
    return (
        <div className={styles.crewContent3} style={{ padding: "50px 0px" }}>
            <div className={styles.crewHeader} style={{ paddingBottom: 25 }}>Supported By</div>
            <div className={styles.supportedByContainer}>
                <div className={isMobile ? styles.supportedByMobile : styles.supportedBy}>
                    <SupportImg imgName="/supportedBy/aard.jpg" alt="Aardman" link="https://academy.aardman.com" />
                    <SupportImg imgName="/supportedBy/IPCF.jpg" alt="Ian Potter Culteral Trust" link="https://www.ianpotter.org.au/" />

                    <SupportImg imgName="/supportedBy/vicscreen.jpg" alt="Vic Screen" link="https://vicscreen.vic.gov.au/news/from-melbourne-to-aardman-the-stop-motion-journey-of-lucy-davidson" />



                    <SupportImg imgName="/supportedBy/HAB.jpg" alt="Hunt and Brew" link="https://huntandbrew.com/" />
                    <SupportImg imgName="/supportedBy/SA.jpg" alt="Screen Australia" link="https://www.screenaustralia.gov.au/the-screen-guide/t/baggage-2024/43006/" />


                </div>
            </div>

        </div>
    )
});

const SupportImg = React.memo(({ imgName, alt, link }: { imgName: string, alt: string, link: string }) => {
    return (<div className={styles.supportImgContainer} onClick={() => { window.open(link) }}>
        <img className={styles.supportImg} src={imgName} alt={alt} />
    </div>)
})
