import React from 'react';
import Navbar1 from '../../navegacion/Navbar/Navbar1';
import Footer from '../../navegacion/Footer/Footer';
import './productos.css';
// import faker from 'faker';
// import { makeStyles } from '@material-ui/core/styles';

import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    TableFooter
 } from '@material-ui/core';

const productosUser = () => {
    return (
    
        <div>
            <Navbar1 value={{ background: '#BAFFFB' }} 
            attribute={{
                nombre1: 'PRODUCTOS DISPONIBLES',
                nombre2: 'VENTAS',
                nombre3: 'Cerrar Sesión',
                to1: '/productosUser',
                to2: '/VentasUser',
                to3: '/'
            }}/>  

<           TableContainer component={Paper} className='table'>
                  <Table  aria-label="simple table">
                      <TableHead>
                        <TableRow>
                        <TableCell >ID_Producto</TableCell>
                        <TableCell >Descripción</TableCell>
                        <TableCell >Precio Unitario</TableCell>
                        <TableCell >Estado</TableCell>
                        <TableCell >Acción</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                      {((row) => (
                        <TableRow key={row.name}>
                          <TableCell>
                            <Grid container>
                              <Grid item lg={2}>
                                  <Avatar alt={row.name} src='.' />
                                </Grid>
                              <Grid item lg={10}>

                              </Grid>
                            </Grid>
                            </TableCell>
                              <TableCell>

                              </TableCell>
                            <TableCell>{row.joinDate}</TableCell>
                            <TableCell>
                                <Typography 
                                    style={{
                                    backgroundColor: 
                                    ((row.status === 'Disponible' && 'green') ||
                                    (row.status === 'No Disponible' && 'blue'))
                                    }}
                                  >{row.status}</Typography>
                              </TableCell>
                          </TableRow>
                      ))}
                    </TableBody>
                    <TableFooter>
                    <TablePagination
         
                    />
                    </TableFooter>
                  </Table>
            </TableContainer>

          <div>
            <Footer value={{ background: '#BAFFFB' }} />  
          </div>

      </div>

          
    )
}

export default productosUser
