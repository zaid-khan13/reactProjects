import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './Contexts/Theme'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("Light")
  }
  
  const DarkTheme = () => {
    setThemeMode("Dark")
  }

  // actual change in theme

  useEffect(() =>{
    first
    return () => {
      second
    }
  },[third])
  
  

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  {/*ThemeBtn */}
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App 
