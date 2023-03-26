import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide,setCurrentSlide]=useState(0)

  const data =[
    {
      id: "1",
      icon: "./assests/globe.png",
      title: "FrontEnd Designing",
      desc:
        "Aspiring to learn more and more frontend desgining. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assests/mobile.png",
      title: "C++ programming",
      desc:
        "Love to code in C++ but flexible to other languages as well.",
      img:
        "https://w0.peakpx.com/wallpaper/794/480/HD-wallpaper-c-plus-plus-glitter-logo-programming-language-grid-metal-background-c-plus-plus-creative-programming-language-signs-c-plus-plus-logo-thumbnail.jpg",
    },
    {
      id: "3",
      icon: "./assests/writing.png",
      title: "Problem Solving",
      desc:
        "Good at problem solving and willing to solve real world problems.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick=(way)=>{
    way==="left" ? setCurrentSlide(currentSlide>0 ? currentSlide-1:2) :
     setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  }
  return (
    
    <div className="works" id="works">
             <div className="slider" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
      { data.map(d=>(

       <div className="container">
          <div className="item">
           
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <a href="https://github.com/shanvijaiswal87">
                <span >Projects</span></a>
                
                </div>
                </div>
            <div className="right">
            <img
                  src={d.img}
                  alt=""
                /></div>
          </div>
        </div>))}
      </div>
      <img src="assests/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
      <img src="assests/arrow.png" className="arrow right" alt="" onClick={()=>handleClick()}/>
    </div>
  );
}
