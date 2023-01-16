import "./webDev.scss"
import WebDevList from "../webDevList/WebDevList"
import { useEffect, useState } from "react";
import { webDevTechIsProjects, webDevLifeProjects } from "../../data";

export default function WebDev() {
  const [selected, setSelected] = useState("techis_projects")
  const [data, setData] = useState([])

  const list = [
    {
      id: "techis_projects",
      title: "TECH I.S. Projects",
    },
    {
      id: "life_projects",
      title: "Life Projects"
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "techis_projects":
        setData(webDevTechIsProjects);
        break;
      case "life_projects":
        setData(webDevLifeProjects);
        break;
      default:
        setData(webDevTechIsProjects);
    }
  }, [selected])

  return (
    <div className="webouter" id="web">
      <div className="web" id="web">
        {/* <h1>Web Dev</h1> */}
        <ul>
          {list.map((item) => (
            <WebDevList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
        <div className="container">
          {data.map((d) => (
            <div className="itemContainer">
              <div className="item">
                <img src={d.img} alt="" />
                <h3>{d.title}</h3>
                <a href={d.website} target="_blank" rel="noreferrer">
                  <div className="website">Website</div>
                </a>
                <a href={d.github} target="_blank" rel="noreferrer">
                  <div className="github">Github</div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
