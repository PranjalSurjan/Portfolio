import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Education from './pages/Education'


function App() {
  const [isDark, setIsDark] = useState(true)

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <nav className="nav">
        <div className="nav-logo">PS://</div>
        <div className="nav-links">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/projects">Projects</Link>
          <Link className="nav-link" to="/experience">Experience</Link>
          <Link className="nav-link" to="/education">Education</Link>
          <button 
            className="theme-toggle" 
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? '☀' : '☽'}
          </button>
        </div>
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