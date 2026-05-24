import educationData from '../data/education'

function Education() {
  const edu = educationData[0]

  return (
    <div className="education-page">
      <h1 className="page-title">Education</h1>

      <div className="edu-poster">
        <div className="edu-grid-overlay" />

        <div className="edu-poster-top">
          <div className="edu-stat-block">
            <span className="edu-gpa-big">{edu.gpa}</span>
            <span className="edu-gpa-label">CGPA</span>
          </div>
          <div className="edu-title-block">
            <h2 className="edu-degree">{edu.degree}</h2>
            <h3 className="edu-institution">{edu.institution}</h3>
            <p className="edu-date">{edu.startDate} – {edu.endDate}</p>
          </div>
        </div>

        <div className="edu-divider" />

        <div className="edu-objectives">
          <p className="edu-objectives-label">// mission objectives</p>
          <ul className="edu-highlights">
            {edu.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>

        {edu.diplomaLink && (
          <a href={edu.diplomaLink} target="_blank" rel="noopener noreferrer" className="edu-badge">
            ✦ View Official Credential
          </a>
        )}
      </div>
    </div>
  )
}

export default Education