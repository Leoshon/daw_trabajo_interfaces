import React from "react";
import ProductosCard from "./ProductosCard";
import vinagrera from "./assets/img/vinagrera.jpg";
import aceitereserva from "./assets/img/acitereserva.jpg";
import aceitelimon from "./assets/img/aceitelimon.jpg";
import olivanegra from "./assets/img/olivanegra.jpg";
import botellaImg from "./assets/img/botella.jpg";
import olivoCalidad from "./assets/img/olivacalidad2.jpg";

const Productos = () => {
  const productos = [
    {
      nombre: "Aceite de Oliva Virgen Extra",
      descripcion:
        "Aceite de Oliva Virgen Extra de la mejor calidad, ideal para ensaladas y tostadas",
      precio: 9.99,
      imagen: vinagrera,
    },
    {
      nombre: "Aceite de Oliva gran reserva",
      descripcion:
        "Aceite de Oliva Virgen Extra de calidad excepcional, oro líquido de Jaén",
      precio: 8.99,
      imagen: aceitereserva,
    },
    {
      nombre: "Aceite de Cosecha Temprana",
      descripcion:
        "Aceite de Oliva Virgen Extra de la mejor calidad, con un sabor más intenso y afrutado",
      precio: 9.99,
      imagen: aceitelimon,
    },
    {
      nombre: "Aceite de Oliva Virgen Extra negra",
      descripcion:
        "Aceite de Oliva Virgen Extra de la excepcional calidad, solo para los paladares más exigentes",
      precio: 11.99,
      imagen: olivanegra,
    },
    {
      nombre: "Aceite de Oliva Virgen Extra",
      descripcion:
        "Aceite de Oliva Virgen Extra de la excepcional calidad, ideal para ensaladas y tostadas",
      precio: 11.99,
      imagen: botellaImg,
    },
    {
      nombre: "Aceite de Oliva  Extra",
      descripcion:
        "Aceite de Oliva  de la excepcional calidad, ideal para ensaladas y tostadas",
      precio: 8.99,
      imagen: olivoCalidad,
    },
  ];
  return (
    <div>
      <h1>Nuestros Productos</h1>
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
