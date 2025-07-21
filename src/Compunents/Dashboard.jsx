import React from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CollectionsIcon from '@mui/icons-material/Collections';
import FilePresentIcon from '@mui/icons-material/FilePresent';

function Dashboard({card}) {
    

    const HandelClick = ()=>{
      const chat = document.getElementById("chat");
      const remove = document.getElementById("remove");
      const cBtn = document.getElementById("cBtn");
      chat.style.display="flex";
      remove.style.display="flex";
      cBtn.style.display="none";
    } 
    const XhandelClick= ()=>{
      const chat = document.getElementById("chat");
      const cBtn = document.getElementById("cBtn");
      chat.style.display="none"
      cBtn.style.display="flex"
    }
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
<div  className="fixed bottom-5 right-5 z-50">

{/* C button */}
  <button id='cBtn' onClick={HandelClick} className="flex bg-[#F26922] px-4 py-3 text-2xl hover:scale-105 transition-all cursor-pointer rounded-full opacity-90 hover:opacity-100 text-white font-bold">
    C
  </button>
</div>



{/* chat box  start*/}



<div id='chat' className='hidden flex-col   -mt-[500px]  z-50 '>
    

<div className='bg-[#F4F4F5] flex flex-col t-0 mb-[200px] rounded-2xl mx-auto md:ml-[60%] right-5 md:w-[30%] w-[80%]'>

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

{/* x button */}

 <div className=" md:ml-[85%] -mt-[200px]">
  <button  id='remove' onClick={XhandelClick} className=" hidden bg-[#d1cfcec5] px-4 py-3 text-2xl hover:scale-105 transition-all cursor-pointer rounded-full opacity-90 hover:opacity-100 text-black font-bold">
    X
  </button>
</div>
</div>

    </>
  );
}

export default Dashboard;