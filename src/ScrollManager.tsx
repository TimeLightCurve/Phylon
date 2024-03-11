import { useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useLayoutEffect } from "react";

interface Scrolling {
    enabled: boolean;
    events: string[];
    prevent: (e: Event) => void;
    disable: () => void;
    enable: () => void;
  }

interface Properties {
    setSectionNumber: (number: number) => number,
    sections: React.RefObject<HTMLElement>[]
}


export const ScrollManager = () => {
    
    // const {sections,setSectionNumber} = props

    // function handleScroll(e: Event) {
    //     e.preventDefault();
    // }
    // const scrolling: Scrolling = {
    //     enabled: true,
    //     events: "scroll,wheel,touchmove,pointermove".split(","),
    //     prevent: (e: Event ) => e.preventDefault(),
    //     disable() {
    //     if (scrolling.enabled) {
    //         scrolling.enabled = false;
    //         window.addEventListener("scroll", gsap.ticker.tick, {passive: true});
    //         scrolling.events.forEach((e, i) => (i ? document : window).addEventListener(e, handleScroll, {passive: false}));
    //     }
    //     },
    //     enable() {
    //     if (!scrolling.enabled) {
    //         scrolling.enabled = true;
    //         window.removeEventListener("scroll", gsap.ticker.tick);
    //         scrolling.events.forEach((e, i) => (i ? document : window).removeEventListener(e, handleScroll));
    //     }
    //     }
    // };

    // function goToSection(section :any) {
    //     if (scrolling.enabled) { 
    //     scrolling.disable();
    //     gsap.to(window, {
    //         scrollTo: {y: section, autoKill: false},
    //         onComplete: scrolling.enable,
    //         duration: 1
    //     });
    // } 
    // }
    // useLayoutEffect(() => {
    //     sections.forEach((section, i) => {
    //     ScrollTrigger.create({
    //         trigger: section.current,
    //         start: "top bottom-=1",
    //         end: "bottom top+=1",
    //         onEnter: () => {goToSection(section.current),setSectionNumber(i)},
    //         onEnterBack: () => {goToSection(section.current),setSectionNumber(i)}
    //     });
    //     })
    // })  

    
    // const { section, onSectionChange, sectionNumber, setSectionNumber, targets } = props
    // const data = useScroll()
    // const lastScroll = useRef(0)
    // const isAnimating = useRef(false)
    // data.fill.classList.add("top-0")
    // data.fill.classList.add("absolute")

    
 
    //  useEffect(()=>{
    //     gsap.to(data.el, {
    //         duration: 1,
    //         scrollTop: section * data.el.clientHeight,
    //         onStart: () => {
    //             isAnimating.current = true
    //         },
    //         onComplete: () => {
    //             isAnimating.current = false
    //             setSectionNumber(section)
    //         },
    //     }) 

    // }, [section]) 

    // useFrame(()=> {
    //     if (isAnimating.current) {
    //         lastScroll.current = data.offset
    //         return
    //     }
    
    //     const curSection = Math.floor(data.offset * data.pages)
    //     if (data.offset > lastScroll.current && curSection === 0 ) {
    //         onSectionChange(1)
    //         console.log(section);
    //     }

    //     if (data.offset >  1 / (data.pages -1) && curSection === 1 ) {
    //         onSectionChange(2)
    //         console.log(section);
    //     }

    //     if (data.offset < lastScroll.current && data.offset < 1 / (data.pages -1)){
    //         onSectionChange(0)
    //         console.log(section);
    //     }
    //     if (data.offset < lastScroll.current && data.offset < 2 / (data.pages -1) && data.offset > 1/(data.pages -1)){
    //         onSectionChange(1)
    //         console.log(section);
    //     }

    //     lastScroll.current = data.offset
    // })
    return null
}
