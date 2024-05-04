import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Container, Logo, LogoutBtn} from '../index'
import { useSelector } from 'react-redux'


function Header() {

  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

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
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  
  ]

  return (
    <header className='py-3 shadow bg-gray-500 relative rounded-b-lg '>
      <Container>
        <nav className='flex relative'>
        <div className='mr-4 left-[-75px] hidden sm:block absolute inset-y-0 top-[-18px] '>
            <Link to="/" className='text-white text-xl font-bold'>
              <Logo width='77px' className='absolute '/>
            </Link> 
          </div>
          <div className="tag hidden sm:block my-auto font-black z-[5px] px-2 cursor-pointer text-3xl">ANIM<span className='text-yellow-400 '>BLOG</span></div>

          <ul className='flex sm:justify-start sm:ml-auto '>

          {
              navItems.map((item)=>(
              item.active ? (
                <li key={item.name} className='sm:mr-4'>
                  <button
                   onClick={()=>navigate(item.slug)}
                   className='inline-block px-3 sm:px-6 py-1 sm:py-2 duration-200 hover:bg-blue-100 rounded-full' >
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