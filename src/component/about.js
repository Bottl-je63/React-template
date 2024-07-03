import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap'; 

function About(){
    return(
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-6 py-5 pe-lg-5'>
                    <div className='position-relative'>
                    <img className='w-100' src='https://img.freepik.com/premium-photo/professional-young-chef-working-kitchen_849906-13767.jpg'/>
                    <img className='small-about' src='https://img.freepik.com/free-photo/healthy-chinese-cabbage-salad-isolated-white-background_123827-20704.jpg'/>
                    </div>
                </div>
                <div className='col-md-6 py-5 ps-lg-5 text-white'>
                    <h2>About US</h2>
                    <p>Impossibly Tipsy is a powerful CSS text animation that was powered by the author James Mellers as a solution for all online store owners who are searching for a way to draw visitors’ attention to with attractive and stunning text effect. To go more into detail, by using Impossibly Tipsy, your website will be decorated with an eye-catching effect that creates movements around the text. To be more specific, the texts are surrounded by a frame and the frame moves around the texts. The frame moves around and around, which makes your visitors pay attention to your texts. Do not hesitate to improve your website’s visual and make it more fun with Impossibly Tipsy!</p>
                    <p>  To go more into detail, by using Impossibly Tipsy, your website will be decorated with an eye-catching effect that creates movements around the text. To be more specific, the texts are surrounded by a frame and the frame moves around the texts. Impossibly Tipsy is a powerful CSS text animation that was powered by the author James Mellers as a solution for all online store owners who are searching for a way to draw visitors’ attention to with attractive and stunning text effect.</p>
                </div>
            </div>
        </div>
    );
}
export default About;