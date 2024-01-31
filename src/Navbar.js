import React from 'react'

const Navbar = () => {
  return (
    <nav href="/" className='nav'>
      <a href="/" className='site-title'>Inicio</a>
      <ul className='nav-links'>
        <li><a href="/about">Quines somos</a></li>
        <li><a href="/products">Productos</a></li>
        <li><a href="/contact">Contacta</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
