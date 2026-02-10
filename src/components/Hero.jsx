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
              <object data="/resume.pdf" type="application/pdf" width="100%" height="700px" style={{ borderRadius: '8px' }}>
                <p>
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2300d9ff'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z'/%3E%3C/svg%3E" style={{ width: '100px', height: '100px', display: 'block', margin: '20px auto' }}/>
                  <p style={{ color: '#a8c5ff', textAlign: 'center', padding: '20px' }}>
                    PDF preview is not available in your browser.<br/>
                    <strong>Please use the buttons below to download or view the resume.</strong>
                  </p>
                </p>
              </object>
            </div>
            <div className="modal-footer">
              <a href="/resume.pdf" download className="btn btn-primary">Download Resume</a>
              <a href="/resume.pdf" target="_blank" rel="noopener" className="btn btn-secondary">Open in New Tab</a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
