import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap'; 
import Card from "./productcard";


function Categories() {
  const veg1 = {
    image:"https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill-tasty-food-weekend-meal_2829-7043.jpg", name:"Paneer Tikka", price:"150"
  }
  const veg2 = {
    image:"https://img.freepik.com/premium-photo/indian-style-suran-sabzi-jimikand-sabji-also-known-as-elephant-foot-yam-ole-stir-fried-recipe_466689-83250.jpg", name:"Kadai Paneer", price:"440"
  }
  const veg3 = {
    image:"https://deliverfood2me.in/wp-content/uploads/2023/03/Dal-Makhani-Side-PRA_5432.jpg", name:"Daal Makhni", price:"140"
  }
  const nonVeg1 = {
    image:"https://www.india.com/wp-content/uploads/2014/09/non-veg.jpg", name:"Roast Leg", price:"398"
  }
  const nonVeg2 = {
    image:"https://amritsruae.com/blog/wp-content/uploads/2021/02/tandoori-chicken.jpeg", name:"Starter", price:"499"
  }
  const nonVeg3 = {
    image:"https://girlmeetsfood.com/wp-content/uploads/2023/05/biryani-with-sauce.jpg.webp", name:"Biryani", price:"165"
  }
  return (
    <div className='container mt-5'>
      <Tabs
      defaultActiveKey="veg"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="veg" title="Veg" >
          <div className='row'>
           <Card {...veg1}/>
           <Card {...veg2}/>

           <Card {...veg3}/>

           
           <Card {...veg2}/>


           <Card {...veg3}/>
           <Card {...veg1}/>



           <Card {...veg3}/>

           <Card {...veg2}/>



          </div>
          
      </Tab>
      <Tab eventKey="non-veg" title="Non-veg">
      <div className='row'>
      <Card {...nonVeg1}/>

      <Card {...nonVeg2}/>
           
          
           <Card {...nonVeg1}/>

      <Card {...nonVeg2}/>
           
           <Card {...nonVeg1}/>

           
      <Card {...nonVeg3}/>

           
      <Card {...nonVeg2}/>

           
          </div>
      </Tab>
      
    </Tabs>
    </div>
  );
}

export default Categories;