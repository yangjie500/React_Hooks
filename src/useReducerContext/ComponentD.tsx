import { useContext } from "react"
import { countContext } from "./ReducerAndContext"

function ComponentD () {
  const context = useContext(countContext)
  return (
    <div>
      CompenentD - {context.count.count}
      <button onClick={() => context.dispatch({type: "INCREMENT"})}>Increment</button>
      <button onClick={() => context.dispatch({type: "DECREMENT"})}>Decrement</button>
    </div>
  )
}

export default ComponentD