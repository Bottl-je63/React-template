import React from 'react'

function Productcard({image="https://www.india.com/wp-content/uploads/2014/09/non-veg.jpg", name="Roast Leg", price="398"}) {
  return (
   
      <div className='col-md-4 mb-3'>
           <div className='card p-4 bg-transparent text-white'>
            <div className='row'>
              <div className='col-4'>
                <img src={image} className='w-100'/>
              </div>
              <div className='col-8'>
                <name>{name}</name>
                <p>Price : {price} /rs</p>
               
              </div>
            </div>
            </div>
           </div>
  )
}

export default Productcard
