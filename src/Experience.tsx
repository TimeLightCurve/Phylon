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
  const [sections, setSections] = useState<HTMLElement[] | null>()
  return (
    <>
      <Canvas
        className="main-canvas"
        gl={{
          powerPreference: "high-performance",
          toneMapping: THREE.NoToneMapping,
        }}
        dpr={[1, 2]}
      >
        
        {/* <OrbitControls/> */}
        <ScrollControls pages={4} damping={0.1}>
            <ScrollManager sections={sections} setSectionNumber={setSectionNumber}/>
            <Scene sectionNumber={sectionNumber} />
            <Scroll html>
              <Interface setSectionNumber={setSectionNumber} sections={sections} setSections={setSections} />
            </Scroll>
        </ScrollControls >
      </Canvas>
      <Menu o menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
    </>
  );
}

export default Experience;
