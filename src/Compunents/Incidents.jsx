
import React from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CollectionsIcon from '@mui/icons-material/Collections';
import FilePresentIcon from '@mui/icons-material/FilePresent';

function Incidents({card}) {
    

  
  return (
    <>
      <div className='grid md:grid-cols-4 z-0 sm:grid-cols-2 grid-cols-1 gap-4 w-[80%] mx-auto'>
      {card.map((item, index)=>(
        <div key={index} className='hover:scale-105 transition-all '>
            <img src={item.img} alt="img" />
            <h1 className='font-bold'>{item.heading}</h1>
            <p className='text-gray-500 text-[12px]'>{item.location} </p>
            <p className='font-bold '>{item.price} </p>
        </div>
      ))}



      </div>

  

    </>
  );
}

export default Incidents