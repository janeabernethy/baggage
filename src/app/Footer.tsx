import React from 'react';
import styles from "./baggage.module.css";



export const Footer = React.memo(({ footerRef, isMobile }: { footerRef: React.RefObject<HTMLDivElement | null>, isMobile: boolean }) => {
    return (<div className={isMobile ? styles.footerMobile : styles.footer} ref={footerRef} >
      <div className={styles.footerTitle}>
        Contact
      </div>
      <div className={styles.footerMore}>
      <a className={styles.link} href="mailto:lucymareedavidson@gmail.com" target="_blank">lucymareedavidson@gmail.com</a>

      </div>
      <div className={styles.contactIcons}>
        <div className={styles.contactIcon} onClick={() => {window.open("https://www.instagram.com/lucy_maree_davidson/")}}>
          <img className={styles.contactIconImg} src="/socials/insta.jpg" alt="link to instagram"/>
        </div>
        <div className={styles.contactIcon} onClick={() => {window.open("https://www.youtube.com/channel/UCiA4Ft1wfLVMVfWrC1wTzog")}}>
          <img className={styles.contactIconImg} src="/socials/youtube.jpg" alt="link to youtube"/>
        </div>
        <div className={styles.contactIcon} onClick={() => {window.open("https://vimeo.com/lucydavidson")}}>
          <img className={styles.contactIconImg} src="/socials/vimeo.jpg" alt="link to vimeo"/>
        </div>
        <div className={styles.contactIcon} onClick={() => {window.open("https://www.linkedin.com/in/lucy-maree-davidson/")}}>
          <img className={styles.contactIconImg} src="/socials/linkedin.jpg" alt="link to linkedin"/>
        </div>
      </div>
      <div className={styles.footerMore}>
      <a className={styles.link} href="https://lucymareedavidson.com" target="_blank">lucymareedavidson.com</a>

      </div>
    </div>)
  });