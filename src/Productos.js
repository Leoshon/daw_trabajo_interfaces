import React from 'react'
import ProductosCard from './ProductosCard'
import vinagrera from './assets/img/vinagrera.jpg'
import aceitereserva from './assets/img/acitereserva.jpg'
import aceitelimon from './assets/img/aceitelimon.jpg'
import olivanegra from './assets/img/olivanegra.jpg'

const Productos = () => {
    const productos = [{
        nombre: "Aceite de Oliva Virgen Extra",
        desripcion: "Aceite de Oliva Virgen Extra de la mejor calidad, ideal para ensaladas y tostadas",
        precio: 5.99,
        imagen: vinagrera,

    },
    {
        nombre: "Aceite de Oliva gran reserva",
        descripcion: "Aceite de Oliva Virgen Extra de calidad excepcional, oro líquido de Jaén",
        precio: 7.99,
        imagen: aceitereserva,

    },
    {
        nombre: "Aceite de Cosecha Temprana",
        descripcion: "Aceite de Oliva Virgen Extra de la mejor calidad, con un sabor más intenso y afrutado", 
        precio: 9.99,
        imagen: aceitelimon,
    },
    {
        nombre: "Aceite de Oliva Virgen Extra negra",
        descripcion: "Aceite de Oliva Virgen Extra de la mejor calidad, solo para los paladares más exigentes",
        precio: 11.99,
        imagen: olivanegra,
    }
    ]
  return (
    <div>
      <h1>Nuestros Productos</h1>
      <div className="row">
          {productos.map((producto, index) => (
              <div className="col-md-4" key={index}>
                  <ProductosCard {... producto} />
              </div>
          ))}

    </div>
    </div>
  )
}

export default Productos
