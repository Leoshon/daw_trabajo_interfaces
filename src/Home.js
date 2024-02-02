import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { FormattedMessage } from "react-intl";
import prod1 from "./assets/img/prod1.jpg";
import vinagreraImg from "./assets/img/vinagrera.jpg";
import olivoCalidad from "./assets/img/olivacalidad2.jpg";

const Home = () => {
  return (
    <div className="container">
      <h1>Oliver & company</h1>
      <Carousel data-bs-theme="dark" className="carousel">
        <Carousel.Item>
          <img className="d-block" src={olivoCalidad} alt="First slide" />
          <Carousel.Caption>
            <h5>
              <FormattedMessage id="app.carouselHeader1" defaultMessage="Productos de alta calidad" />
            </h5>
            <p>
            <FormattedMessage id="app.carouselText1" defaultMessage="Nuestros productos son de alta calidad, con un sabor inigualable" />
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={vinagreraImg} alt="Second slide" />
          <Carousel.Caption>
            <h5><FormattedMessage id="app.carouselHeader2" defaultMessage="Aceite de olvas virgen extra" /></h5>
            <p><FormattedMessage id="app.carouselText2" defaultMessage="Venta por mayor a precios increiblemente bajos, calidad garantizada" /></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={prod1} alt="Third slide" />
          <Carousel.Caption>
            <h5><FormattedMessage id="app.carouselHeader3" defaultMessage="Aceite de gran reserva" /></h5>
            <p><FormattedMessage id="app.carouselText3" defaultMessage="Nuestro aceite de oliva virgen extra gran reserva con el mejor sabor y calidad" /></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
