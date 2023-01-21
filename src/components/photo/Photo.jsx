import "./photo.scss"
import { useState } from 'react';

export default function Photo() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      img: "/assets/video/icon/vid_icon.jpg",
      photo_descr: "~",
      gear_info: "~",
    },
    {
      id: "1",
      img: "/assets/photo/IMG_3448.jpg",
      photo_descr: "Growth Setup",
      gear_info: "Iphone7",
      featured: true,
    },
    {
      id: "1",
      img: "/assets/video/icon/vid_icon.jpg",
      photo_descr: "~",
      gear_info: "~",
    },
    // {
    //   id: "1",
    //   img: "/assets/video/icon/vid_icon.jpg",
    //   photo_descr: "~",
    //   gear_info: "~",
    // },
    // {
    //   id: "1",
    //   img: "/assets/photo/IMG_3448 2.jpg",
    //   photo_descr: "Growth Setup",
    //   gear_info: "Iphone7",
    //   featured: true,
    // },
    // {
    //   id: "1",
    //   img: "/assets/video/icon/vid_icon.jpg",
    //   photo_descr: "~",
    //   gear_info: "~",
    // },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  }
  return (
    <div className="photo" id="photo">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        <div className="container">
          {data.map((d) => (<div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src={d.img} alt="" />
            </div>
            <div className="pic_info">
              <p className="photo_descr">{d.photo_descr}</p>
              <div className="gear_info">{d.gear_info}</div>
            </div>
          </div>
          ))}
        </div>
      </div>
      <img src="assets/global/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
      <img src="assets/global/arrow.png" className="arrow right" alt="" onClick={() => handleClick("right")} />
    </div>
  )
}


// <div className="photo" id="photo">
// <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
// {data.map((d) => (<div className="container">
//       <div className={d.featured ? "card featured" : "card"}>
//         <div className="top">
//           <img src={d.img} alt="" />
//         </div>
//         <div className="pic_info">
//           <p className="photo_descr">{d.photo_descr}</p>
//           <div className="gear_info">{d.gear_info}</div>
//         </div>
//       </div>
//   </div>
//   ))}
// </div>
// <img src="assets/global/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
// <img src="assets/global/arrow.png" className="arrow right" alt="" onClick={() => handleClick("right")} />
// </div>
