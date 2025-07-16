import { useEffect, useState } from 'react'
import './App.css'

const FollowMouse = () => {

  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    //cleanup
    //se ejecuta cuando el componente se desmonta
    //y tambien se ejecuta cuando cambian la dependencias, antes de ejecutar el efecto de nuevo
    //en este caso, cuando cambia 'enabled'
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])


  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}>
      </div>
      <h3>Mouse Follower</h3>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir punteroo
      </button>
    </>
  )
}

function App() {


  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
