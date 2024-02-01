import React from 'react'
import  {Link, useMatch, useResolvedPath} from 'react-router-dom'
import logoOliva from './assets/img/logoOliva.jpg'

const Navbar = () => {
  return (
    <nav className='nav'>
      <div>
      <img src={logoOliva} alt="logo" className='logo'/>
      <Link to="/home" className='site-title'>Inicio</Link>
      </div>
      <ul className='nav-links'>
        <CustomLink to="/about">Quienes somos</CustomLink>
        <CustomLink to="/products">Productos</CustomLink>
        <CustomLink to="/contact">Contacto</CustomLink>

        </ul>
    </nav>
  )
}
function CustomLink({to,children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const match = useMatch({path:resolvedPath.pathname, end:true})
    return (
        <li className={match ? "active":""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar
