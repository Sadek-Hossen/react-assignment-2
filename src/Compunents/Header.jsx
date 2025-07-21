import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SearchIcon from '@mui/icons-material/Search';

function Header() {

  const navigate = useNavigate();
  const location = useLocation();

  // Step route map
  const stepMap = {
    "/Progress": {
      next: "/NewIncident",
      label: "Next step"
    },
    "/NewIncident": {
      next: "/NewIncident2",
      label: "Next step"
    },
    "/NewIncident2": {
      next: "/Finished",
      label: " Finished"
    },
    "/Finished": {
      next: "/Documents",
      label: "Fished"
    }
  };

  // Current path info
  const currentStep = stepMap[location.pathname];

  const handleBtnClick = () => {
    if (location.pathname === "/Incidents") {
      navigate("/Progress");
    } else if (currentStep) {
      navigate(currentStep.next);
    }
  };

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
        <div className='hidden md:flex items-center gap-4'>
          <CircleNotificationsIcon className='text-gray-700 bg-[#E4E4E7] rounded-full' />
          <img src="/img/man.png" alt="user" className='h-10 w-10 rounded-full' />
          <div className='text-sm'>
            <p className='font-semibold'>Usman Zafar</p>
            <p className='text-gray-500'>usmanzafar@gmail.com</p>
          </div>
        </div>
      </nav>

      <hr className='hidden md:flex' />

      {/* Bottom section of navbar */}
      <div className={`${location.pathname === "/Incidents " || "/Cypher" ? "flex": "hidden"} 
           md:flex justify-between items-center max-w-[1440px] mx-auto p-4 px-5`}>
        <div>
          <p className='text-gray-500'>Welcome back</p>
        </div>

        <div className=''>
          <div id='searchBtn' className='flex justify-between items-center gap-3'>
            {/* Search Box */}
            <div className={`${location.pathname === "/Incidents" ||"/Cypher" ? "hidden" : "flex"} md:flex py-3 px-[10px] bg-[#FAFAFA] rounded-[6px]`}>
              <SearchIcon />
              <input className="border-none outline-none" type="text" placeholder='Search Identiti' />
            </div>

            {/* Sort Button */}
            <button className={`${location.pathname === "/Incidents" || "/Cypher" ? "hidden" : "flex"} md:flex py-3 px-[10px] bg-[#FAFAFA] rounded-[6px]`}>
              Sort By: Date modified
            </button>

            {/* Action Button */}
            <button
              id='handleBtn'
              onClick={handleBtnClick}
              className="py-2 px-6 rounded-2xl text-white bg-[#F26922] opacity-80 hover:opacity-100 transition-all duration-200"
            >
              {
                location.pathname === "/Incidents" ? "Get start" :
                  currentStep?.label || "Cypher AI"
              }
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
