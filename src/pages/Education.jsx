import educationData from '../data/education'
import EducationCard from '../components/EducationCard'

function Education() {
  return (
    <div>
      <h1>Education</h1>
      {educationData.map((edu) => (
        <EducationCard key={edu.id} edu={edu} />
      ))}
    </div>
  )
}

export default Education