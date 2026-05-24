function ExperienceCard({ job }) {
  return (
    <div>
      <h2>{job.title}</h2>
      <h3>{job.company} | {job.location}</h3>
      <p>{job.startDate} - {job.endDate}</p>
      <ul>
        {job.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ExperienceCard