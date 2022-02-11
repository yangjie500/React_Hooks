import { ThemeContextProvider } from "./ThemeContext"
import { Box } from "./Box"



function AppContext() {
  return (
    <ThemeContextProvider>
      <div>
        <div>Hello</div>
        <Box />
      </div>
    </ThemeContextProvider>
  )
}

export default AppContext;