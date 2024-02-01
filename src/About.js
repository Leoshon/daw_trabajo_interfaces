import React from "react";
import vinagreraImg from "./assets/img/vinagrera.jpg";
import olivoCalidad from "./assets/img/olivacalidad2.jpg";

const About = () => {
  return (
    <div className="container">
      <h1>Oliver & company</h1>

      <div className="clearfix">
        <figure>
          <img src={olivoCalidad} alt="imagen" />
          <figcaption>Olivo más longevo del mundo</figcaption>
        </figure>
        <p>
        <h3>Historia</h3>
          Empresa se fundó en 1873, desde entonces nos compremetemos con la
          calidad de nuestros productos.
        </p>
      </div>
      <div className="clearfix">
        <figure>
          <img src={vinagreraImg} alt="imagen" />
          <figcaption>El mejor aceite del mundo</figcaption>
        </figure>
        <p>
        <h3>Productos</h3>
          Nuestros productos se distinguen por tener calidad insuperable.
          Nuestros clientes son nuestra prioridad.
        </p>
      </div>
      <div className="clearfix">
        <figure>
          <img src={vinagreraImg} alt="imagen" />
          <figcaption>El mejor aceite del mundo</figcaption>
        </figure>
        <p>
        <h3>Clientes</h3>
          Nuestros clientes son nuestra prioridad. Nos esforzamos por brindar
          el mejor servicio.
        </p>
      </div>
    </div>
  );
};

export default About;
