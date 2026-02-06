import React from 'react'

export default function About(){
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-main">
            <p className="lead-para">I am a pre-final year B.Tech student in Artificial Intelligence &amp; Data Science at Sri Shakthi Institute of Engineering and Technology. I specialize in MLOps and full-stack development, with a focus on building production-ready, scalable ML systems and modern web applications. I enjoy taking models from experimentation to deployment, designing clean APIs and user interfaces, and automating workflows so teams can iterate faster.</p>

            <h3>Skills & Expertise</h3>
            <p>I have hands-on experience with MLOps pipelines, model training and evaluation, REST API development, and web integration. I'm passionate about CI/CD automation, containerization with Docker, building intuitive frontend experiences with React, and collaborating on open-source projects. I continuously explore new model architectures and focus on improving model reliability and performance in production environments.</p>
          </div>

          <aside className="about-side">
            <img src="/images/profile.svg" alt="Profile photo" className="profile-photo" />
          </aside>
        </div>
      </div>
    </section>
  )
}
