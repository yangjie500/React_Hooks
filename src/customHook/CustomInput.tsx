import React from "react"
import useInput from "./useInput"


function CustomInput() {
  const [firstName, changeFirstName, resetFirstName] = useInput("")
  const [lastName, changeLastName, resetLastName] = useInput("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    alert(`Hello ${firstName} ${lastName}`)
    resetFirstName()
    resetLastName()
  }

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="first">First Name:</label>
      <input type="text" id="first" value={firstName} onChange={changeFirstName}/>
      <label htmlFor="last">Last Name:</label>
      <input type="text" id="last" value={lastName} onChange={changeLastName}/>
      <button type="submit">Submit</button>
    </form>
    
  )
}

export default CustomInput