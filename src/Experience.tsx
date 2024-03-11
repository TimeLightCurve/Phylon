import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Interface } from "./components/Interface";
import Scene from "./Scene";
import { ScrollControls, Scroll, OrbitControls } from "@react-three/drei";
import { ScrollManager } from "./ScrollManager"
import { useState } from "react";
import { Menu } from "./components/Menu"

interface InterfaceProps {
  setSections: React.Dispatch<React.SetStateAction<React.RefObject<HTMLElement>[]>>;
}

function Experience() {
  
  const [menuOpened, setMenuOpened] = useState(false)
  const [ sectionNumber, setSectionNumber ] = useState(0)
  const [sections, setSections] = useState<React.RefObject<HTMLElement>[]>()
  return (
    <>
    <ScrollControls>
      <div className=" canvaCustom w-screen h-screen   ">
        <Canvas
          className="main-canvas"
          gl={{
            powerPreference: "high-performance",
            toneMapping: THREE.NoToneMapping,
          }}
          dpr={[1, 2]}
        >  
          <OrbitControls/> 
              <ScrollManager />
              <Scene sectionNumber={sectionNumber} />
        </Canvas>
      </div>
      <Scroll html>
        <Interface setSectionNumber={setSectionNumber}  />
      </Scroll>
    </ScrollControls>
      
      <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
      
    </>
  );
}

export default Experience;
