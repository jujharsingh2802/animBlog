import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {Container, Logo, LogoutBtn, ModeChangerButton} from '../index'
import { useSelector } from 'react-redux'
import useTheme from '../../context/Theme.jsx'

function Header() {

  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname
  const navItems = [
    {
      name: 'Home',
      slug:"/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus && currentPath!=="/all-posts",
    },
    {
      name: "My Posts",
      slug: "/my-posts",
      active: authStatus && currentPath==="/all-posts",
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    }
  ]

  return (
    <header className='py-3 shadow dark:bg-black bg-gray-500 relative rounded-b-lg '>
      <Container>
        <nav className='flex relative'>
        <div className='mr-4 left-[-60px] hidden sm:block  absolute inset-y-0 top-[-1px] '>
            <Link to="/" className='text-white text-xl  font-bold'>
              <Logo width='45px' className=''/>
            </Link> 
          </div>
          <Link to= "/">
          <div className="tag hidden sm:block my-auto dark:text-white font-black z-[5px] px-2 cursor-pointer text-3xl">ANIM<span className='text-yellow-400 '>BLOG</span></div>
          </Link>
          <ul className='flex sm:justify-start sm:ml-auto '>
            <ModeChangerButton />
          {
              navItems.map((item)=>(
              item.active ? (
                <li key={item.name} className='sm:mr-4'>
                  <button
                   onClick={()=>navigate(item.slug)}
                   className='inline-block px-3 sm:px-6 py-1 sm:py-2 duration-200 hover:bg-blue-100 dark:text-white dark:hover:text-black rounded-full' >
                    {item.name}
                  </button>
                </li>
              ) : null
            ))
          }

            {
              authStatus && (
                <li className='mr-4'>
                  <LogoutBtn/>
                </li>
              )
            }
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header