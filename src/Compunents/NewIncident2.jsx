import React from 'react'

function NewIncident2() {
  return (
    <>
    <section className='w-full'>
      <div className=' w-[90%] md:w-[60%] mx-auto py-5 '>
      <h1 className='md:text-3xl text-xl font-bold py-3'>Let’s give the incident a title?</h1>
      <p className='text-gray-500 py-6 text-[9px] md:text-[16px]'>Make a title that will easily identify the incidents</p>
      <input className='py-4 px-3 bg-[#F4F4F5] rounded-2xl outline-none border-2 border-gray-300 w-full' type="text" placeholder='Add title here' />
      <h1 className='font-bold text-xl md:text-3xl py-4'>Describe what happened during the incident?</h1>
      <p className='text-gray-500 py-6 text-[9px] md:text-[16px]'>Share some information about the incident. The when, where, how. </p>
      <textarea className='w-full min-h-9 bg-[#F4F4F5] px-3 py-10 rounded-2xl' name="" id="" placeholder='Type here'></textarea>
      </div>
    </section>
    </>
  )
}

export default NewIncident2