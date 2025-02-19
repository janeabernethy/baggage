
import React from 'react';
import styles from "./baggage.module.css";


import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const GSAP_TRIGGER_MOBILE = "top 70%"
const GSAP_TRIGGER_DESKTOP = "top 80%"
const GSAP_STAGGER = 0.2;
const GSAP_DURATION = 0.5;
const GSAP_TOGGLE_ACTIONS = 'play none none reset';


export const Crew = React.memo(({ disableAnimations, crewRef, height, isMobile }: { disableAnimations: boolean, crewRef: React.RefObject<HTMLDivElement | null>, height: number, isMobile: boolean }) => {
    gsap.registerPlugin(ScrollTrigger);


    React.useEffect(() => {


        const ctx = gsap.context(() => {
            if (disableAnimations) {
                return;
            }
            if (!crewRef.current) {
                return
            }
            if (isMobile) {
                return;
            }
            gsap.fromTo(
                crewRef.current.children,
                { opacity: 0.5, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: GSAP_STAGGER,
                    duration: GSAP_DURATION,
                    scrollTrigger: {
                        trigger: crewRef.current,
                        end: "bottom 0%",
                        start: isMobile ? GSAP_TRIGGER_MOBILE : GSAP_TRIGGER_DESKTOP,
                        toggleActions: GSAP_TOGGLE_ACTIONS,
                    },
                }
            );
            return () => { ctx.revert() };
        })

    }, [height]);

    return <div ref={crewRef} className={isMobile ? styles.crewMobile : styles.crew}>
        <FilmByLucy disableAnimations={disableAnimations} isMobile={isMobile} />
        <CoreCrew disableAnimations={disableAnimations} isMobile={isMobile} />
        <Cast disableAnimations={disableAnimations} isMobile={isMobile} />
        <CoreCrew2 disableAnimations={disableAnimations} isMobile={isMobile} />
        <SpecialThanks disableAnimations={disableAnimations} isMobile={isMobile} />
    </div>
});


const FilmByLucy = React.memo(({ disableAnimations, isMobile }: { disableAnimations: boolean, isMobile: boolean }) => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!isMobile) {
            return
        }
        if (disableAnimations) {
            return
        }
        const ctx = gsap.context(() => {
            if (!containerRef.current) {
                return
            }
            gsap.fromTo(
                containerRef.current.children,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: GSAP_STAGGER,
                    duration: GSAP_DURATION,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: isMobile ? GSAP_TRIGGER_MOBILE : GSAP_TRIGGER_DESKTOP,
                        toggleActions: GSAP_TOGGLE_ACTIONS,
                    },
                }
            );
        });

        return () => ctx.revert();

    }, []);

    return (
        <div className={isMobile ? styles.crewContentMobile : styles.crewContent}>
            <div ref={containerRef} className={isMobile ? styles.crewSectionJaneMobile : styles.crewSectionJane}>
                <div className={styles.crewName} style={{ fontSize: 30 }}>A film by</div>
                <div className={styles.lucyHeader}>Lucy Davidson</div>
                <CrewPic disableAnimations={disableAnimations} src={"lucy.jpeg"} isMobile={isMobile} />
            </div>


        </div>
    )
})

type CrewSection = {
    header: string,
    names: string[],
}

const CrewSection = React.memo(({ disableAnimations, isMobile, sections, mobileImg }: { disableAnimations: boolean, isMobile: boolean, sections: CrewSection[], mobileImg: string }) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    return (
        <div className={styles.crewContent3}>

            <div className={styles.crewCol} ref={containerRef} >
                {sections.map((section, index) => {
                    return (
                        <div className={styles.crewSection} key={index}>
                            <div className={styles.crewHeader}>{section.header}</div>
                            {section.names.map((name, index) => {
                                return <div key={index} className={styles.crewName}>{name}</div>
                            })}

                        </div>
                    )
                })}
                <CrewPic disableAnimations={disableAnimations} src={mobileImg} isMobile={isMobile} />
            </div>

        </div>)
});

const Cast = React.memo(({ disableAnimations, isMobile }: { disableAnimations: boolean, isMobile: boolean }) => {
    const crewSections: CrewSection[] = [
        { header: "Cast", names: ["Eve Eloise Gilbert", "Sophie Schoorman", "Dominik Shields"] },
    ];
    return (
        <div className={styles.crewContent3} >
            <CrewSection disableAnimations={disableAnimations} isMobile={isMobile} mobileImg={"/credits/cast.jpg"} sections={crewSections} />
        </div>
    )
})


const CoreCrew = React.memo(({ disableAnimations, isMobile }: { disableAnimations: boolean, isMobile: boolean }) => {
    const crewSections: CrewSection[] = [
        { header: "Director / Animator / Writer", names: ["Lucy Davidson"] },

    ];
    return (
        <div className={styles.crewContent3} >
            <CrewSection disableAnimations={disableAnimations} isMobile={isMobile} mobileImg={"/credits/1.jpg"} sections={crewSections} />
        </div>
    )
})

const CoreCrew2 = React.memo(({ disableAnimations, isMobile }: { disableAnimations: boolean, isMobile: boolean }) => {

    const containerRef = React.useRef<HTMLDivElement>(null);

    const crewSections: CrewSection[] = [
        { header: "Producers", names: ["Vanessa Batten"] },
        { header: "Music", names: ["Alex Olijnyk"] },
        { header: "Cinematography", names: ["George Milburn"] },

        { header: "Editing", names: ["Dan Williamson"] }
    ];

    return (
        <div className={styles.crewContent3} >
            <div ref={containerRef} className={styles.crewCol}>
                <CrewSection disableAnimations={disableAnimations} isMobile={isMobile} mobileImg={"/credits/2.jpg"} sections={crewSections} />

            </div>
        </div>
    )
})


const Tutors = React.memo(({ disableAnimations, isMobile }: { disableAnimations: boolean, isMobile: boolean }) => {

    const containerRef = React.useRef<HTMLDivElement>(null);

    const crewSections: CrewSection[] = [
        { header: "Animation Tutors", names: ["Andy Symanowski", "Laurie Sitzia"] },
        { header: "Story Development Tutors", names: ["Rich Webber", "Sam Morrison", "Suzie Templeton"] },
        { header: "Storyboarding Tutor", names: ["Jay Clarke"] },
        { header: "Sound Design Tutor", names: ["Matt Loveridge"] },
        { header: "Set Dressing Tutor", names: ["Phil Davies"] },
        { header: "Model Making Tutors", names: ['Jim Parkyns', "Jack Slade"] },
        { header: "Compositing Tutors", names: ["Jim Lewis"] },
    ];

    return (
        <div className={styles.crewContent3}>

            <div ref={containerRef} className={styles.crewCol}>
                <CrewSection disableAnimations={disableAnimations} isMobile={isMobile} mobileImg={"/guts/nat.jpg"} sections={crewSections} />
            </div>

        </div>
    )
});

const TechSupport = React.memo(({ disableAnimations, isMobile }: { disableAnimations: boolean, isMobile: boolean }) => {
    const crewSections: CrewSection[] = [
        { header: "Studio Manager", names: ["Nat Sale"] },
        { header: "Senior Studio Support Technician", names: ["Adam Cook"] },
        { header: "Studio System Support Assistant", names: ["Adam Hanney", "Ollie Orwell"] },
        { header: "Studio Systems Support Engineer", names: ["Will Marshall"] },
        { header: "Senior Physical & Post Production Engineer", names: ["Paul Reeves"] },
        { header: "Digital Production Technology Manager", names: ["Toby Chilcot"] },
    ];

    return (
        <div className={styles.crewContent3}>
            <CrewSection disableAnimations={disableAnimations} isMobile={isMobile} mobileImg={"/guts/rich.jpg"} sections={crewSections} />

        </div>
    )
});

const SpecialThanks = React.memo(({ disableAnimations, isMobile }: { disableAnimations: boolean, isMobile: boolean }) => {

   

    return (
        <div className={styles.crewContent3} style={{padding: "50px 0px"}}>
            <div className={styles.crewHeader} style={{paddingBottom: 25}}>Supported By</div>
            <div className={styles.supportedByContainer}>
            <div className={isMobile ? styles.supportedByMobile : styles.supportedBy}>
               <SupportImg imgName="/supportedBy/aard.jpg" alt="Aardman" />
               <SupportImg imgName="/supportedBy/IPCF.png" alt="Ian Potter Culteral Trust" />

               <SupportImg imgName="/supportedBy/vicscreen.jpg" alt="Vic Screen" />


      
              <SupportImg imgName="/supportedBy/HAB.jpg" alt="Hunt and Brew" />
               <SupportImg imgName="/supportedBy/SA.jpg" alt="Screen Australia" />


            </div>
            </div>

        </div>
    )
});

const SupportImg = React.memo(({imgName, alt} : {imgName: string, alt: string}) => {
    return ( <div className={styles.supportImgContainer }>
        <img className={styles.supportImg} src={imgName} alt={alt} />
    </div>)
})


const CrewPic = ({ disableAnimations, src, isMobile }: { disableAnimations: boolean, src: string, isMobile: boolean }) => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const ctx = gsap.context(() => {
            if (disableAnimations) {
                return;
            }
            if (!containerRef.current) {
                return
            }
            // Apply GSAP animation to each child div within the container
            gsap.fromTo(
                containerRef.current.children,
                { opacity: 0, y: 20 }, // Initial state
                {
                    opacity: 1,
                    y: 0,
                    stagger: GSAP_STAGGER,
                    duration: GSAP_DURATION,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: GSAP_TRIGGER_MOBILE,
                        toggleActions: GSAP_TOGGLE_ACTIONS,
                    },
                }
            );
        });
        return () => ctx.revert();

    }, []);

    return (<div ref={containerRef} className={isMobile ? styles.mobileCrewImgContainer : styles.desktopCrewImgContainer} >
        <img alt="" src={src} className={isMobile ? styles.mobileCrewImg : styles.desktopCrewImg} />
    </div>)
}