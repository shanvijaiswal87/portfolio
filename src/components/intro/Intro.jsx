import "./intro.scss";
import {init} from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
 const textRef =useRef(null);
  useEffect(() => {
    init(textRef.current, { showCursor: true, 
      backDelay:1500,
      backSpeed:60,
      strings: ['A Student', 'A Software Developer Enthusiast',"Love to learn new technology" ] })
// console.log(textRef);
  }, []);
  return (
    <div className="intro" id="intro">
      
       <div className="left">
         <div className="imgContainer" >
           <img src="assests/me.png" alt=""/>
           </div>
         </div>
       <div className="right">
         <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1> Shanvi Jaiswal </h1>
                    <h3>
                       <span ref={textRef} ></span> 
                      </h3>
           </div>
           <a href="#portfolio">
            <img src="assests/down.png" alt=""  />
          
             </a>
         </div>
        </div>
  )
}
