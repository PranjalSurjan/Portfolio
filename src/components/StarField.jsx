import { useEffect, useRef } from 'react'

function StarField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Virgo constellation points (normalized 0-1, will scale to canvas)
    const virgo = [
      [0.72, 0.12], [0.68, 0.18], [0.65, 0.25],
      [0.65, 0.25], [0.60, 0.30], [0.58, 0.38],
      [0.58, 0.38], [0.62, 0.45], [0.58, 0.38],
      [0.53, 0.42], [0.53, 0.42], [0.50, 0.50],
    ]

    // Random stars
    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.3,
      opacity: Math.random() * 0.7 + 0.1,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleDir: Math.random() > 0.5 ? 1 : -1,
    }))

    let animId

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw twinkling stars
      stars.forEach(star => {
        star.opacity += star.twinkleSpeed * star.twinkleDir
        if (star.opacity > 0.9 || star.opacity < 0.1) {
          star.twinkleDir *= -1
        }
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()
      })

      // Draw Virgo constellation lines
      ctx.strokeStyle = 'rgba(157, 78, 221, 0.35)'
      ctx.lineWidth = 0.8
      for (let i = 0; i < virgo.length - 1; i += 2) {
        const [x1, y1] = virgo[i]
        const [x2, y2] = virgo[i + 1]
        ctx.beginPath()
        ctx.moveTo(x1 * canvas.width, y1 * canvas.height)
        ctx.lineTo(x2 * canvas.width, y2 * canvas.height)
        ctx.stroke()
      }

      // Draw Virgo stars (brighter dots at each point)
      const virgoPoints = virgo.filter((_, i) => i % 2 === 0)
      virgoPoints.forEach(([x, y]) => {
        ctx.beginPath()
        ctx.arc(x * canvas.width, y * canvas.height, 2, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(157, 78, 221, 0.8)'
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  )
}

export default StarField