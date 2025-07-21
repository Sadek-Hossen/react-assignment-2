import React, { useState } from 'react'
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function NewIncident() {
  const [state, setState] = useState(null);
  const handle =(index)=>{
  setState(index)
  }
  const gridItem = [

    {
         img:"img/f (1).png",
         title:"Avalanche"
    },
  
    {
         img:"img/f (2).png",
         title:"Biological"
    },
  
    {
         img:"img/f (3).png",
         title:"Blizzard"
    },
  
    {
         img:"img/f (4).png",
         title:"Cold/Freezing"
    },
  
    {
         img:"img/f (5).png",
         title:"Drought"
    },
  
    {
         img:"img/f (6).png",
         title:"Earthquake"
    },
  
    {
         img:"img/f (7).png",
         title:"Flooding"
    },
  
    {
         img:"img/f (8).png",
         title:"Heat Wave"
    },
  
    {
         img:"img/f (9).png",
         title:"Hail"
    },
  
    {
         img:"img/f (10).png",
         title:"Lightning"
    },
  
    {
         img:"img/f (11).png",
         title:"Man Made"
    },
  
    {
         img:"img/f (12).png",
         title:"Mudslide"
    },
  
    {
         img:"img/f (13).png",
         title:"Severe Storm"
    },
  
    {
         img:"img/f (14).png",
         title:"Strong Wind"
    },
  
    {
         img:"img/f (15).png",
         title:"Tornado"
    },
  
    {
         img:"img/f (16).png",
         title:"Tsunami"
    },
  
    {
         img:"img/f (17).png",
         title:"Volcanic Eruption"
    },
  
    {
         img:"img/f (17).png",
         title:"Volcanic Eruption"
    },
  
  ]
  return (
    <>
    <section className='w-full '>
      <div className='w-[90%] md:w-[60%] flex flex-col mx-auto py-8 px-3'>
        <h1 className='font-bold text-2xl '>Which of these best describes the incident?</h1>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-2  mt-5">
            {gridItem.map((event,indexing)=>(
                <div onClick={()=>handle(indexing)} key={indexing} className={` ${state===indexing ? " text-white bg-[#F26922]" :"bg-[#F4F4F5] text-gray-600"} p-4 flex justify-between cursor-pointer items-center bg-[#F4F4F5] rounded-2xl`}>
                    <img src={event.img} alt=" icon" />
                      <h2>{event.title}</h2>

                </div>
            ))}

          </div>
      </div>
    </section>
    </>
  )
}

export default NewIncident