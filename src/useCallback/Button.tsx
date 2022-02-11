import React from "react"

interface ButtonProps {
  fnt: () => void
  children?: React.ReactNode
}

function Button({fnt, children}: ButtonProps) {
  console.log('Rendering button - ', children)
  return (
    <button onClick={fnt}>
      {children}
    </button>
  )
}

export default React.memo(Button)