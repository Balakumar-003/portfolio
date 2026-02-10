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
    if (!window.pdfjsLib) {
      console.error('PDF.js not loaded yet');
      return;
    }

    const pdfjsLib = window.pdfjsLib;
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    
    const viewer = document.getElementById('pdf-viewer-react');
    if (!viewer) return;
    
    viewer.innerHTML = '<p style="color: #a8c5ff; text-align: center; padding: 20px;">Loading resume...</p>';
    
    pdfjsLib.getDocument('/resume.pdf').promise.then((pdf) => {
      setPdfDoc(pdf);
      viewer.innerHTML = '';
      
      let pageNum = 1;
      
      function renderNextPage() {
        if (pageNum > pdf.numPages) {
          return;
        }
        
        pdf.getPage(pageNum).then((page) => {
          const scale = 1.5;
          const viewport = page.getViewport({ scale });
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          page.render({
            canvasContext: context,
            viewport: viewport
          }).promise.then(() => {
            const pageDiv = document.createElement('div');
            pageDiv.style.cssText = 'display: flex; justify-content: center; margin: 10px 0;';
            pageDiv.appendChild(canvas);
            viewer.appendChild(pageDiv);
            
            pageNum++;
            renderNextPage();
          }).catch((error) => {
            console.error('Error rendering page:', error);
            pageNum++;
            renderNextPage();
          });
        }).catch((error) => {
          console.error('Error getting page:', error);
          pageNum++;
          renderNextPage();
        });
      }
      
      renderNextPage();
    }).catch((error) => {
      console.error('Error loading PDF:', error);
      viewer.innerHTML = '<p style="color: #ff006e; text-align: center; padding: 20px;">Error loading resume. <br>Please use the Download or Open buttons instead.</p>';
    });
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
