import React from 'react'

const PROJECTS = [
  {
    id:1,
    title:'Dream Lens AI',
    domain:'MLOps',
    desc:'Addresses users’ curiosity about dreams by generating meaningful interpretations using AI models.',
    tech:'Mistral Model, HTML, CSS, JavaScript, MongoDB',
  },
  {
    id:2,
    title:'PharmTrack AI',
    domain:'MLOps',
    desc:'Helps maintain medical records and provides support during medical emergencies using AI-driven insights.',
    tech:'Mistral Model, MERN Stack'
  }
]

export default function Projects(){
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {PROJECTS.map(p=> (
            <article key={p.id} className="project">
              <h3>{p.title}</h3>
              <p><strong>Domain:</strong> {p.domain}</p>
              <p>{p.desc}</p>
              <p><strong>Tech:</strong> {p.tech}</p>
              <p><strong>Contributions:</strong> {p.id===1? 'Trained and tested AI models; improved response quality and accuracy; integrated model outputs with the web interface.' : 'Model training and testing; frontend development using React; assisted in system integration.'}</p>
              <p><strong>GitHub:</strong> Coming soon</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
