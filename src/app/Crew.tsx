
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


    React.useEffect(() => {
        const ctx = gsap.context(() => {
            if (disableAnimations) {
                return;
            }
            if (!crewRef.current) {
                return
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
        <Cast disableAnimations={disableAnimations} isMobile={isMobile} />
        <CoreCrew2 disableAnimations={disableAnimations} isMobile={isMobile} />
        <CoreCrew3 disableAnimations={disableAnimations} isMobile={isMobile} />
        <CoreCrew4 disableAnimations={disableAnimations} isMobile={isMobile} />
        <CoreCrew5 disableAnimations={disableAnimations} isMobile={isMobile} />

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
                {/* <div className={styles.crewName} >A film by</div>
                <div className={styles.lucyHeader}>Lucy Davidson</div> */}
                <CrewPic disableAnimations={disableAnimations} src={"credits/lucy.png"} isMobile={isMobile} />
            </div>


        </div>
    )
})

type CrewSection = {
    header: string,
    names: string[],
}

const CrewSection = React.memo(({ disableAnimations, isMobile, sections, mobileImg }: { disableAnimations: boolean, isMobile: boolean, sections: CrewSection[], mobileImg?: string }) => {
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
                {mobileImg &&
                    <CrewPic disableAnimations={disableAnimations} src={mobileImg} isMobile={isMobile} />
                }
            </div>

        </div>)
});

const Cast = React.memo(({ disableAnimations, isMobile }: { disableAnimations: boolean, isMobile: boolean }) => {
    const crewSections: CrewSection[] = [
        { header: "Voice Actors", names: ["Eve Eloise Gilbert", "Sophie Schoorman", "Dominik Shields", "Camillo Sancisi"] },
    ];
    return (
        <div className={styles.crewContent3} >
            <CrewSection disableAnimations={disableAnimations} isMobile={isMobile} mobileImg={"/credits/cast.jpg"} sections={crewSections} />
        </div>
    )
})


const CoreCrew2 = React.memo(({ disableAnimations, isMobile }: { disableAnimations: boolean, isMobile: boolean }) => {

    const containerRef = React.useRef<HTMLDivElement>(null);

    const crewSections: CrewSection[] = [
        { header: "Producer", names: ["Vanessa Batten"] },
        { header: "Academy Producers", names: ["Katie Daniels", "Rachel Plant"] },
        { header: "PA", names: ["Amy Upchurch"] },
        { header: "HOD Aardman Academy", names: ["Mark Simon Hewis"] },
        { header: "SM Course Lead", names: ["Stuart Messinger"] },
    ];

    return (
        <div className={styles.crewContent3} >
            <div ref={containerRef} className={styles.crewCol}>
                <CrewSection disableAnimations={disableAnimations} isMobile={isMobile} mobileImg={"poster-landscape.jpg"} sections={crewSections} />

            </div>
        </div>
    )
})

const CoreCrew3 = React.memo(({ disableAnimations, isMobile }: { disableAnimations: boolean, isMobile: boolean }) => {

    const containerRef = React.useRef<HTMLDivElement>(null);

    const crewSections: CrewSection[] = [
        { header: "Script & Story Development", names: ["Mark Simon Hewis", "Suzie Templeton", "Sam Morrison"] },
        { header: "Model Making", names: ["Jim Parkyn", "Jack Slade"] },
        { header: "Rigging", names: ["Rich Modlen"] },
        { header: "VFX Supervisor ", names: ["Jim Lewis"] },
        { header: "Editor ", names: ["Dan Williamson"] },
        { header: "Animation & Directing Supervisor", names: ["Andy Symanowski", "Laurie Sitzia"] },

    ];

    return (
        <div className={styles.crewContent3} >
            <div ref={containerRef} className={styles.crewCol}>
                <CrewSection disableAnimations={disableAnimations} isMobile={isMobile} mobileImg={"/credits/2.jpg"} sections={crewSections} />

            </div>
        </div>
    )
})

const CoreCrew4 = React.memo(({ disableAnimations, isMobile }: { disableAnimations: boolean, isMobile: boolean }) => {

    const containerRef = React.useRef<HTMLDivElement>(null);

    const crewSections: CrewSection[] = [

        { header: "Sound Design ", names: ["Anthony Cavalieri"] },
        { header: "Colour Grade", names: ["Bram Ttwheam"] },
        { header: "Cinematography & Motion Control", names: ["George Milbun", "Nat Sale"] },
        { header: "Camera Technician", names: ["Adam Cook", "Adam Hanney"] },
        { header: "Composer", names: ["Sam Harding", "Alex Olijnyk"] },
        { header: "Set Builders", names: ["George Milburn", "Tom Sewell"] },
        { header: "Sound Mix", names: ["Craig Conway"] },
    ];

    return (
        <div className={styles.crewContent3} >
            <div ref={containerRef} className={styles.crewCol}>
                <CrewSection disableAnimations={disableAnimations} isMobile={isMobile} mobileImg={"/credits/3.jpg"} sections={crewSections} />

            </div>
        </div>
    )
})

const CoreCrew5 = React.memo(({ disableAnimations, isMobile }: { disableAnimations: boolean, isMobile: boolean }) => {

    const containerRef = React.useRef<HTMLDivElement>(null);

    const crewSections: CrewSection[] = [

        { header: "Supported by", names: ["The Ian Potter Cultural Trust", "Hunt & Brew"] },
        { header: "Produced at", names: ["Aardman Academy"] },
    ];

    return (
        <div className={styles.crewContent3} >
            <div ref={containerRef} className={styles.crewCol}>
                <CrewSection disableAnimations={disableAnimations} isMobile={isMobile}  sections={crewSections} />

            </div>
        </div>
    )
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