import React from 'react';
import styles from "./baggage.module.css";
import gsap from 'gsap';

export const Bio = React.memo(({ disableAnimations, bioRef, isMobile }: { disableAnimations: boolean, bioRef: React.RefObject<HTMLDivElement | null>, isMobile: boolean }) => {
    
    
    React.useEffect(() => {
        const ctx = gsap.context(() => {
        if(disableAnimations){
          return;
        }
        if (!bioRef.current) {
          return
        }
    
        if (!isMobile) {
        

        }
        else {
          if (bioRef.current) {
            gsap.fromTo(
                bioRef.current.children,
              { opacity: 0, y: 50 }, 
              {
                opacity: 1,
                y: 0,
          
                stagger: 0.5,
                duration: 0.5,
                scrollTrigger: {
                scrub:0.5,
                  trigger: bioRef.current,
                  start: 'top 60%',
                  end: 'top 30%',
                  toggleActions: 'play none none none',
                },
              }
            );
          }
        }});
        return ()=> { ctx.revert()}
    
      }, [isMobile]);

    return <div ref={bioRef} className={isMobile ? styles.bioContainerMobile : styles.bioContainer}>

        <div className={isMobile ? styles.bioInnerMobile : styles.bioInner}>
            <div className={isMobile ? styles.bioPicContainerMobile : styles.bioPicContainer}>
                <img className={styles.bioPic} src="/bio/lucy.jpg" />
            </div>
            <div className={styles.bioTextContainer}>
                <div className={styles.bio}>
                    Lucy Davidson is an Australian Stop-Motion Animation Director.  In 2022 she worked on Adam Elliot’s latest feature film MEMOIR OF A SNAIL (Annecy Crystal Award Winner 2024). Following this success, she was selected by Aardman Animation Studios Academy, to direct her upcoming short film BAGGAGE .
                </div>
                <div className={styles.bioContact}>
                    <div className={styles.contactSection}>
                        <div className={styles.contactHeader}>Contact</div>

                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}>
                                <img src="/socials/world_black.svg" />
                            </div>
                            <a className={styles.link} href="https://lucymareedavidson.com" target="_blank">https://lucymareedavidson.com</a>
                        </div>
                        <div className={styles.contactItem}>
                            <div className={styles.contactIcon}>
                                <img src="/socials/mail_black.svg" />
                            </div>
                            <a className={styles.link} href="mailto:lucymareedavidson@gmail.com" target="_blank">lucymareedavidson@gmail.com </a>
                        </div>
                        <div className={styles.contactItem}>

                            <div className={styles.contactIcon}>
                                <img src="/socials/phone_black.svg" />
                            </div>
                            <a className={styles.link} href="tel:(+61) 0423 970 949">(+61) 0423 970 949</a>
                        </div>
                    </div>

                    <div>
                        <div className={styles.contactHeader}>
                            Social
                        </div>
                        <div className={styles.contactIcons}>
                            <div className={styles.contactIcon} onClick={() => { window.open("https://www.instagram.com/lucy_maree_davidson/") }}>
                                <img className={styles.contactIconImg} src="/socials/insta_black.svg" alt="link to instagram" />
                            </div>
                            <div className={styles.contactIcon} onClick={() => { window.open("https://www.linkedin.com/in/lucy-maree-davidson/") }}>
                                <img className={styles.contactIconImg} src="/socials/linkedin_black.svg" alt="link to linkedin" />
                            </div>
                            <div className={styles.contactIcon} style={{width: "auto"}} onClick={() => { window.open("https://www.youtube.com/channel/UCiA4Ft1wfLVMVfWrC1wTzog") }}>
                                <img className={styles.contactIconImg} src="/socials/youtube1.jpg" alt="link to youtube" />
                            </div>
                            <div className={styles.contactIcon} onClick={() => { window.open("https://vimeo.com/lucydavidson") }}>
                                <img className={styles.contactIconImg} src="/socials/vimeo.jpg" alt="link to vimeo" />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
})
