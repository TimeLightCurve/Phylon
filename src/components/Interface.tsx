import { useEffect, useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin)

const Section = (props:any) => {
    const {children} = props

    return(
        <div className={`h-screen w-screen  mx-auto flex flex-col items-start `}>
            <section >
                {children}
            </section>
        </div>
    )

}

interface Scrolling {
    enabled: boolean;
    events: string[];
    prevent: (e: Event) => void;
    disable: () => void;
    enable: () => void;
  }


export const Interface = (props:any) => {
    
    const {setSectionNumber} = props
    const sectionRef1 = useRef <HTMLDivElement>(null)
    const sectionRef2 = useRef <HTMLDivElement >(null)
    const sectionRef3 = useRef <HTMLDivElement>(null)

    const sections= [sectionRef1, sectionRef2, sectionRef3]


    function handleScroll(e: Event) {
        e.preventDefault();
    }
    const scrolling: Scrolling = {
        enabled: true,
        events: "scroll,wheel,touchmove,pointermove".split(","),
        prevent: (e: Event ) => e.preventDefault(),
        disable() {
        if (scrolling.enabled) {
            scrolling.enabled = false;
            window.addEventListener("scroll", gsap.ticker.tick, {passive: true});
            scrolling.events.forEach((e, i) => (i ? document : window).addEventListener(e, handleScroll, {passive: false}));
        }
        },
        enable() {
        if (!scrolling.enabled) {
            scrolling.enabled = true;
            window.removeEventListener("scroll", gsap.ticker.tick);
            scrolling.events.forEach((e, i) => (i ? document : window).removeEventListener(e, handleScroll));
        }
        }
    };

    function goToSection(section :any) {
        if (scrolling.enabled) { 
        scrolling.disable();
        gsap.to(window, {
            scrollTo: {y: section, autoKill: false},
            onComplete: scrolling.enable,
            duration: 1
        });
    } 
    }
    useLayoutEffect(() => {
        sections.forEach((section, i) => {
        ScrollTrigger.create({
            trigger: section.current,
            start: "top bottom-=1",
            end: "bottom top+=1",
            onEnter: () => {goToSection(section.current),setSectionNumber(i),console.log(i);
            },
            onEnterBack: () => {goToSection(section.current),setSectionNumber(i),console.log(i);
            }
        });
        })
    },[])  


    return(
        <div className='flex flex-col items-center '>

        <div ref={sectionRef1} className='   w-screen h-screen mx-auto'>
          <section>
            <h1 className=' text-black'> hi first box</h1>
          </section>
        </div>
        <div ref={sectionRef2} className='   w-screen h-screen mx-auto'>
          <section>
            <h1>  second box</h1>
          </section>
        </div>
        <div ref={sectionRef3} className='  w-screen h-screen mx-auto'>
          <section>
            <h1>  third box</h1>
          </section>
        </div>

      </div>
    )
}

// const AboutSection = () => {
//     return(
//         <Section>
//             <h1 className="text-6xl font-extrabold leading-snug">
//                     Hi, im
//                     <br />
//                     <span className="bg-white px-1 ialic">
//                         Shayan Sh
//                     </span>
//                 </h1>
//                 <p className="text-lg text-gray-600 mt-4">
//                     Making a 3D Experience with Particles
//                     <br />
//                     learn how to build 3D apps
//                 </p>
//                 <button className=" bg-indigo-600 text-white py-6 px-8 rounded-lg font-bold text-lg mt-16">Contact me</button>
//         </Section>
//     )
// }
