import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "./assets/img/contact-img.svg";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h1>Contacto</h1>
      <Container>
        <Row className="align-items-center">
          <Col md={6} sm={4}>
            <img src={contactImg} alt="contact" />
          </Col>
          <Col md={6}>
            <h2>Contact Me</h2>
            <form>
              <Row>
                <Col md={6}>
                  <input type="text" placeholder="First Name" />
                </Col>
                <Col md={6}>
                  <input type="text" placeholder="Last Name" />
                </Col>
                <Col md={6}>
                  <input type="email" placeholder="Email" />
                </Col>
                <Col md={6}>
                  <input type="text" placeholder="Phone" />
                </Col>
                <Col md={12}>
                  <textarea placeholder="Message"></textarea>
                </Col>
                <Col md={12}>
                  <button type="button">Enviar</button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
