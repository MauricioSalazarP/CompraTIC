import React from 'react';
import Footer from '../../navegacion/Footer/Footer';
import Navbar1 from '../../navegacion/Navbar/Navbar1'
import './Login.css';

const Login = () => {
    return (
        <div>
            <Navbar1 value={{ background: '#ccf6ff' }} 
            attribute={{
                nombre1: 'LOGIN',
                nombre2: 'VENTAS',
                nombre3: 'PRODUCTOS',
                nombre4: 'Cancelar',
                to1: '/login',
                to2: '/inicio',
                to3: '/inicio',
                to4: '/inicio',
            }}/>
            <section className='seccion-login'>
                <article className="contenedor">
                    <div className="contenido-login">
                        <form action=" ">
                            <img src="imagen/carro.png" alt="" />
                            <h2>CompraTic</h2>
                            <div className="input-div usuario">
                                <div className="i">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="div">
                                    <input type="text" name="usuario" className="input" placeholder="USERNAME" />
                                </div>
                            </div>
                            <div className="input-div pass">
                                <div className="i">
                                    <i className="fas fa-lock"></i>
                                </div>
                                <div className="div">
                                    <input type="password" name="pass" className="input" placeholder="PASSWORD" />
                                </div>
                            </div>      
                            <div className="botones">
                                <input type="submit" class="btn1" value="INGRESAR" />
                                <input type="submit" class="btn" value="Ingresar Con Gmail" />
                            </div>          
                        </form>
                    </div>
                </article>
                <article class="logo">
                    <img src="imagen/las-compras-en-linea.png" alt="" />
                </article>
            </section>
            <Footer value={{ background: '#ccf6ff' }} />
        </div>
    )
}

export default Login;
