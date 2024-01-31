import React from 'react'

const Navbar = () => {
  return (
    <nav href="/" className='nav'>
      <a href="/home" className='site-title'>Inicio</a>
      <ul className='nav-links'>
        <CustomLink href="/about">Quienes somos</CustomLink>
        <CustomLink href="/products">Productos</CustomLink>
        <CustomLink href="/contact">Contacto</CustomLink>
        
        </ul>
    </nav>
  )
}
function CustomLink({href,children, ...props}){
    const path = window.location.pathname
    return (
        <li className={path === href ? "active":""}>
            <a href={href} {...props}>
                {children}
            </a>
        </li>
    )
}

export default Navbar
