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
    // {

    //   img: "/assets/photo/code.jpg",
    //   photo_descr: "~",
    //   gear_info: "~",
    // },
    // {

    //   img: "/assets/photo/IMG_3448.jpg",
    //   photo_descr: "~",
    //   gear_info: "~",
    // },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentPic === 2) {
        setCurrentPic(0)
      }
      else {
        setCurrentPic(currentPic + 1)
      }
    }, 5000)
    return () => clearTimeout(timer)
  }, [currentPic])

  const nextPic = () => {
    setCurrentPic(currentPic)
  }

  return (
    <div className="about" id="about">
      {data.map((d, currentPic) => (<div className="pics">
        <img key={currentPic} onClick={() => nextPic(currentPic)} src={d.img} alt="" />
        <img className="logo" src="/assets/logo/logo.png" alt="" />
      </div>))}
      <div className="info">
        <Typewriter
          options={{
            strings: ['HELLO, I\'M MIDI DATA. NICE TO MEET YOU.', 'I AM A MULTIMEDIA ARTIST & WEB DEVELOPER', 'FROM TULSA, OKLAHOMA.'],
            autoStart: true,
            loop: true,
            pauseFor: 2250,
            cursor: '',
            delay: 60,
            deleteSpeed: 10,
          }}
        />
      </div>
    </div>
  )
}


// {/* <div className="about" id="about">
//   {data.map((d, currentPic) => (<div className="pics">
//     <img key={currentPic} onClick={() => nextPic(currentPic)} src={d.img} alt="" />
//     <img className="logo" src="/assets/logo/logo.png" alt="" />
//     {/* <h1>{data[currentPic].gear_info}</h1> */}
//   </div>))}
//   <div className="info">
//     <Typewriter
//       options={{
//         strings: ['HELLO, I\'M MIDI DATA. NICE TO MEET YOU.', 'I AM A MULTIMEDIA ARTIST & WEB DEVELOPER', 'FROM TULSA, OKLAHOMA.'],
//         autoStart: true,
//         loop: true,
//         pauseFor: 2250,
//         cursor: '',
//         delay: 60,
//         deleteSpeed: 10,
//       }}
//     />
//   </div>
// </div> */}