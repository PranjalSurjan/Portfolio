function ProjectCard({ project }) {

    const accentColors = ['var(--accent-purple)', 'var(--accent-pink)', 'var(--accent-blue)']
const accent = accentColors[project.id % 3]
  return (
    <div className="project-card" style={{ borderTopColor: accent }}>
      <h3 className="card-title">{project.name}</h3>
      <p className="card-desc">{project.description}</p>
      <ul className="card-tech">
        {project.tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      {project.github && typeof project.github === 'string' && (
        <a className="card-link" href={project.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      )}
    </div>
  )
}

export default ProjectCard