import React from 'react';
import styles from "./baggage.module.css";
import gsap from 'gsap';


export const Press = React.memo(({ disableAnimations, pressRef, isMobile, height, width }: { height: number, width: number, disableAnimations: boolean, pressRef: React.RefObject<HTMLDivElement | null>, isMobile: boolean }) => {
    
    const itemWidth = width - 50;
    const itemHeight = itemWidth * 9/16;

    const prerssItemsRef = React.useRef<HTMLDivElement>(null);
    

    React.useEffect(() => {
        const ctx = gsap.context(() => {
        if(disableAnimations){
          return;
        }
        if (!prerssItemsRef.current) {
          return
        }
    
        if (!isMobile) {
            gsap.fromTo(
                prerssItemsRef.current.children,
                { opacity: 0, y: 50 }, // Initial state
                {
                  opacity: 1,
                  y: 0,
                  stagger: 0.1, // Delay between each div animation
                  duration: 0.5,
                  scrollTrigger: {
                    scrub: 0.5,
                    trigger: prerssItemsRef.current,
                    start: 'top 70%',
                    end: 'top 30%',
                    toggleActions: 'play none none reset',
                  },
                }
              );

        }
        else {
          if (prerssItemsRef.current) {
            gsap.fromTo(
                prerssItemsRef.current.children,
              { opacity: 0, y: 50 }, 
              {
                opacity: 1,
                y: 0,
                stagger: 0.2,
                duration: 0.5,
                scrollTrigger: {
                 scrub:0.5,
                  trigger: prerssItemsRef.current,
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

    return <div ref={pressRef} className={isMobile ? styles.pressContainerMobile : styles.pressContainer}>

        <div ref={prerssItemsRef} className={isMobile ?  styles.pressItemsContainerMobile : styles.pressItemsContainer}>
            <PressItem itemWidth={itemWidth} itemHeight={itemHeight} isMobile={isMobile} imgSrc="/press/collider.jpg" title="Collider" subtitle="Aardman Animation Scans for Emotional 'Baggage' in Adorable Short Film Trailer [Exclusive]" link="https://collider.com/baggage-trailer-aardman/" />
            <PressItem itemWidth={itemWidth} itemHeight={itemHeight}  isMobile={isMobile} imgSrc="/press/vicscreen.jpg" title="VicScreen" subtitle="From Melbourne to Aardman: The Stop-Motion Journey of Lucy Davidson" link="https://vicscreen.vic.gov.au/news/from-melbourne-to-aardman-the-stop-motion-journey-of-lucy-davidson" />
            
            <PressItem itemWidth={itemWidth} itemHeight={itemHeight} isMobile={isMobile} imgSrc="/press/Michigan.jpg" title="The Michigan Daily" subtitle="SXSW 2025: Animated shorts highlights" link="https://www.michigandaily.com/arts/film/sxsw-2025-animated-shorts-highlights/" />
            <PressItem itemWidth={itemWidth} itemHeight={itemHeight} isMobile={isMobile} imgSrc="/titlethumb.avif" subtitle="“Baggage” Comedic, Poignant Animated Short by Lucy Davidson at SXSW" title="Indie Activity" link="https://www.indieactivity.com/baggage-comedic-poignant-animation-by-lucy-davidson-at-sxsw/" />
            <PressItem itemWidth={itemWidth} itemHeight={itemHeight} isMobile={isMobile} imgSrc="/press/reelnews.jpeg" title="Reel News Daily" subtitle="‘BAGGAGE’ (SXSW 2025 short) Packed with universally emotional messaging." link="https://reelnewsdaily.com/tag/lucy-davidson/" />
            <PressItem itemWidth={itemWidth} itemHeight={itemHeight} isMobile={isMobile} imgSrc="/press/bond.jpg" title="Bond on Cinema" subtitle="BAGGAGE The Animated Short Film That Will CHANGE Your Perspective with Lucy Davidson" link="https://www.boomplay.com/episode/9145204" />
            <PressItem itemWidth={itemWidth} itemHeight={itemHeight} isMobile={isMobile} imgSrc="/press/tremont.jpg" title="The Tremont Mail" subtitle="Empathy Takes Flight" link="https://mailnewsgroup.com/tremont/article/2025-03-11/empathy-takes-flight.html" />
            <PressItem itemWidth={itemWidth} itemHeight={itemHeight} isMobile={isMobile} imgSrc="/press/cinema.jpg" title="cinema.de" subtitle="Interview mit Lucy Davidson zu 'Baggage'" link="https://www.cinema.de/kino/video/interview-mit-lucy-davidson-zu-baggage-323009_vi.html" />
            <PressItem itemWidth={itemWidth} itemHeight={itemHeight} isMobile={isMobile} imgSrc="/press/focus.jpg" title="FOCUS by 0163 Frames" subtitle="In Conversation: ‘BAGGAGE’ Director, Writer, and Artist Lucy Davidson" link="https://www.0613focus.com/interviews/in-conversation-baggage-director-writer-and-artist-lucy-davidson" />
            <PressItem itemWidth={itemWidth} itemHeight={itemHeight} isMobile={isMobile} imgSrc="/press/sunshine.jpg" title="Sunshine State Cineplex" subtitle="SXSW Short: BAGGAGE – Stunning Visuals Complement a Sweet Story" link="https://sunshinestatecineplex.com/2025/03/17/sxsw-2025-short-baggage/" />
            <PressItem itemWidth={itemWidth} itemHeight={itemHeight} isMobile={isMobile} imgSrc="/press/weloveshortfilm.jpg" title="We Love Short Films" subtitle="Lucy Davidson’s BAGGAGE – A Clever and Touching Exploration of  Emotional Burdens and Friendship" link="https://weloveshortfilm.com/2025/03/04/lucy-davidsons-baggage-a-clever-and-touching-exploration-of-emotional-burdens-and-friendship/" />


            <PressItem itemWidth={itemWidth} itemHeight={itemHeight} isMobile={isMobile} imgSrc="/press/brwc.jpg" title="Battle Royale with Cheese" subtitle="Baggage: Review" link="https://battleroyalewithcheese.com/2025/03/baggage-review/" />
            <PressItem itemWidth={itemWidth} itemHeight={itemHeight} isMobile={isMobile} imgSrc="/press/top10Films.jpg" title="Top 10 Films" subtitle="Interview: “I Try To Push The Boundaries” – Lucy Davidson On “Baggage” And The Art Of Stop-Motion" link="https://www.top10films.co.uk/86402-interview-i-try-to-push-the-boundaries-lucy-davidson-on-baggage-and-the-art-of-stop-motion/" />
            <PressItem itemWidth={itemWidth} itemHeight={itemHeight} isMobile={isMobile} imgSrc="/press/beyondthecineramadome.jpg" title="Beyond the Cinerama Dome" subtitle="SXSW: Director Lucy Davidson Unpacks Her Baggage" link="https://beyondthecineramadome.com/interviews/sxsw-lucy-davidson-unpacks-her-baggage" />
            <PressItem itemWidth={itemWidth} itemHeight={itemHeight} isMobile={isMobile} imgSrc="/press/mxdwn.jpg" title="MXDWN" subtitle="Emotional Baggage Turns Literal In New Animated Short Film Premiered At SXSW" link="https://movies.mxdwn.com/news/emotional-baggage-turns-literal-in-new-animated-short-film-premiered-at-sxsw/" />
            <PressItem itemWidth={itemWidth} itemHeight={itemHeight} isMobile={isMobile} imgSrc="/press/redcarpetcrash.jpg" title="Red Carpet Crash" 
            subtitle="Movie Short Review: ‘Baggage’" link="https://movies.mxdwn.com/news/emotional-baggage-turns-literal-in-new-animated-short-film-premiered-at-sxsw/" />

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