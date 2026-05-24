function ProjectCard({ project }) {
  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <ul>
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectCard