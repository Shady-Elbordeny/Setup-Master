import React, { useContext, useState } from 'react'
import logo from '../../assets/images/LOGO 1.png'
import { Link, useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'
import { TokenContext } from '../../Context/Token'
const navList = [
  {title:"Home",link:"/"},
  {title:"Build PC",link:"/buildPc"},
  {title:"Benchmark",link:"/benchmark"},
  {title:"Comparison",link:"/comparison"},
  {title:"Contact Us",link:"/contact"},
]
console.log(document.location.pathname)
export default function Navbar() {
  const {token,setToken} = useContext(TokenContext)
  const navigate = useNavigate()
  function handleLogOut(){
    setToken('')
    localStorage.removeItem('token')
    navigate('/')
  }
  const [pathName,setPathName] = useState(document.location.pathname)
  const [mobileNav,setMobileNav] = useState(false)
  return (
    <nav className='bg-[--subColor]'>
      <div className="container mx-auto  flex items-center justify-between">
        <div>
          <img src={logo} width={250} alt="logo" />
        </div>
        <ul className='lg:flex gap-x-3 ms-auto hidden '>
          {navList.map((list,index)=> <li onClick={()=>setPathName(document.location.pathname)} className={`${pathName == list.link ? "text-[--mainColor]" : "text-[#fff]"}  hover:text-[--mainColor] transition-colors duration-200`} key={index}><Link to={list.link}>{list.title}</Link></li>)}
        </ul>

  
        <div className=' lg:flex lg:gap-x-3 items-center hidden'>
          {token ?  <Link onClick={handleLogOut} className='ms-5 me-2' to='/'><i className="fa-regular fa-circle-user p-1 text-lg"></i>Log Out</Link>
:          <Link onClick={()=>{setPathName(document.location.pathname)}} className={`${pathName == '/login' ? "text-[--mainColor]" : "text-[#fff]"} me-5 ms-10`}  to='/login'><i className="fa-regular fa-circle-user p-1 text-lg"></i>Login</Link>
}
          <Link className='text-[#fff] flex gap-x-1 items-center'>
          <i className="fa-solid fa-globe"></i>
          <select name="" id="" className='bg-transparent cursor-pointer'>
            <option value="EN" className='bg-[--subColor]'>EN</option>
            <option value="AR" className='bg-[--subColor]'>AR</option>
          </select>
          </Link>
        </div>

              {/* small Screen bar */}
              <button className='me-3 lg:hidden' onClick={()=> mobileNav ? setMobileNav(false) : setMobileNav(true)}>
        <i className="fa-solid fa-bars text-[#fff] text-2xl"></i>
        </button>
      
      {mobileNav ?         <motion.ul   initial={{ opacity: 0,x: "-100%" }}
          animate={{ opacity: 1,x:"-50%"}}
          transition={{ duration: 0.5 }} className='fixed z-50 top-1/4 bg-[--subColor] w-[90%] left-1/2  -translate-x-1/2 rounded px-4 py-10  shadow-md '>
          <i onClick={()=>setMobileNav(false)} className="fa-regular fa-circle-xmark absolute right-6 text-3xl text-red-400 cursor-pointer top-5"></i>
            {navList.map((list,index)=> <li onClick={()=>{setPathName(document.location.pathname)}} className={`${pathName == list.link ? "text-[--mainColor]" : "text-[#fff]"}  hover:text-[--mainColor] transition-colors duration-200 my-2`} key={index}><Link onClick={()=>setMobileNav(false)} to={list.link}>- {list.title}</Link></li>)}
            
        <div className='text-[#fff] flex flex-col gap-y-2 justify-center mt-4 '>
          <Link onClick={()=>{setPathName(document.location.pathname)}} className={`${pathName == '/login' ? "text-[--mainColor]" : "text-[#fff]"}`} to='/login'>- <i className="fa-regular fa-circle-user p-1 text-lg"></i>Login</Link>
          <Link className=''>- 
          <i className="fa-solid fa-globe ps-2"></i>
          <select name="" id="" className='bg-transparent cursor-pointer'>
            <option value="EN" className='bg-[--subColor]'>EN</option>
            <option value="AR" className='bg-[--subColor]'>AR</option>
          </select>
          </Link>
        </div>
          </motion.ul>:""}
    


      </div>

    </nav>
  )
}
