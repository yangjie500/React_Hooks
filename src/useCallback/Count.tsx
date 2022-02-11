import React from "react"

interface CountProps {
  text: string
  count: number
}

function Count({text, count}:CountProps) {
  console.log(`Rendering ${text}`)
  return <div>{text} - {count}</div>
}

export default React.memo(Count)