import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Interface } from "./components/Interface";
import Scene from "./Scene";
import { ScrollControls, Scroll, OrbitControls } from "@react-three/drei";
import { ScrollManager } from "./ScrollManager"
import { useState } from "react";
import { Menu } from "./components/Menu"



function Experience() {
  
  const [menuOpened, setMenuOpened] = useState(false)
  const [ sectionNumber, setSectionNumber ] = useState(0)
  const [sections, setSections] = useState<React.RefObject<HTMLElement>[]>()
  return (
    <>
    <div className=" w-screen h-screen fixed z-0 ">
      <Canvas
        className="h-screen w-screen"
        gl={{
          powerPreference: "high-performance",
          toneMapping: THREE.NoToneMapping,
        }}
        dpr={[1, 2]}
      >  
         
            <ScrollManager />
            <Scene sectionNumber={sectionNumber} />
      </Canvas>
    </div>
      
      <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
      <Interface setSectionNumber={setSectionNumber}  />
    </>
  );
}

export default Experience;
