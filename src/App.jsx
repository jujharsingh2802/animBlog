import { useEffect, useState } from 'react'
// import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth.js'
import { login, logout } from './store/authSlice.js'
import { Footer, Header } from './components.js'
import { Outlet } from 'react-router-dom'
import Loading from './components/Loading.jsx'

function App() {
  
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()

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
    <div className="min-h-screen w-full rounded-xl flex flex-wrap content-between bg-gray-400">
      <div className='w-full block'>
        <Header/>
        <main>
         <Outlet/>
        </main>
        <Footer/>
      </div>
    </div> 
  ) : (
    <Loading/>
  )
}

export default App
