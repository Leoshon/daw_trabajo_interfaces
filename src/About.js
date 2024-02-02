import React from "react";
import vinagreraImg from "./assets/img/vinagrera.jpg";
import fondoOlivas  from "./assets/img/fondolivas.jpg";
import olivoCalidad from "./assets/img/olivacalidad2.jpg";
import { FormattedMessage } from "react-intl";
const About = () => {
  return (
    <div className="container">
      <h1>Oliver & company</h1>

      <div className="clearfix">
        <figure>
          <img src={olivoCalidad} alt="imagen" />
          <figcaption><FormattedMessage id="app.aboutFigCap1" defaultMessage="Olivo más longevo deñ mundo" /></figcaption>
        </figure>
        <p>
        <FormattedMessage id="app.aboutText1" defaultMessage="Somos una empresa que se dedica a la produccion de aceite de oliva virgen extra desde 1873." />
        </p>
      </div>
      <div className="clearfix">
        <figure>
          <img src={vinagreraImg} alt="imagen" />
          <figcaption><FormattedMessage  id="app.aboutFigCap2" defaultMessage="El mejor aceite del mundo"/></figcaption>
        </figure>
        <p>
        <FormattedMessage id="app.aboutText2" defaultMessage="Nuestro aceite de oliva virgen extra ha sido premiado en numerosas ocasiones como el mejor aceite del mundo." />
        </p>
      </div>
      <div className="clearfix">
        <figure>
          <img src={fondoOlivas} alt="imagen" />
          <figcaption><FormattedMessage  id="app.aboutFigCap3" defaultMessage="Nuestros campos de olivos"/></figcaption>
        </figure>
        <p>
        <FormattedMessage id="app.aboutText3" defaultMessage="Nuestros campos de olivos se encuentran en la provincia de Jaén, en Andalucía, España." />
        </p>
      </div>
    </div>
  );
};

export default About;
