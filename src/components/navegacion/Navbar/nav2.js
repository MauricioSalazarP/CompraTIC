import React from 'react'
import './nav2.css'
import Logo from '../../../assets/images/las-compras-en-linea.png'
import { Link } from 'react-router-dom'


const Nav2 = ({ value, attribute }) => {
    return (
        <div class="nav">
        <input type="checkbox" id="nav-check"/>
        <div class="nav-header">
          <div class="nav-title">
            CompraTIC
            <i class="fas fa-tools">Admon</i>
          </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          
          <a href="#">INICIO</a>
          <a href="#">PRODUCTOS</a>
          <a href="#">VENTAS</a>
          <a href="#">USUARIOS</a>
          <a href="#">Logout</a>
        </div>
      </div>
    )
}

export default Nav2;