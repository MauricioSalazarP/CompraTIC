import React from 'react';
import "./usuarios.css"
import Footer from '../../navegacion/Footer/Footer';
import Nav2 from '../../navegacion/Navbar/nav2';


const Users = () => {
    return (
        <div>
            <Nav2/>    
            <section class="sample one">
                <input type="text" name="search" placeholder="search"/>
                <button type="submit" class="btn btn-search fa fa-search"></button>
            </section>
            

            <div class="container">
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
            <Footer value={{ background: '##D0A2FE' }} />
        </div>
    )

}

    export default Users;



