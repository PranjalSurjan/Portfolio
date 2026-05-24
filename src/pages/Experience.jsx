import experienceData from '../data/experience'
import ExperienceCard from '../components/ExperienceCard'

function Experience() {
  return (
    <div>
      <h1>Experience</h1>
      {experienceData.map((job) => (
        <ExperienceCard key={job.id} job={job} />
      ))}
    </div>
  )
}

export default Experience