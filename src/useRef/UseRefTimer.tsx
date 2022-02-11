import { useEffect, useRef, useState } from "react"

function UseRefTimer () {
  const [timer, setTimer] = useState(0)
  const intervalRef = useRef<number | null>(null)


  const stopTimer = () => {
    if (intervalRef.current)
      window.clearInterval(intervalRef.current)
  }

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer(prevTime => prevTime + 1)
    }, 1000)
    return () => {
      stopTimer()
    }
  }, [])

  return (
    <div> 
      <p>Hook Timer - {timer}</p>
      <button onClick={() => stopTimer()}>Stop</button>
    </div>
  )
}

export default UseRefTimer