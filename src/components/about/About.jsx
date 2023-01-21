import "./about.scss";
import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react";

export default function About() {
  const [currentPic, setCurrentPic] = useState(0)

  const data = [
    {

      img: "/assets/photo/test_pic.jpg",
      photo_descr: "~",
      gear_info: "kajsdhflkasjdhfbsadfkljhlaksjdhf",
    },
    {

      img: "/assets/photo/test_pic.jpg",
      photo_descr: "~",
      gear_info: "~",
    },
    {

      img: "/assets/photo/test_pic.jpg",
      photo_descr: "~",
      gear_info: "~",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentPic === 2) {
        setCurrentPic(0)
      }
      else {
        setCurrentPic(currentPic + 1)
      }
    }, /*6500*/6000)
    return () => clearTimeout(timer)
  }, [currentPic])

  // const handleClick = (way) => {
  //   way === "left"
  //   ? setCurrentPic(currentPic > 0 ? currentPic -1 : 2)
  //   : setCurrentPic(currentPic < data.length -1 ? currentPic +1 : 0)
  // }

  return (
    <div className="about" id="about">
      <div className="transparent-bg"></div>
      <div className="slider" style={{ transform: `translateX(-${currentPic * 100}vw)` }}>
        
        {data.map((d) => (<div className="pics"> {/* className pics = container */}
          <img src={d.img} alt="" />
        </div>))}
      </div>
      <img className="logo" src="/assets/logo/logo.png" alt="" /> {/* img tag = className item */}
      <div className="info">
        <Typewriter
          options={{
            strings: ['HELLO, I\'M MIDI DATA. NICE TO MEET YOU.', 'I AM A MULTIMEDIA ARTIST & WEB DEVELOPER', 'FROM TULSA, OKLAHOMA.'],
            autoStart: true,
            loop: true,
            pauseFor: 2250,
            cursor: '',
            delay: 60,
            deleteSpeed: 18,
          }}
        />
      </div>
      {/* <img src="assets/global/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
      <img src="assets/global/arrow.png" className="arrow right" alt="" onClick={() => handleClick("right")} /> */}
    </div>
  )
}