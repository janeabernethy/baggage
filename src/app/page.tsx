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

const BTS_ROW_1 = ["/bts/01.jpg", "/bts/02.jpg", "/bts/03.jpg", "/bts/04.jpg", "/bts/05.jpg", "/bts/06.jpg", "/bts/07.jpg", "/bts/08.jpg", "/bts/09.jpg", "/bts/10.jpg"]
const BTS_ROW_2 = ["/bts/06.jpg", "/bts/07.jpg", "/bts/08.jpg", "/bts/09.jpg", "/bts/10.jpg", "/bts/01.jpg", "/bts/02.jpg", "/bts/03.jpg", "/bts/04.jpg", "/bts/05.jpg"]
const STILLS_ROW_1 = ["/bts/11.jpg", "/bts/12.jpg", "/bts/13.jpg", "/bts/14.jpg", "/bts/15.jpg", "/bts/16.jpg", "/bts/17.jpg", "/bts/18.jpg", "/bts/19.jpg", "/bts/11.jpg"]
const STILLS_ROW_2 =["/bts/19.jpg", "/bts/18.jpg", "/bts/17.jpg", "/bts/16.jpg", "/bts/15.jpg", "/bts/14.jpg", "/bts/13.jpg", "/bts/12.jpg", "/bts/11.jpg", "/bts/10.jpg"]

export default function Guts() {
  const screenHeight = React.useRef<number>(0);
  const [totalHeight, setTotalHeight] = React.useState(0);
  const width = React.useRef<number>(0);
  const [isMobile, setIsMobile] = React.useState<boolean | null>(null);

  const [currentSection, setCurrentSection] = React.useState(0);

  const appRef = React.useRef<HTMLDivElement>(null);
  const homeRef = React.useRef<HTMLDivElement>(null);
  const aboutRef = React.useRef<HTMLDivElement>(null);
  const selectionRef = React.useRef<HTMLDivElement>(null);
  const stillsRef = React.useRef<HTMLDivElement>(null);
  const makingStillsRef = React.useRef<HTMLDivElement>(null);
  const crewRef = React.useRef<HTMLDivElement>(null);
  const footerRef = React.useRef<HTMLDivElement>(null);

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
    const scrollBehaviour: ScrollIntoViewOptions | boolean = prefersReducedMotion ? false : { behavior: 'smooth' };
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
    if (section === 4) {
      footerRef.current?.scrollIntoView(scrollBehaviour)
    }
  }


  const handleScroll = () => {
    const scrollOffset = window.scrollY
    const scrollPercentage = scrollOffset / screenHeight.current





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
    else if (scrollPercentage < 4.9){
      currentItem = 3;
    }
    else {
      currentItem = 4;
    }
    setCurrentSection(currentItem)

  }

  if (isMobile === null) {
    return <div />
  }

  return (
    <div ref={appRef} className={styles.app} >

      {!isMobile &&
        <Menu currentItem={currentSection} updateCurrentSection={scrollToSection} />
      }
      <div className={styles.content}>
        {!isMobile &&
          <Landing landingRef={homeRef} disableAnimations={prefersReducedMotion} />
        }
        <About aboutRef={aboutRef} isMobile={isMobile}  />
   
        <Stills disableAnimations={prefersReducedMotion} stillsRef={stillsRef} isMobile={isMobile} imagesRow1={STILLS_ROW_1} imagesRow2={STILLS_ROW_2} />
        <Selections disableAnimations={prefersReducedMotion} isMobile={isMobile} selectionRef={selectionRef} />
        <Stills disableAnimations={prefersReducedMotion} stillsRef={makingStillsRef} isMobile={isMobile} imagesRow1={BTS_ROW_1} imagesRow2={BTS_ROW_2} />
        <Crew disableAnimations={prefersReducedMotion} crewRef={crewRef} height={screenHeight.current} isMobile={isMobile} />
        <Footer footerRef={footerRef} isMobile={isMobile} />
      </div>

    </div>
  );
}


