// hooks/useCursor.js
import { useEffect, useState } from 'react'

const useCursor = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window
      const x = (event.clientX / innerWidth) * 2 - 1
      const y = -(event.clientY / innerHeight) * 2 + 1
      setCursor({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return cursor
}

export default useCursor
