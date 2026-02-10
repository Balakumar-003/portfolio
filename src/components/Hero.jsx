import React, { useState, useEffect } from 'react'

export default function Hero(){
  const [showResume, setShowResume] = useState(false);
  const [pdfDoc, setPdfDoc] = useState(null);

  useEffect(() => {
    // Load PDF.js from CDN
    if (!window.pdfjsLib) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
      script.onload = () => {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
      };
      document.body.appendChild(script);
    }
  }, []);

  const openResume = () => {
    setShowResume(true);
  };

  const closeResume = () => {
    setShowResume(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target.id === 'resumeModalBackdrop') {
      closeResume();
    }
  };

  const renderPDF = () => {
    if (window.pdfjsLib && !pdfDoc) {
      const pdfjsLib = window.pdfjsLib;
      pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
      
      pdfjsLib.getDocument('/resume.pdf').promise.then((pdf) => {
        setPdfDoc(pdf);
        renderAllPages(pdf);
      }).catch((error) => {
        console.error('Error loading PDF:', error);
      });
    }
  };

  const renderAllPages = (pdf) => {
    const viewer = document.getElementById('pdf-viewer-react');
    if (!viewer) return;
    viewer.innerHTML = '';
    
    for (let i = 1; i <= Math.min(pdf.numPages, 5); i++) {
      pdf.getPage(i).then((page) => {
        const scale = 1.5;
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        page.render({
          canvasContext: context,
          viewport: viewport
        });

        const pageDiv = document.createElement('div');
        pageDiv.style.cssText = 'display: flex; justify-content: center; margin: 10px 0;';
        pageDiv.appendChild(canvas);
        viewer.appendChild(pageDiv);
      });
    }
  };

  useEffect(() => {
    if (showResume) {
      renderPDF();
    }
  }, [showResume]);

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
            <div className="modal-body" id="pdfContainer" style={{ overflowY: 'auto' }}>
              <div id="pdf-viewer-react"></div>
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
