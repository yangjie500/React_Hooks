import { createContext } from 'react'
import { theme } from './theme'

interface ThemeContextProviderProps {
  children: React.ReactNode
}

interface ContextValue {
  theme: typeof theme
  sayHi: () => void;
}

const ThemeContext = createContext<ContextValue>({} as ContextValue);

const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {
  function sayHi () {
    console.log("hi")
  }

  function sayBye() {
    console.log("bye")
  }

  return <ThemeContext.Provider value={{theme, sayHi}}>
    {children}
  </ThemeContext.Provider>
}

export { ThemeContext, ThemeContextProvider }



