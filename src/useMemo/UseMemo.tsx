import { useState, useMemo } from "react"

function UseMemo() {
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const incrementOne = () => {
    setCounterOne((prevCount => prevCount + 1))
  }

  const incrementTwo = () => {
    setCounterTwo((prevCount => prevCount + 1))
  }

  const isEven = useMemo(() => {
    let i = 0
    while(i < 2000000000) i++
    return counterOne % 2 == 0
  }, [counterOne]) // Function depends on value of counterOne
  // whenever counterOne changes, tells React to recompute the value
  // and not use the cached value

  return (
    <div>
      <div>
        <button onClick={incrementOne}>CountOne - {counterOne}</button>
        <span>{isEven ? "Even": "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>CountTwo - {counterTwo}</button>
      </div>
    </div>
  )
}

export default UseMemo