import React from 'react';
import Footer from '../../navegacion/Footer/Footer';
import Navbar1 from '../../navegacion/Navbar/Navbar1';

const VentasAdmin = () => {
    return (
        <div>
            <Navbar1 value={{ background: '#D0A2FE' }} 
            attribute={{
                nombre1: 'VENTAS',
                nombre2: 'PRODUCTOS',
                nombre3: 'USUARIOS',
                nombre4: 'Cerrar Sesion',
                to1: '/ventasAdmin',
                to2: '/productoAdmin',
                to3: '/usuariosAdmin',
                to4: '/',
            }}/>
            

            <Footer value={{ background: '#D0A2FE' }} />
        </div>
    )
}

export default VentasAdmin
