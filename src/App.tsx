import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'

// Get theme from localStorage, set to dark mode as default if
// localStorage is not set or contains an invalid value
const getThemeMode = (defaultValue: modes): modes => {
    try {
        const storedMode = localStorage.getItem('themeMode')
        if(storedMode == "dark" || storedMode == "light") {
            return storedMode
        }

        return defaultValue
    } catch {
        return defaultValue
    }
}

const App = (): JSX.Element => {

    const [themeMode, setThemeMode] = useState<modes>(getThemeMode("dark"))

    // Set theme to localStorage on change
    useEffect(() => {
        localStorage.setItem('themeMode', themeMode)

        // Set class on html tag to toggle theme
        const htmlElement = document.getElementById('root')
        if(themeMode === "light") {
            htmlElement?.classList.remove('dark')
        } else if(themeMode === "dark") {
            htmlElement?.classList.add('dark')
        }

    }, [themeMode])

  return (
    <>
        <Nav mode={themeMode} themeSwitch={setThemeMode} />
        <Outlet />
    </>
  )
}

export default App