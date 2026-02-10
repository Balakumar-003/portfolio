import React from 'react'

export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-decor">
        <div className="blob blob-1" aria-hidden="true"></div>
        <div className="blob blob-2" aria-hidden="true"></div>
      </div>
      <div className="container">
        <h1>BALAKUMAR S</h1>
        <p className="lead">ML Engineer | Full-Stack Developer</p>
        <p className="intro">I build production-ready ML systems and full-stack applications — combining model development, deployment, and scalable engineering to solve real-world problems.</p>
        <div className="actions">
          <a className="btn gradient" href="#projects">View Projects</a>
          <a className="btn outline" href="/resume.pdf" target="_blank" rel="noopener">View Resume</a>
        </div>
      </div>
    </section>
  )
}
