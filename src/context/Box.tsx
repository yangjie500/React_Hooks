import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"


export const Box = () => {
  const value = useContext(ThemeContext)
  value.sayHi()
  return (
    <div style={{background: value.theme.primary.main, color: value.theme.primary.text}}>Theme Context</div>
  )
}