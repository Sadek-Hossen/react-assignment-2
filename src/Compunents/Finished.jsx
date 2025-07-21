import React from 'react'

function Finished() {
  return (
    <>
     <section className='py-5'>
      <div className='w-[90%] md:w-[60%] mx-auto '>
        <h1 className='text-xl md:text-3xl font-bold py-3 '>Where’s the incident?</h1>
        <p className='text-[9px] md:text-[16px] py-3 text-gray-500  '>Enter a GPS, address. or pin point on the map. Try to be as accurate as possible, or click:Jurisdiction Wide</p>
        <img src="img/location.png" alt="" />

      </div>
     </section>
    </>
  )
}

export default Finished