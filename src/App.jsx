import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";
import WebDev from "./components/webDev/WebDev";
import Audio from "./components/audio/Audio";
import Videos from "./components/video/Video";
import Photo from "./components/photo/Photo";
import Contact from "./components/contact/Contact.tsx";
import "./app.scss"
import { useState } from "react";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <About />
        <WebDev />
        <Audio />
        <Videos />
        <Photo />
        <Contact />
      </div>
    </div>
  );
}

export default App;
