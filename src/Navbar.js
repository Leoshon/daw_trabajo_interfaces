import React from 'react'
import  {Link, useMatch, useResolvedPath} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
      <Link to="/home" className='site-title'>Inicio</Link>
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
