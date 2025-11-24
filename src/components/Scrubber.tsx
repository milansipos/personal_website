import { useState, useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

import frame1 from '../assets/codeframes/frame1.webp';
import frame2 from '../assets/codeframes/frame2.webp';
import frame3 from '../assets/codeframes/frame3.webp';
import frame4 from '../assets/codeframes/frame4.webp';
import frame5 from '../assets/codeframes/frame5.webp';
import frame6 from '../assets/codeframes/frame6.webp';
import frame7 from '../assets/codeframes/frame7.webp';
import frame8 from '../assets/codeframes/frame8.webp';
import frame9 from '../assets/codeframes/frame9.webp';
import frame10 from '../assets/codeframes/frame10.webp';
import frame11 from '../assets/codeframes/frame11.webp';

const frames = [frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10, frame11];

const CodeScrubber = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [currentFrame, setCurrentFrame] = useState(frames[0]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {

    const frameIndex = Math.floor(latest * frames.length);
    
    const safeIndex = Math.min(frameIndex, frames.length - 1);
    
    setCurrentFrame(frames[safeIndex]);
  });

  return (
    <div ref={targetRef} style={{ height: "270vh", position: "relative" }} id='about'>
      
      <div style={{ 
        position: "sticky", 
        top: 0, 
        height: "100vh", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        overflow: "hidden"
      }}>
        
        <img 
          src={currentFrame} 
          style={{ 
            width: "90%",
            maxWidth: "1000px",
            borderRadius: "24px",
            boxShadow: "0 25px 50px -12px rgba(51, 0, 169, 0.5)",
            transition: "transform 0.1s linear"
          }} 
        />
        
      </div>
    </div>
  );
};

export default CodeScrubber;