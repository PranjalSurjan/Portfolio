function EducationCard({ edu }) {
  return (
    <div>
      <h2>{edu.institution}</h2>
      <h3>{edu.degree}</h3>
      <p>{edu.startDate} - {edu.endDate} | Cumulative GPA: {edu.gpa}</p>
      
      {edu.diplomaLink && (
        <a href={edu.diplomaLink} target="_blank" rel="noopener noreferrer">
          View Credential
        </a>
      )}

      <ul>
        {edu.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default EducationCard