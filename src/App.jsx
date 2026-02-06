import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App(){
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="container">© <span id="year">{new Date().getFullYear()}</span> Balakumar S — MLOps Enthusiast</div>
      </footer>
    </div>
  )
}
