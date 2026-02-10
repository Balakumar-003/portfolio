import React, { useState } from 'react'

export default function Hero(){
  const [showResume, setShowResume] = useState(false);

  const openResume = () => setShowResume(true);
  const closeResume = () => setShowResume(false);

  const handleBackdropClick = (e) => {
    if (e.target.id === 'resumeModalBackdrop') {
      closeResume();
    }
  };

  return (
    <>
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
            <button className="btn outline" onClick={openResume}>View Resume</button>
          </div>
        </div>
      </section>

      {showResume && (
        <div id="resumeModalBackdrop" className="modal" onClick={handleBackdropClick} style={{ display: 'flex' }}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>My Resume</h2>
              <button className="modal-close" onClick={closeResume}>&times;</button>
            </div>
            <div className="modal-body">
              <iframe src="https://docs.google.com/gview?url=https://balakumar-portfolio.vercel.app/resume.pdf&embedded=true" style={{ width: '100%', height: '700px', border: 'none', borderRadius: '8px' }}></iframe>
            </div>
            <div className="modal-footer">
              <a href="/images/resume.pdf" download className="btn btn-primary">Download Resume</a>
              <a href="/images/resume.pdf" target="_blank" rel="noopener" className="btn btn-secondary">Open in New Tab</a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
