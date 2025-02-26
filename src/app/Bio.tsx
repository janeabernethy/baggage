import React from 'react';
import styles from "./baggage.module.css";

export const Bio = React.memo(({ disableAnimations, bioRef, isMobile }: { disableAnimations: boolean, bioRef: React.RefObject<HTMLDivElement | null>,  isMobile: boolean }) => {
    return <div ref={bioRef} className={styles.bioContainer}></div>
})
