import React from 'react';
import styles from "./baggage.module.css";

export const Bio = React.memo(({ disableAnimations, bioRef, isMobile }: { disableAnimations: boolean, bioRef: React.RefObject<HTMLDivElement | null>,  isMobile: boolean }) => {
    return <div ref={bioRef} className={styles.bioContainer}>

        <div className={styles.bioInner}>
            <div className={styles.bioPicContainer}>
                <img className={styles.bioPic} />
            </div>
            <div className={styles.bioTextContainer}>
                <div className={styles.bio}>
                    bio text
                </div>
                <div className={styles.bioContact}>
                    
                </div>
            </div>
        </div>
    </div>
})
