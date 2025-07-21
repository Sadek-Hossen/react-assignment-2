import React from 'react'

function Documents() {
  return (
    <>
    <section className='grid md:grid-cols-2 grid-cols-1 mx-auto justify-around w-[90%] '>
      <div className=''>
      <div className='flex   py-4 items-center gap-2'>
        <img src="img/locationIcon.png" alt="" />
        <div>
          <p className='text-[13px] text-gray-500'>Location</p>
            <h1 className='font-bold md:text-[13px] '>Tulare County,  Los Angles, CA 23415</h1>
          
        </div>
      </div>
      <div className='flex   items-center gap-2'>
        <img src="img/cardIcon.png" alt="" />
        <div>
          <p className='text-[13px] text-gray-500'>Location</p>
            <h1 className='font-bold md:text-[13px] '>Tulare County,  Los Angles, CA 23415</h1>
          
        </div>
      </div>

      <hr className='my-20 text-gray-300' />

      <h1 className='font-bold text-2xl'>Description</h1>
      <p className='text-gray-500 py-5'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</p>

      <hr className='text-gray-300 my-[70px]' />
      <div className='flex justify-between items-center'>
        <h1 className='font-bold '>Locations</h1>
        <p className='text-gray-500'>See all</p>


      </div>
      </div>

      <div className='md:w-1/2 mx-auto flex items-center py-10'>
        <img  src="img/location2.png" alt="" />
      </div>


    </section>
    </>
  )
}

export default Documents