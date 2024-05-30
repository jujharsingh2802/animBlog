import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {

    const dispatch = useDispatch()
    const logoutHandler = () =>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }


  return (
    <button className='inline-block dark:text-white dark:hover:text-black px-4 sm:px-6 py-1 sm:py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >LogOut</button>
  )
}

export default LogoutBtn