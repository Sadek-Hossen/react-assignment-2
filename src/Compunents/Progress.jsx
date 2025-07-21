import React, { useState } from 'react'

function Progress(props) {
  const [Clickstate, setClick]=useState(null)


  const victorImg=[
    {
      img:"img/Victor1.png",
      heading:"What type of incident?",
      pera :"Choose the category that best describes the incident."
    },
    {
      img:"img/Victor2.png",
      heading:"Tell us about the incident?",
      pera :"Let’s connect the dots and see where to start."
    },
    {
      img:"img/Victor3.png",
      heading:"Where did the incident occur?",
      pera :"Lorem ipsum dolar sit general sac mascho werho"
    },
  ]
const   handle = (index)=>{
  setClick(index)
}

return (
    <>

     <section className='w-full'>
      <div className='w-[70%] mx-auto py-5 px-2  text-center'>
        <h1 className='font-bold text-2xl  py-3'>Let’s get started</h1>
        <p className='md:w-[60%] text-center mx-auto  text-[#71717A]'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p>
        <img src="img/progress.png"  alt=" progress bur " className='   py-6 mx-auto' />
      </div>

      {/* card section */}

      <div className='md:flex justify-around items-center gap-2  w-[80%] mx-auto py-10 px-2'>
        {victorImg.map((event,index)=>(
             <div onClick={()=> handle(index)} key={index} className={`  min-h-[300px] mt-3 py-10 px-5 bg-[#E4E4E7] rounded-2xl  ${Clickstate===index ?  " border-2 border-black":"bg-[#E4E4E7]"}`}>
              <img className='w-[10%] py-5' src={event.img} alt="" />
              <h1 className='font-bold text-2xl  py-5'>{event.heading}</h1>
              <p className='text-[#71717A]'>{event.pera}</p>
             </div>
        ))}
      </div>

      <div className='flex justify-center items-center mx-auto  py-13
      '><button className='bg-[#F26922] px-3 py-2 rounded-2xl text-white opacity-90 hover:opacity-100 cursor-pointer'>Get Start</button></div>
     </section>

    </>
    
  )
}

export default Progress