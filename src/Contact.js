import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "./assets/img/contact-img.svg";
import { FormattedMessage, injectIntl } from "react-intl";

const Contact = () => {
  // eslint-disable-next-line no-unused-vars
  const [buttonText, setButtonText] = useState("enviar");
  const setText = () => {
    alert("Mensaje enviado");
    setButtonText("");
    
  };
 
  const MyInputName = injectIntl(({intl}) => {
    return <input type="text" placeholder={intl.formatMessage({id: "app.contactName", defaultMessage: "Nombre"})} />;
  });
  const MyInputLastName = injectIntl(({intl}) => {
    return <input type="text" placeholder={intl.formatMessage({id: "app.contactSurname", defaultMessage: "Apellido"})} />;
  });
  const MyInputEmail = injectIntl(({intl}) => {
    return <input type="email" placeholder={intl.formatMessage({id: "app.contactEmail", defaultMessage: "Email"})} />;
  });
  const MyInputPhone = injectIntl(({intl}) => {
    return <input type="text" placeholder={intl.formatMessage({id: "app.contactPhone", defaultMessage: "Teléfono"})} />;
  });
  const MyInputMessage = injectIntl(({intl}) => {
    return <textarea placeholder={intl.formatMessage({id: "app.contactMessage", defaultMessage: "Mensaje"})} />;
  });
  const MyButton = injectIntl(({intl}) => {
    return <button type="button" onClick={setText} >{intl.formatMessage({id: "app.contactButton1", defaultMessage: "Enviar"})}</button>;
  });


  return (
    <section id="contact" className="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6} sm={4}>
            <img src={contactImg} alt="contact" />
          </Col>
          <Col md={6}>
            <h2><FormattedMessage id="app.contact" defaultMessage="Contactar"/></h2>
            <form>
              <Row>
                <Col md={6}>
                  <MyInputName />
                </Col>
                <Col md={6}>
                  <MyInputLastName />
                </Col>
                <Col md={6}>
                  <MyInputEmail />
                </Col>
                <Col md={6}>
                  <MyInputPhone />
                </Col>
                <Col md={12}>
                  <MyInputMessage />
                </Col>
                <Col md={12}>
                  <MyButton />
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
