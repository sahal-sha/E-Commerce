import React from "react";

import  Carousel  from "react-bootstrap/Carousel";
import './Home.css'
import  Image  from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Component } from "react";


const Home = () =>{
    return (
        <div>
              <Carousel data-bs-theme="dark" className='Carouse' >
        <Carousel.Item>
          <img
            style={{ maxHeight: "100vh" }}
            className="d-block w-100"
            src={require('./Background img/Ability, Motivation, Attitude.jpeg')}
            alt="First slide"
          />
          <Carousel.Caption>
            <h4 className='Modern'>Modern wood</h4>
            <p className='Moderndis'>Best Selling Products</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ maxHeight: "100vh" }}
            className="d-block w-100"
            src={require('./Background img/second slide.jpeg')}
            alt="Second slide"
          />
            <Carousel.Caption>
            <h4 className='Minimal'>Wooden leibal plain sofa</h4>
            <p className='Minimaldis'>Make your interior Unique & Modern</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ maxHeight: "100vh" }}
            className="d-block w-100"
            src={require('./Background img/third slide.jpeg')}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h4 className='wooden'>Wooden Street</h4>
            <p className='woodenstreet'>Simplify Your Home Furniture</p>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-6' >
            <Link to={'/Seating'}>
              <Image src={require('./HomeCatgry/seatings.jpeg')} style={{ width: "100%" }} />
            </Link>
            <p className='fontstyle'>Seatings</p>
          </div>
          <div className='col-6'>
            <Link to={'/Bedroom'}>
              <Image src={require('./HomeCatgry/bedroom.jpeg')} style={{ width: "100%" }} />
            </Link>
            <p className='fontstyle'>Bedroom </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-6' >
            <Link to={'/Dinning'}>
              <Image src={require('./HomeCatgry/dinning.jpeg')} style={{ width: "100%" }} />
              </Link>
            <p className='fontstyle'>Dining</p>
          </div>
          <div className='col-6'>
            <Link to={'/Storage'}>
              <Image src={require('./HomeCatgry/Storage.jpg')} style={{ width: "100%" }} />
            </Link>
            <p className='fontstyle'>Storage</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-6' >
            <Link to={'/Office'}>
              <Image src={require('./HomeCatgry/office.jpeg')} style={{ width: "100%" }} />
            </Link>
            <p className='fontstyle'>Office</p>
          </div>
          <div className='col-6'>
            <Link to={'/Outdoor'}>
              <Image src={require('./HomeCatgry/outdoor.jpeg')} style={{ width: "100%" }} />
              </Link>
            <p className='fontstyle'>Outdoor</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-6' >
            <Link to={'/Kids'}>
              <Image src={require('./HomeCatgry/kids.jpeg')} style={{ width: "100%" }} />
            </Link>
            <p className='fontstyle'>Kids</p>
          </div>
          </div>
          
          </div>
          
          
        
    
      <footer className="text-light Copyright" >
        <Container >
          <Row className='Footer'>
            <Col md={4}>
              <h5 style={{marginTop:"30px"}}>About Us</h5>
              <img className='Logo' src={require('./NavBar/Logo/wooden-streetlogo2x.jpeg')} alt='Logo' />
            </Col>
            <Col md={4}>
              <ul style={{marginTop:"30px"}}>
                <li>Contact Us</li>
                <li>FAQs</li>
                <li>Shipping Information</li>
              </ul>
            </Col>
            <Col md={4}>
              <ul style={{marginTop:"30px"}}>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Copyright © 2023 wooden street</li>
              </ul>
            </Col>
          </Row>
          <hr className="mt-4" />
          <Row>
            <Col>
              <p className="text-center">&copy; 2023 wooden street.All rights reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
        </div>
    )
}
export default Home