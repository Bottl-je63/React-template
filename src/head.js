import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Head() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark py-4">
      <Container>
        <Link className="navbar-brand" to="./"><img src='https://www.google.com/logos/doodles/2024/celebrating-the-flat-white-6753651837110463-s.png' alt='logo'/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true " aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" to="./">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="./categories">Category</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="./product">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="./">Disabled</Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
   
    </>
  );
}

export default Head;
