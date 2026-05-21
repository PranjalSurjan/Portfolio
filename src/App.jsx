import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Education from './pages/Education'

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/education">Education</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </div>
  )
}

export default App