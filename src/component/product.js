import React,{ useState } from 'react';


function Product({image="https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill-tasty-food-weekend-meal_2829-7043.jpg", name="Product Name", price="35"}) {

let [number, setNumber] = useState(1);
function handleClick(e) {
    e.stopPropagation();
    setNumber(number=>number +1 );
    // console.log(number);    
}

return (
    <div>
       <div className='container py-5 text-white'>
        <div className='row'>
            <div className='col-md-6'>
                <div>
                    <img src={image} className='w-100' alt='p'/>
                </div>
            </div>
            <div className='col-md-6'>
                <div>
                    <h3>{name}</h3>
                    <h5>Category : South Indian</h5>
                    <p>Veg / Non-veg</p>
                    <p>Short Discription Five to 7 words words</p>
                    <p>Offer :- 15% Off on SBI cards</p>
                    <h4>Rs :- {price} -/only</h4>
                    <p>Number of Items = <span>{number}</span><button onClick={handleClick} className='border ms-3 '>+</button></p>
                    {price<200 ? <p>Pickup From Store</p>:<p>Home Delivery</p>}

                </div>
            </div>
            <div className='col-12 py-4'>
                <p>It looks like you're building a React application with React Router for routing. However, there are a couple of issues in your code:

                    You're using  but not providing an</p>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <h4>Reviews</h4>
                    <div>
                        <h6>User Name</h6>
                        <p>Comment: It looks like you're building a React application with React Router for routing. However, there are a couple of issues in your code:
                        </p>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Product
