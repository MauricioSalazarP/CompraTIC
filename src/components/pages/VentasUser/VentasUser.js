import React from 'react';
import Footer from '../../navegacion/Footer/Footer';
import Navbar1 from '../../navegacion/Navbar/Navbar1';
import './VentasUser.css';
import { Link } from 'react-router-dom'
const VentasUser = () => {
    return (
        <div>
            <div>
            <Navbar1 value={{ background: '#BAFFFB' }} 
            attribute={{
                nombre1: 'VENTAS',
                nombre2: 'PRODUCTOS',
                nombre4: 'Cerrar Sesion',

                to1: '/ventasUser',
                to2: '/productoUser',
                to4: '/',

            }}/>

            </div>
            
            
      <div className="sample one horizontal caja1">

        <input type="text" name="search" placeholder="search"/>
        
      </div>
      <div className="dropdown horizontal caja2">
          <button className="algo btn btn-success btn-search btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Consulta
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><Link className="dropdown-item" to="#">Identificador de la venta</Link></li>
            <li><Link className="dropdown-item" to="#">ID del cliente</Link></li>
            <li><Link className="dropdown-item" to="#">Nombre del cliente</Link></li>
          </div>
        </div>
      

      <div className="container plis">
        <table className="tableContents">
          <tr>
            <th id="IDCol">Id venta</th>
            <th id="firstnameCol" contenteditable="false">Cantidad</th>
            <th id="lastnameCol" contenteditable="false">Precio C/U</th>
            <th id="ageCol" contenteditable="false">Valor Total</th>
            <th id="genderCol" contenteditable="false">Id Producto</th>
            <th id="heightCol" contenteditable="false">Fecha Venta</th>
            <th id="additionalnotesCol" contenteditable="false">Id cliente</th>
            <th id="genderCol" contenteditable="false">Nombre cliente</th>
            <th id="heightCol" contenteditable="false">Id vendedor</th>
            <th id="additionalnotesCol" contenteditable="false">Estado</th>
          </tr>
          <tr>
            <td className="idRow" contenteditable="false">1</td>
            <td contenteditable="true">1</td>
            <td contenteditable="false">$5999</td>
            <td contenteditable="false">$5999</td>
            <td contenteditable="false">1</td>
            <td contenteditable="false">XX/XX/XXX</td>
            <td contenteditable="false">3</td>
            <td contenteditable="false">James Silva</td>
            <td contenteditable="false">2</td>
            <td contenteditable="false">              
              <div className="dropdown">
                <button className="btn btn-success btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Proceso
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><Link className="dropdown-item" to="#">Proceso</Link></li>
                  <li><Link className="dropdown-item" to="#">Cancelada</Link></li>
                  <li><Link className="dropdown-item" to="#">Entregada</Link></li>
                </div>
              </div>
            </td>  
          </tr>
          <tr>
            <td className="idRow" contenteditable="false">1</td>
            <td contenteditable="true">1</td>
            <td contenteditable="false">$5999</td>
            <td contenteditable="false">$5999</td>
            <td contenteditable="false">1</td>
            <td contenteditable="false">XX/XX/XXX</td>
            <td contenteditable="false">3</td>
            <td contenteditable="false">James Silva</td>
            <td contenteditable="false">2</td>
            <td contenteditable="false">              
              <div className="dropdown">
                <button className="btn btn-success btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Proceso
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><Link className="dropdown-item" to="#">Proceso</Link></li>
                  <li><Link className="dropdown-item" to="#">Cancelada</Link></li>
                  <li><Link className="dropdown-item" to="#">Entregada</Link></li>
                </div>
              </div>
            </td>  
          </tr>
          <tr>
            <td className="idRow" contenteditable="false">1</td>
            <td contenteditable="true">1</td>
            <td contenteditable="false">$5999</td>
            <td contenteditable="false">$5999</td>
            <td contenteditable="false">1</td>
            <td contenteditable="false">XX/XX/XXX</td>
            <td contenteditable="false">3</td>
            <td contenteditable="false">James Silva</td>
            <td contenteditable="false">2</td>
            <td contenteditable="false">              
              <div className="dropdown">
                <button className="btn btn-success btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Proceso
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><Link className="dropdown-item" to="#">Proceso</Link></li>
                  <li><Link className="dropdown-item" to="#">Cancelada</Link></li>
                  <li><Link className="dropdown-item" to="#">Entregada</Link></li>
                </div>
              </div>
            </td>  
          </tr>
          <tr>
            <td className="idRow" contenteditable="false">1</td>
            <td contenteditable="true">1</td>
            <td contenteditable="false">$5999</td>
            <td contenteditable="false">$5999</td>
            <td contenteditable="false">1</td>
            <td contenteditable="false">XX/XX/XXX</td>
            <td contenteditable="false">3</td>
            <td contenteditable="false">James Silva</td>
            <td contenteditable="false">2</td>
            <td contenteditable="false">              
              <div className="dropdown">
                <button className="btn btn-success btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Proceso
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><Link className="dropdown-item" to="#">Proceso</Link></li>
                  <li><Link className="dropdown-item" to="#">Cancelada</Link></li>
                  <li><Link className="dropdown-item" to="#">Entregada</Link></li>
                </div>
              </div>
            </td>  
          </tr>
          <tr>
            <td className="idRow" contenteditable="false">1</td>
            <td contenteditable="true">1</td>
            <td contenteditable="false">$5999</td>
            <td contenteditable="false">$5999</td>
            <td contenteditable="false">1</td>
            <td contenteditable="false">XX/XX/XXX</td>
            <td contenteditable="false">3</td>
            <td contenteditable="false">James Silva</td>
            <td contenteditable="false">2</td>
            <td contenteditable="false">              
              <div className="dropdown">
                <button className="btn btn-success btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Proceso
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><Link className="dropdown-item" to="#">Proceso</Link></li>
                  <li><Link className="dropdown-item" to="#">Cancelada</Link></li>
                  <li><Link className="dropdown-item" to="#">Entregada</Link></li>
                </div>
              </div>
            </td>  
          </tr>
        </table>
        <br/>
        <button id="addRow">Crear venta</button>
      </div>
      

            <Footer value={{ background: '#BAFFFB' }} />
        </div>
    )
}

export default VentasUser