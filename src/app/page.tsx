'use client'

import React from 'react';
import styles from "./baggage.module.css";



import { About } from './About';
import { Crew } from './Crew';
import { Footer } from './Footer';
import { Landing } from './Landing';
import { Menu } from './Menu';
import { Selections } from './Selections';
import { Stills } from './Stills';

import { mapValueGrowing } from './mathHelpers';
const STILLS_ROW_1 = ["/guts/still1.jpg", "/guts/still2.jpg", "/guts/still3.jpg", "/guts/still4.jpg", "/guts/still2.jpg", "/guts/still3.jpg", "/guts/still4.jpg", "/guts/still1.jpg", "/guts/still2.jpg", "/guts/still3.jpg"]
const STILLS_ROW_2 = ["/guts/still3.jpg", "/guts/still4.jpg", "/guts/still1.jpg", "/guts/still2.jpg", "/guts/still3.jpg", "/guts/still1.jpg", "/guts/still2.jpg", "/guts/still3.jpg", "/guts/still4.jpg", "/guts/still2.jpg"]
const BTS_ROW_1 = ["/guts/bts1.jpg", "/guts/bts2.jpg", "/guts/bts3.jpg", "/guts/bts4.jpg", "/guts/bts5.jpg", "/guts/bts6.jpg", "/guts/bts5.jpg", "/guts/bts1.jpg", "/guts/bts4.jpg", "/guts/bts6.jpg"]
const BTS_ROW_2 = ["/guts/bts6.jpg", "/guts/bts5.jpg", "/guts/bts1.jpg", "/guts/bts4.jpg", "/guts/bts6.jpg", "/guts/bts1.jpg", "/guts/bts2.jpg", "/guts/bts3.jpg", "/guts/bts4.jpg", "/guts/bts5.jpg"]

export default function Guts() {
  const screenHeight = React.useRef<number>(0);
  const [totalHeight, setTotalHeight]=  React.useState(0);
  const width =  React.useRef<number>(0);
  const [isMobile, setIsMobile] = React.useState<boolean | null>(null);

  const [currentPosterPic, setCurrentPosterPic] = React.useState("1.png");
  const [backgroundColor, setBackgroundColor] = React.useState("white");
  const [currentSection, setCurrentSection] = React.useState(0);

  const appRef = React.useRef<HTMLDivElement>(null);
  const homeRef = React.useRef<HTMLDivElement>(null);
  const aboutRef = React.useRef<HTMLDivElement>(null);
  const selectionRef = React.useRef<HTMLDivElement>(null);
  const stillsRef = React.useRef<HTMLDivElement>(null);
  const makingStillsRef = React.useRef<HTMLDivElement>(null);
  const crewRef = React.useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

    React.useEffect(() => {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  
      const handleChange = () => {

        setPrefersReducedMotion(mediaQuery.matches);
      };
  
  

      setPrefersReducedMotion(mediaQuery.matches);
  
  
      mediaQuery.addEventListener("change", handleChange);
  
      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    }, []);
  



  React.useEffect(() => {

    document.title = "Baggage Film";
    const calculateDimensions = () => {
      screenHeight.current = window.innerHeight;
      setIsMobile(window.innerWidth < window.innerHeight);
      width.current = window.innerWidth;


    }

    const calculateTotalHeight = () => {
      if (homeRef.current && aboutRef.current && selectionRef.current && crewRef.current && stillsRef.current && makingStillsRef.current) {
        setTotalHeight(homeRef.current.clientHeight +
          aboutRef.current.clientHeight +
          selectionRef.current.clientHeight +
          crewRef.current.clientHeight +
          stillsRef.current.clientHeight +
          makingStillsRef.current.clientHeight);
      }
    }


    if (totalHeight === 0) {
      calculateTotalHeight();
    }


    if (screenHeight.current === 0) {
      calculateDimensions();
    }

    const handleResize = () => {
      calculateDimensions();
      calculateTotalHeight();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener("scroll", handleScroll);

    };
  }, [isMobile])


  const scrollToSection = (section: number) => {
    setCurrentSection(section);
    const scrollBehaviour : ScrollIntoViewOptions | boolean = prefersReducedMotion ? false : { behavior: 'smooth' };
    if (section === 0) {
      homeRef.current?.scrollIntoView(scrollBehaviour)
    }
    if (section === 1) {
      aboutRef.current?.scrollIntoView(scrollBehaviour)
    }
    if (section === 2) {
      selectionRef.current?.scrollIntoView(scrollBehaviour)
    }
    if (section === 3) {
      crewRef.current?.scrollIntoView(scrollBehaviour)
    }
  }

  const changeBackgroundColor = (scrollPercentage: number) => {
    if (scrollPercentage < 0.5) {
      setBackgroundColor("white");
    }
    else if (scrollPercentage < 1.5) {
      setBackgroundColor("white");
    }
    else if (scrollPercentage < 2.5) {
      setBackgroundColor("#ffd3e4")

    }
    else if (scrollPercentage < 3.5) {
      setBackgroundColor("white")

    }
    else if (scrollPercentage < 4.5) {
      setBackgroundColor("#ffd3e4");
    }
    else {
      setBackgroundColor("white")
    }
  }

  const handleScroll = () => {
    const scrollOffset = window.scrollY
    const scrollPercentage = scrollOffset / screenHeight.current

    if(!prefersReducedMotion) {
      // changeBackgroundColor(scrollPercentage);
    }
   
    const min = isMobile === true ? 0.0 : 1.15
    const max = isMobile === true ? 0.7 : 1.7;
    if (scrollPercentage > min && scrollPercentage < max) {
      const i = (mapValueGrowing(scrollPercentage, min, max) * 10 + 1) / 2
      setCurrentPosterPic(`${i.toFixed(0)}.png`);
    }
    else {
      setCurrentPosterPic(`1.png`);
    }




    var currentItem;
    if (scrollPercentage < 0.9) {
      currentItem = 0;
    }
    else if (scrollPercentage < 1.9) {
      currentItem = 1;
    }
    else if (scrollPercentage < 3.9) {
      currentItem = 2;
    }
    else {
      currentItem = 3;
    }
    setCurrentSection(currentItem)

  }

  if (isMobile === null) {
    return <div />
  }

  return (
    <div ref={appRef} className={styles.app} style={{ backgroundColor, height: totalHeight }} >

      {!isMobile &&
        <Menu currentItem={currentSection} updateCurrentSection={scrollToSection} />
      }
      <div className={styles.content}>
        {!isMobile &&
          <Landing landingRef={homeRef} disableAnimations={prefersReducedMotion}  />
        }
        <About disableAnimations={prefersReducedMotion} aboutRef={aboutRef} isMobile={isMobile} pic={currentPosterPic} />
        {isMobile && 
        <div style={{alignItems: "flex-end", display: "flex", paddingTop: 50, width: "100%"}}>
                <img  style={{width: "50%"}} src="poster.png" />
                </div>

        }
        <img style={{ padding: "50px 0px", width: "100%"}} src="selections.jpg" />
        {/* <Stills disableAnimations={prefersReducedMotion} stillsRef={stillsRef} isMobile={isMobile} imagesRow1={STILLS_ROW_1} imagesRow2={STILLS_ROW_2} /> */}
        <Selections disableAnimations={prefersReducedMotion} isMobile={isMobile} selectionRef={selectionRef} />
        {/* <Stills disableAnimations={prefersReducedMotion} stillsRef={makingStillsRef} isMobile={isMobile} imagesRow1={BTS_ROW_1} imagesRow2={BTS_ROW_2} /> */}
        <Crew  disableAnimations={prefersReducedMotion} crewRef={crewRef} height={screenHeight.current} isMobile={isMobile} />
        <Footer />
      </div>

    </div>
  );
}


