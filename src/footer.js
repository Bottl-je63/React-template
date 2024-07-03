import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Head() {
  return (
    <>
    
     <div className='container py-5 footer'>
        <div className='row'>
            <div className='col-4'>
                <Link to="./"><img src='https://www.google.com/logos/doodles/2024/celebrating-the-flat-white-6753651837110463-s.png' className='w-50' /></Link>
            </div>
        </div>
        <div className='row text-white '>
            <div className='col-4 pt-5'>
                <p>Navigation available in Bootstrap share general markup and styles, from the base .nav class to the active and disabled states. Swap modifier classes to switch between each style.</p>
                <ul>
                    <li>Days : Monday - Sunday</li>
                    <li>Option : No non-veg on Tuesday </li>
                    <li>Timing : 9:00am - 11:00pm</li>
                </ul>
            </div>
            <div className='col-4 pt-5 offset-2'>
                <h4>Main Course</h4>
                    <ul>
                        <li>Breakfast</li>
                        <li>Lunch</li>
                        <li>Dinner</li>
                    </ul>
            </div>
            <div className='col-2 pt-5 '>
                <h4>Important Links</h4>
                    <ul>
                        <li>Address</li>
                        <li>Connect</li>
                        <li>Social Media</li>
                    </ul>
            </div>
        </div>
     </div>
     <div className="container-fluid bg-dark">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top ">
    <p className="col-md-4 mb-0  text-white">© 2022 Company, Inc</p>

    <Link to="./" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <img src='https://www.google.com/logos/doodles/2024/celebrating-the-flat-white-6753651837110463-s.png'/>
    </Link>
    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Features</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-white">About</a></li>
    </ul>
  </footer>
</div>
   
    </>
  );
}

export default Head;
