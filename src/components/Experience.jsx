import React from 'react'

export default function Experience(){
  const experiences = [
    {
      id: 1,
      company: "AI & Data Science Student",
      title: "Sri Shakthi Institute of Engineering and Technology",
      period: "2022 - Present",
      description: "Pursuing B.Tech in Artificial Intelligence & Data Science. Actively developing projects that bridge ML research with real-world applications, focusing on MLOps, model deployment, and scalable systems.",
      highlights: ["MLOps Focus", "Production Systems", "Model Deployment", "CI/CD"]
    },
    {
      id: 2,
      title: "Dream Lens AI Project",
      company: "Self-Directed",
      period: "2024",
      description: "Architected and deployed an end-to-end ML pipeline for AI-powered drone interpretation. Built scalable inference system with 500ms response times, integrated with modern web stack.",
      highlights: ["ML Pipeline", "Inference Optimization", "API Integration", "React Frontend"]
    },
    {
      id: 3,
      title: "FilmStack AI Project",
      company: "Self-Directed",
      period: "2024",
      description: "Developed an ML-driven recommendation system for film recommendations. Implemented full-stack solution with model training, REST API backend, and interactive user interface.",
      highlights: ["Recommendation Engine", "Full-Stack Dev", "Model Training", "User Experience"]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience & Timeline</h2>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-item">
              <div className="timeline-dot"></div>
              {index !== experiences.length - 1 && <div className="timeline-line"></div>}
              
              <div className="experience-content">
                <div className="exp-header">
                  <div className="exp-title-group">
                    <h3 className="exp-title">{exp.title}</h3>
                    <p className="exp-company">{exp.company}</p>
                  </div>
                  <span className="exp-period">{exp.period}</span>
                </div>
                
                <p className="exp-description">{exp.description}</p>
                
                <div className="exp-highlights">
                  {exp.highlights.map((highlight, idx) => (
                    <span key={idx} className="exp-tag">{highlight}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
