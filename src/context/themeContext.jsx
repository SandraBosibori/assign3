import { createContext } from "react"
import { useState } from "react"
const ThemeContext = createContext()

const ThemeProvider = ({children})=>{
    const [ theme, setTheme ] = useState('light')

    const handleThemeChange = ()=>{
        setTeheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <ThemeContext.Provider value={{theme, handleThemeChange}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {
    ThemeProvider,
    ThemeContext
}