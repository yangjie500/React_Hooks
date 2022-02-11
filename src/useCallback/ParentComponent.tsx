import { useState, useCallback } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

export default function ParentComponent () {
  const [age, setAge] = useState(25)
  const [salary, setSalary] = useState(50000)

  const incrementAge = useCallback(() => {
    setAge(prevAge => prevAge + 1)
  }, [age])

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000)
  }, [salary])
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button fnt={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button fnt={incrementSalary}>Increment Salary</Button>
    </div>
  )
}