import React, { useState } from "react"

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue)

  function resetValue () {
    setValue("")
  }

  function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }

  return [value, handleChange, resetValue] as const
}

export default useInput