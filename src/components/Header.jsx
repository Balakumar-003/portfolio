import React, {useState} from 'react'

export default function Header(){
  const [open, setOpen] = useState(false)
  const toggle = ()=> setOpen(v=>!v)
  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="brand">BALAKUMAR S</div>
        <button id="menu-toggle" className="menu-toggle" aria-label="Open menu" aria-expanded={open} onClick={toggle}>
          <span className="hamburger" />
        </button>
        <nav className={`nav-links ${open? 'open':''}`} id="nav-links">
          <a className="nav-link" href="#about" onClick={()=>setOpen(false)}>About</a>
          <a className="nav-link" href="#experience" onClick={()=>setOpen(false)}>Experience</a>
          <a className="nav-link" href="#projects" onClick={()=>setOpen(false)}>Projects</a>
          <a className="nav-link" href="#contact" onClick={()=>setOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  )
}
