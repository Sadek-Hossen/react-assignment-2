import React from 'react';
import { NavLink, useNavigate} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SearchIcon from '@mui/icons-material/Search';

function Header() {

  const navigate = useNavigate()
  const location= useLocation()
  const IsIncidents = location.pathname=== "/Incidents";
  const handle= ()=>{
    if(IsIncidents){
      navigate("/Activities")

    }
    else{
    
    }
  }


  return (
    <>
    <nav className='flex justify-between items-center px-8 max-w-[1440px] mx-auto p-4'>

      {/* Logo */}
      <div className='hidden md:flex'>
        <img src="/img/logo.png" alt="logo" className='h-10' />
      </div>

      {/* Navigation Links */}
      <div className='flex gap-6 md:text-[16px] sm:text-[14px] text-[9px]'>
        <NavLink to='/' end className={({ isActive }) =>
          isActive ? "font-bold border-b-2 border-black" : "text-gray-500"
        }>
          Dashboard
        </NavLink>
        <NavLink to="/Incidents" className={({ isActive }) =>
          isActive ? "font-bold border-b-2 border-black" : "text-gray-500"
        }>
          Incidents
        </NavLink>
        <NavLink to="/Activities" className={({ isActive }) =>
          isActive ? "font-bold border-b-2 border-black" : "text-gray-500"
        }>
          Activities
        </NavLink>
        <NavLink to="/Documents" className={({ isActive }) =>
          isActive ? "font-bold border-b-2 border-black" : "text-gray-500"
        }>
          Documents
        </NavLink>
        <NavLink to="/Cypher" className={({ isActive }) =>
          isActive ? "font-bold border-b-2 border-black" : "text-gray-500"
        }>
          Cypher AI
        </NavLink>
      </div>

      {/* User Info */}
      <div className='hidden md:flex items-center gap-4 '>
        <CircleNotificationsIcon className='text-gray-700 bg-[#E4E4E7]  rounded-full ' />
        <img src="/img/man.png" alt="user" className='h-10 w-10 rounded-full' />
        <div className='text-sm'>
          <p className='font-semibold'>Usman Zafar</p>
          <p className='text-gray-500'>usmanzafar@gmail.com</p>
        </div>
      </div>

    </nav>
    <hr className='hidden md:flex'/>

    {/* bottom section  in navbur*/}
<div className={`${ IsIncidents ? "flex" : "hidden"} 
         md:flex justify-between items-center max-w-[1440px] mx-auto p-4 px-5`}>
  <div>
     <div>
      <p className='text-gray-500'>Welcome back</p>
      <h1 className='font-space'>Dashboard</h1>
     </div>
  </div>


  <div className=''>
    <div id='searchBtn' className={`flex justify-between items-center gap-3`}> 
    
       <div  className={` ${IsIncidents ? "hidden" : "flex"} md:flex py-3 px-[10px] bg-[#FAFAFA]  rounded-[6px] `}> <SearchIcon /> <input className="  border-none outline-none" type="text" placeholder='Search Identiti' />
        </div> 
    <button className={`${IsIncidents ? "hidden" : "flex"} md:flex py-3 px-[10px] bg-[#FAFAFA]  rounded-[6px]`}>Sort By: Date modified</button>
    <button onClick={handle}  className ="py-2 px-6 rounded-2xl text-white bg-[#F26922] opacity-80 hover:opacity-100 transition-all duration-200 "> {IsIncidents ? "+ New Incident " : "Cypher AI" } </button>
    
    </div>
  </div>
</div>
    </>


  );
}

export default Header;