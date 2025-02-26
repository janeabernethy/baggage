import React from 'react';
import styles from "./baggage.module.css";

export const Press = React.memo(({ disableAnimations, pressRef, isMobile }: { disableAnimations: boolean, pressRef: React.RefObject<HTMLDivElement | null>,  isMobile: boolean }) => {
    return <div ref={pressRef} className={styles.pressContainer}></div>
})
