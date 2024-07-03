import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap'; 

function Banner(){
    return (<>
    <Carousel>
      <Carousel.Item interval={8000}>
      <section className='banner'>
    <div className='p-5 text-white content'>
                    <div className=" banner-heading">
                    <h1 >New Heading Paste here</h1>
                    </div>
                    
                </div>
    </section>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
      <section className='banner second-banner'>
    <div className='p-5 text-white content'>
                    <div className=" banner-heading">
                    <h1 >New Heading Paste here</h1>
                    </div>
                    
                </div>
    </section>
      </Carousel.Item>
      
    </Carousel>
    
    <section className="container">
      <div className='row service'>
      <div className='col-4 '>
            <div className='card p-4'>
                <img src='https://img.freepik.com/free-photo/delicious-big-burger-with-meat-bread-lettuce-tomatoes-generative-ai_169016-28840.jpg'/>
            </div>
        </div>
        <div className='col-4'>
            <div className='card p-4'>
                <img src='https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg'/>
            </div>
        </div>
        <div className='col-4'>
            <div className='card p-4'>
                <img src='https://www.miamiherald.com/latest-news/6bcl5c/picture242910706/alternates/LANDSCAPE_768/banana-pancakes-2.jpg'/>
            </div>
        </div>
      </div>
    </section>

    

    </>);
}
export default  Banner;