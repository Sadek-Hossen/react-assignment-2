import React from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CollectionsIcon from '@mui/icons-material/Collections';
import FilePresentIcon from '@mui/icons-material/FilePresent';

function Dashboard({card}) {
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

    {/* chat icon */}
<div className="fixed bottom-5 right-5 z-50">
  <button className="bg-[#F26922] px-4 py-3 text-2xl hover:scale-105 transition-all cursor-pointer rounded-full opacity-90 hover:opacity-100 text-white font-bold">
    C
  </button>
</div>

{/* chat box */}
<div className='hidden'>
    
<div className="fixed bottom-6 right-6 z-50">
  <button className="bg-[#F26922] px-4 py-3 text-2xl hover:scale-105 transition-all cursor-pointer rounded-full opacity-90 hover:opacity-100 text-white font-bold">
    X
  </button>
</div>
<div className='bg-[#F4F4F5] flex flex-col mb-[200px] rounded-2xl ml-[60%] right-5 md:w-[30%] w-[80%]'>

    <div className='bg-[#F26922] rounded-t-3xl px-3 py-4 w-full'>
        <h1 className=' font-bold text-white text-2xl px-4 py-5'>Chat with Cypher</h1>
    </div>

    <div className=' px-4'>
        <div className=' bg-[#3F3F46] px-3 py-4 rounded-2xl w-[60%] ml-[40%] my-4'>
        <p className='text-white'>Lorem ipsum dolar sit general sac mascho werho</p>
     </div>
    <div className=' bg-[#F4F4F5] border-2  border-gray-300 px-3 py-4 rounded-2xl w-[60%] my-4'>
        <p className='text-gray-500'>Lorem ipsum dolar sit general sac mascho werho</p>
     </div>
    <div className=' bg-[#F4F4F5] border-2  border-gray-300 px-3 py-4 rounded-2xl w-[60%] my-4'>
        <p className='text-gray-500'>Lorem ipsum dolar sit general sac mascho werho</p>
     </div>
    
    <div className=' bg-[#3F3F46] px-3 py-4 rounded-2xl w-[60%] ml-[40%] my-4'>
        <p className='text-white'>Lorem ipsum dolar sit general sac mascho werho</p>
     </div>
     <div>
        <input type="text" placeholder='Enter your question...' className='px-3 py-4 w-full border-2  border-gray-300 rounded-2xl outline-none' />
     </div>

     <div className='flex justify-between items-center py-4 px-1 '>
 
        <div className=' text-gray-400'><CameraAltIcon /> <CollectionsIcon  /> <FilePresentIcon /> </div>
        <button className='px-[25px] py-[11px] opacity-80 hover:opacity-100 transition-all cursor-pointer bg-[#F26922] text-white font-bold rounded-full
        '>Send</button>
     </div>
    </div>
    
</div>
</div>

    </>
  );
}

export default Dashboard;