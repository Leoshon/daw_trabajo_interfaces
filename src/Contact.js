import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "./assets/img/contact-img.svg";

const Contact = () => {
  const [buttonText, setButtonText] = useState("Enviar");
  const setText = () => {
    setButtonText("Enviando...");
  };
  return (
    <section id="contact" className="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6} sm={4}>
            <img src={contactImg} alt="contact" />
          </Col>
          <Col md={6}>
            <h2>Contacta</h2>
            <form>
              <Row>
                <Col md={6}>
                  <input type="text" placeholder="Nombre" />
                </Col>
                <Col md={6}>
                  <input type="text" placeholder="Apellido" />
                </Col>
                <Col md={6}>
                  <input type="email" placeholder="Email" />
                </Col>
                <Col md={6}>
                  <input type="text" placeholder="Teléfono" />
                </Col>
                <Col md={12}>
                  <textarea placeholder="Mensaje"></textarea>
                </Col>
                <Col md={12}>
                  <button type="button" onClick={setText} >{buttonText}</button>
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
