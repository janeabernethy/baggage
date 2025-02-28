'use client'

import React from 'react';
import styles from "./baggage.module.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Crew } from './Crew';
import { Landing } from './Landing';
import { Menu } from './Menu';
import { Selections } from './Selections';
import { Stills } from './Stills';
import { Press } from './Press';
import { SupportedBy } from './SupportedBy';
import { Bio } from './Bio';

const BTS_ROW_1 = ["/bts/01.jpg", "/bts/02.jpg", "/bts/03.jpg", "/bts/04.jpg", "/bts/10.jpg", "/bts/07.jpg","/bts/09.jpg", "/bts/06.jpg"]
const BTS_ROW_2 = ["/bts/10.jpg", "/bts/07.jpg","/bts/09.jpg", "/bts/06.jpg"]


export default function Guts() {
  const [screenHeight, setScreenHeight] = React.useState<number>(0);
  const [width, setWidth] = React.useState<number>(0);

  const [totalHeight, setTotalHeight] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState<boolean | null>(null);

  const [currentSection, setCurrentSection] = React.useState(0);

  const appRef = React.useRef<HTMLDivElement>(null);
  const homeRef = React.useRef<HTMLDivElement>(null);
  const aboutRef = React.useRef<HTMLDivElement>(null);
  const selectionRef = React.useRef<HTMLDivElement>(null);
  const pressRef = React.useRef<HTMLDivElement>(null);
  const makingStillsRef = React.useRef<HTMLDivElement>(null);
  const bioRef = React.useRef<HTMLDivElement>(null);

  const crewRef = React.useRef<HTMLDivElement>(null);

  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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

      setScreenHeight(window.innerHeight)
      setIsMobile(window.innerWidth < window.innerHeight);
      setWidth(window.innerWidth);


    }

    const calculateTotalHeight = () => {
      if (homeRef.current && aboutRef.current && selectionRef.current && crewRef.current && makingStillsRef.current) {
        setTotalHeight(homeRef.current.clientHeight +
          aboutRef.current.clientHeight +
          selectionRef.current.clientHeight +
          crewRef.current.clientHeight +
          makingStillsRef.current.clientHeight);
      }
    }


    if (totalHeight === 0) {
      calculateTotalHeight();
    }


    if (screenHeight === 0) {
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
      selectionRef.current?.scrollIntoView(scrollBehaviour)
    }
    if (section === 2) {
      pressRef.current?.scrollIntoView(scrollBehaviour)
    }
    if (section === 3) {
      bioRef.current?.scrollIntoView(scrollBehaviour)
    }
  }


  const handleScroll = () => {
    const scrollOffset = window.scrollY
    const scrollPercentage = scrollOffset / screenHeight





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
    else if (scrollPercentage < 4.9) {
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


      <Menu isMobile={isMobile} currentItem={currentSection} updateCurrentSection={scrollToSection} />
      <div className={isMobile ? styles.contentMobile : styles.content}>
        <Landing height={screenHeight} width={width} isMobile={isMobile} landingRef={homeRef} disableAnimations={prefersReducedMotion} />
        <Selections disableAnimations={prefersReducedMotion} isMobile={isMobile} selectionRef={selectionRef} />
        <Press width={width} height={screenHeight} disableAnimations={prefersReducedMotion} pressRef={pressRef} isMobile={isMobile} />
        <Bio disableAnimations={prefersReducedMotion} bioRef={bioRef} isMobile={isMobile} />
        <Stills height={screenHeight} disableAnimations={prefersReducedMotion} stillsRef={makingStillsRef} isMobile={isMobile} imagesRow1={BTS_ROW_1} imagesRow2={BTS_ROW_2} />

        <Crew disableAnimations={prefersReducedMotion} crewRef={crewRef} height={screenHeight} isMobile={isMobile} />
        <SupportedBy disableAnimations={prefersReducedMotion} isMobile={isMobile} />
      </div>
    </div>
  );
}


