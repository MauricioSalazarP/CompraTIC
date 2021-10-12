import React from 'react'
import './Navbar.css'
import Logo from '../../../assets/images/las-compras-en-linea.png'
import { Link } from 'react-router-dom'


const Navbar1 = ({ value, attribute }) => {
    return (
      <nav className="navbar navbar-expand-sm navbar-light menu" role="navigation" style={value}>
        <div className="container-fluid contenedor">
          <div className="collapse navbar-collapse" id="navbarsExample03">
           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <ul className="navbar-nav navbar-left">
                  <li className="nav-item">
                      <Link to="#"> 
                        <h2 className="nav-link compratic">CompraTic</h2>
                        <img src={Logo} className="img" />
                      </Link>
                      
                  </li>
                  
              </ul>
              <li className="nav navbar-nav navbar-center">
                  <Link className="nav-link" to={attribute.to1}>{attribute.nombre1}</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link inicio" to={attribute.to2}>{attribute.nombre2}</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link inicio" to={attribute.to3}>{attribute.nombre3}</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link inicio" to={attribute.to4}>{attribute.nombre4}</Link>
              </li>
              
              
          </ul>
        </div>
      </div>
  </nav>
    
    )
}

export default Navbar1;
