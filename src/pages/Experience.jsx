import experienceData from '../data/experience'

function Experience() {
  const planetClasses = ['planet-pink', 'planet-purple', 'planet-blue']
  return (
    <div className="experience-page">
      <h1 className="page-title">Experience</h1>
      
      <div className="timeline">
        {experienceData.map((job, index) => (
          <div className="timeline-item" key={job.id}>
            
            <div className="timeline-left">
              <div className={`timeline-planet ${planetClasses[index % 3]}`}>
                {/* empty for now */}
              </div>
              {/* only show the line if it's not the last item */}
              {index < experienceData.length - 1 && (
                <div className="timeline-line" />
              )}
            </div>
            
            <div className="timeline-content">
              <h2 className="tl-title">{job.title}</h2>
              <p className="tl-company">{job.company}</p>
              <p className="tl-date">{job.startDate} – {job.endDate}</p>
              
              <ul className="tl-desc">
                {job.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience