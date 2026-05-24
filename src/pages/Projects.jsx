import projectsData from '../data/projects'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  const featured = projectsData.find(p => p.id === 1)
  const rest = projectsData.filter(p => p.id !== 1)

  return (
    <div className="projects-page">
      <h1 className="page-title">Projects</h1>
      
      {/* Featured card */}
      <div className="featured-card">
        <h2>{featured.name}</h2>
        <p>{featured.description}</p>
        
        <ul className="featured-tech">
          {featured.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="featured-links">
          {featured.link && (
            <a href={featured.link} target="_blank" rel="noopener noreferrer">
              Live Site
            </a>
          )}
          
          {/* Mapping over the array of GitHub links specifically for Scriptorium */}
          {featured.github.map((repo, index) => (
            <a key={index} href={repo} target="_blank" rel="noopener noreferrer">
              GitHub Repo {index + 1}
            </a>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="projects-grid">
        {rest.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects