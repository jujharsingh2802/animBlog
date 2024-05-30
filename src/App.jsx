import { useEffect, useState } from 'react'
// import './App.css'
import { ThemeModeProvider } from './context/Theme.jsx'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
import Loading from './components/Loading'

function App() {
  
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()
  const [themeMode, setThemeMode] = useState("dark")
  const darkTheme=()=>{
    setThemeMode("dark")
  }
  const lightTheme = ()=>{
    setThemeMode("light")
  }
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
    }
    else{
      dispatch(logout())
    }
    })
    .catch((err)=>{
      console.log(err)
      dispatch(logout())
      setLoading(true)
    })
    .finally(()=>setLoading(false))
  },[])
  



  return !loading ? (
    <ThemeModeProvider value={{themeMode, lightTheme, darkTheme}}>
    <div className="min-h-screen w-full rounded-xl flex flex-wrap content-between bg-gray-400 dark:bg-slate-900 ">
      <div className='w-full block'>
        <Header/>
        <main>
         <Outlet/>
        </main>
        <Footer/>
      </div>
    </div> 
    </ThemeModeProvider>
  ) : (
    <Loading/>
  )
}

export default App
