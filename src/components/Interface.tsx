import { useEffect, useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { div } from "three/examples/jsm/nodes/Nodes.js";
const plugins = [ScrollToPlugin];
gsap.registerPlugin(ScrollToPlugin)

const Section = (props:any) => {
    const {children} = props

    return(
        <div className={`h-screen w-screen max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}>
            <section >
                {children}
            </section>
        </div>
    )

}




export const Interface = (props:any) => {
    
    const {setSectionNumber, sections, setSections} = props
    const sectionRef1 = useRef <HTMLDivElement>()
    const sectionRef2 = useRef <HTMLDivElement >()
    const sectionRef3 = useRef <HTMLDivElement>()

    setSections([sectionRef1, sectionRef2, sectionRef3])

    


    
    
    // useLayoutEffect(() => {
        
                   
    //     gsap.to(
    //     window,
    //     {
    //         duration: 1,
    //         scrollTo:{y: 500},
    //         onComplete: () => {
    //         setSection(1),
    //         console.log("yay")
            
    //     },

    //         scrollTrigger: {
    //         trigger: ".${kir}",
    //         start: "top bottom",
    //         end: "top top",
    //         markers: true,
    //         },
    //     }
    //     );
               

    //   });

    return(
        <div className={`flex flex-col items-center w-screen`}>

                <Section ref={sectionRef1} className="triggerSection" >
                    <h1 className="triggerChild text-6xl font-extrabold leading-snug">
                            Hi, im
                            <br />
                            <span className="bg-white px-1 ialic">
                                Shayan Sh
                            </span>
                        </h1>
                        <p className="text-lg text-gray-600 mt-4">
                            Making a 3D Experience with Particles
                            <br />
                            learn how to build 3D apps
                        </p>
                        <button className=" bg-indigo-600 text-white py-6 px-8 rounded-lg font-bold text-lg mt-16">Contact me</button>
                </Section>


                <Section ref={sectionRef2}  className="kir triggerSection">
                    <h1 className="triggerChild">Skills</h1>
                </Section> 

                <Section ref={sectionRef3}>
                    <h1 className="triggerChild">Projects</h1>
                </Section>


                <Section  className="triggerSection">
                    <h1 className="triggerChild">Contact</h1>
                </Section>

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