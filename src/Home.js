import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import prod1 from './assets/img/prod1.jpg';
import vinagreraImg from './assets/img/vinagrera.jpg';
import olivoCalidad from './assets/img/olivacalidad2.jpg';

const Home = () => {
  return (
    <div className='container'>
    <h1>Oliver & company</h1>
    <Carousel data-bs-theme="dark" className='carousel'>
      <Carousel.Item>
        <img
          className="d-block"
          src={olivoCalidad}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Productos de alta calidad</h5>
          <p>Nuestros productos se distinguen por tener calidad insuperable.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={vinagreraImg}
          alt="Second slide"
         
        />
        <Carousel.Caption>
          <h5>Aceite de olvas virgen extra</h5>
          <p>Venta por mayor a precios increiblemente bajos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={prod1}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Aceite de gran reserva</h5>
          <p>
            Le haremos descuento con opción de fraccionar el pago.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Home
