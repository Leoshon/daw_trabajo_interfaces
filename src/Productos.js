import React from "react";
import ProductosCard from "./ProductosCard";
import vinagrera from "./assets/img/vinagrera.jpg";
import aceitereserva from "./assets/img/acitereserva.jpg";
import aceitelimon from "./assets/img/aceitelimon.jpg";
import olivanegra from "./assets/img/olivanegra.jpg";
import botellaImg from "./assets/img/botella.jpg";
import olivoCalidad from "./assets/img/olivacalidad2.jpg";
import {FormattedMessage} from "react-intl";


const Productos = () => {
  const productos = [
    {
      /* nombre: "Aceite de Oliva Virgen Extra", */
    nombre: <FormattedMessage id="app.cardTitle1" defaultMessage="Aceite de Oliva Virgen Extra"/>,
      descripcion:
      <FormattedMessage id="app.cardText1" defaultMessage="Aceite de Oliva Virgen Extra"/>,
      precio: <FormattedMessage id="app.cardPrice1" defaultMessage="Aceite de Oliva Virgen Extra"/>,
      imagen: vinagrera,
    },
    {
      nombre: <FormattedMessage id="app.cardTitle2" defaultMessage="Aceite de Oliva Virgen Extra"/>,
      descripcion:
      <FormattedMessage id="app.cardText2" defaultMessage="Aceite de Oliva Virgen Extra"/>,
      precio:  <FormattedMessage id="app.cardPrice2" defaultMessage="Aceite de Oliva Virgen Extra"/>,
      imagen: aceitereserva,
    },
    {
      nombre: <FormattedMessage id="app.cardTitle3" defaultMessage="Aceite de Oliva Virgen Extra"/>,
      descripcion:
      <FormattedMessage id="app.cardText3" defaultMessage="Aceite de Oliva Virgen Extra"/>,
      precio:  <FormattedMessage id="app.cardPrice3" defaultMessage="Aceite de Oliva Virgen Extra"/>,
      imagen: aceitelimon,
    },
    {
      nombre: <FormattedMessage id="app.cardTitle4" defaultMessage="Aceite de Oliva Virgen Extra"/>,
      descripcion:
      <FormattedMessage id="app.cardText4" defaultMessage="Aceite de Oliva Virgen Extra"/>,
      precio:  <FormattedMessage id="app.cardPrice4" defaultMessage="Aceite de Oliva Virgen Extra"/>,
      imagen: olivanegra,
    },
    {
      nombre: <FormattedMessage id="app.cardTitle5" defaultMessage="Aceite de Oliva Virgen Extra"/>,
      descripcion:
      <FormattedMessage id="app.cardText5" defaultMessage="Aceite de Oliva Virgen Extra"/>,
      precio:  <FormattedMessage id="app.cardPrice5" defaultMessage="Aceite de Oliva Virgen Extra"/>,
      imagen: botellaImg,
    },
    {
      nombre: <FormattedMessage id="app.cardTitle6" defaultMessage="Aceite de Oliva Virgen Extra"/>,
      descripcion:
      <FormattedMessage id="app.cardText6" defaultMessage="Aceite de Oliva Virgen Extra"/>,
      precio:  <FormattedMessage id="app.cardPrice6" defaultMessage="Aceite de Oliva Virgen Extra"/>,
      imagen: olivoCalidad,
    },
  ];
  return (
    <div>
      <h1><FormattedMessage id="app.productos" defaultMessage="Nuestros Productos" /></h1>
      <div className="row">
        {productos.map((producto, index) => (
          <div className="col-md-4" key={index}>
            <ProductosCard {...producto} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
