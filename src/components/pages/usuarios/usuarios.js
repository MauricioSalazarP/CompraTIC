import React from 'react';
import "./usuarios.css"
import Footer from '../../navegacion/Footer/Footer';
import Navbar1 from '../../navegacion/Navbar/Navbar1';
import { Link } from 'react-router-dom'
import $ from "jquery"


const Users = () => {
    $(Document).ready(function() {

        $("tr:first-child").append('<th class="actionsCol" contenteditable="false">Actions</th>');
        $("tr:not(:first-child)").append('<td class="finalActionsCol"><i class="fa fa-plus-circle" aria-hidden="true"></i> <i class="fa fa-minus-circle" aria-hidden="true"></i> <i class="fa fa-pencil-square-o" aria-hidden="true"></i> </td>');
      
        $("table").on("click", ".fa-plus-circle", function() {
          $(this).closest('tr').after('<tr><td class="idRow" contenteditable="false">-</td><td contenteditable="false">-</td><td contenteditable="false">-</td><td contenteditable="false">-</td><td contenteditable="false">-</td><td contenteditable="false">-</td><td contenteditable="false">-</td><td class="finalActionsCol"><i class="fa fa-plus-circle" aria-hidden="true"></i> <i class="fa fa-minus-circle" aria-hidden="true"></i> <i class="fa fa-pencil-square-o" aria-hidden="true"></i> </td></tr>');
        });
      
        $("#addRow").on("click", function() {
          $("table").append('<tr><td class="idRow" contenteditable="false">-</td><td contenteditable="false">-</td><td contenteditable="false">-</td><td contenteditable="false">-</td><td contenteditable="false">-</td><td contenteditable="false">-</td><td contenteditable="false">-</td><td class="finalActionsCol"><i class="fa fa-plus-circle" aria-hidden="true"></i> <i class="fa fa-minus-circle" aria-hidden="true"></i> <i class="fa fa-pencil-square-o" aria-hidden="true"></i> </td></tr>');
        });
      
        $("table").on("click", ".fa-minus-circle", function() {
          if (prompt("Estas seguro de Borrar el Usuario? escribe 'y' para confirmar") == "y") {
            $(this).closest('tr').remove();
          } else {}
        });
      
        $("table").on("click", ".fa-pencil-square-o, .fa-floppy-o", function() {
          var thisRow = $(this).parent().siblings();
          var editOn = $(this).hasClass("editMode");
      
          $('td:last-child').attr('contenteditable', 'false');
          $('td:last-child').css('background-color', 'transparent');
      
          if (editOn == false) {
            $(thisRow).attr('contenteditable', 'true');
            $(thisRow).css('background-color', '#ffc9c9');
            $(this).removeClass("fa-pencil-square-o");
            $(this).addClass("fa-floppy-o editMode");
          } else if (editOn == true) {
            $(thisRow).attr('contenteditable', 'false');
            $(thisRow).css('background-color', 'transparent');
            $(this).removeClass("fa-floppy-o editMode");
            $(this).addClass("fa-pencil-square-o");
          }
        });
      
        $('th', this).dblclick(function() {
          $(this).attr("contenteditable", "true");
        });
        $('th', this).mouseout(function() {
          $(this).attr("contenteditable", "false");
        });
      
      });
    
    return (
        <div>
            <div>
            <Navbar1 value={{ background: '#D0A2FE' }} 
            attribute={{
                nombre1: 'USUARIOS',
                nombre2: 'VENTAS',
                nombre3: 'PRODUCTOS',               
                nombre4: 'Cerrar Sesion',
                to1: '/usuariosAdmin',
                to2: '/ventasAdmin',
                to3: '/productoAdmin',
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
            <li><Link className="dropdown-item" to="#">ID Usuario</Link></li>
            <li><Link className="dropdown-item" to="#">Nombre</Link></li>
            <li><Link className="dropdown-item" to="#">Rol</Link></li>
          </div>
        </div>
            

            <div class="containerUser">
                <table class="tableContents">
                <tr>
                    <th id="IDCol">User ID</th>
                    <th id="firstnameCol" contenteditable="false">Nombre</th>
                    <th id="lastnameCol" contenteditable="false">Apellido</th>
                    <th id="ageCol" contenteditable="false">Edad</th>
                    <th id="genderCol" contenteditable="false">Perfil</th>
                    <th id="heightCol" contenteditable="false">Fecha Ingreso</th>
                    <th id="additionalnotesCol" contenteditable="false">Notas</th>
                </tr>
                <tr>
                    <td class="idRow" contenteditable="false">1</td>
                    <td contenteditable="false">A1</td>
                    <td contenteditable="false">A2</td>
                    <td contenteditable="false">A3</td>
                    <td contenteditable="false">A4</td>
                    <td contenteditable="false">A5</td>
                    <td contenteditable="false">-</td>  
                </tr>
                <tr>
                    <td class="idRow" contenteditable="false">2</td>
                    <td contenteditable="false">B1</td>
                    <td contenteditable="false">B2</td>
                    <td contenteditable="false">B3</td>
                    <td contenteditable="false">B4</td>
                    <td contenteditable="false">B5</td>
                    <td contenteditable="false">-</td>
                </tr>
                <tr>
                    <td class="idRow" contenteditable="false">3</td>
                    <td contenteditable="false">C1</td>
                    <td contenteditable="false">C2</td>
                    <td contenteditable="false">C3</td>
                    <td contenteditable="false">C4</td>
                    <td contenteditable="false">C5</td>
                    <td contenteditable="false">-</td>
                </tr>
                <tr>
                    <td class="idRow" contenteditable="false">4</td>
                    <td contenteditable="false">D1</td>
                    <td contenteditable="false">D2</td>
                    <td contenteditable="false">D3</td>
                    <td contenteditable="false">D4</td>
                    <td contenteditable="false">D5</td>
                    <td contenteditable="false">-</td>
                </tr>
                <tr id="bottomRow Row5">
                    <td class="idRow" contenteditable="false">5</td>
                    <td contenteditable="false">E1</td>
                    <td contenteditable="false">E2</td>
                    <td contenteditable="false">E3</td>
                    <td contenteditable="false">E4</td>
                    <td contenteditable="false">E5</td>
                    <td contenteditable="false">-</td>
                </tr>
                </table>
                
                <button id="addRow">Crear Usuario</button>
            </div>
            <Footer value={{ background: '#D0A2FE' }} />
        </div>
    )

}

    export default Users;



