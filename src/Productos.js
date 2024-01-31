import React from 'react'

const Productos = () => {
    const productos = [{
        nombre: "Aceite de Oliva Virgen Extra",
        precio: 5.99,
        imagen: "./assets/img/vinagrera.jpg",

    },
    {
        nombre: "Aceite de Oliva gran reserva",
        precio: 7.99,
        imagen: "./assets/img/aceitereserva.jpg",

    },
    {
        nombre: "Aceite de Cosecha Temprana",
        precio: 9.99,
        imagen: "./assets/img/aceitelimon.jpg",
    },
    {
        nombre: "Aceite de Oliva Virgen Extra negra",
        precio: 11.99,
        imagen: "./assets/img/olivanegra.jpg",
    }
    ]
  return (
    <div>
      <h1>Nuestros Productos</h1>

    </div>
  )
}

export default Productos
