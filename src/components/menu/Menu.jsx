import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#about">About</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#web">Web Development</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#audio">Audio</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#video">Video</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#photo">Photo</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}
