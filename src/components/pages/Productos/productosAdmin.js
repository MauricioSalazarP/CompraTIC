import React from 'react';
import Navbar1 from '../../navegacion/Navbar/Navbar1';
import Footer from '../../navegacion/Footer/Footer'
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


const ProductosAdmin = () => {
    return (
    
        <div>
        <Navbar1 value={{ background: '#D0A2FE' }} 
        attribute={{
            nombre1: 'ADMINISTRACIÓN PRODUCTOS',
            nombre2: 'VENTAS',
            nombre3: 'USUARIOS',
            nombre4: 'Cerrar Sesion',
            to1: '/productosAdmin',
            to2: '/ventasAdmin',
            to3: '/usuariosAdmin',
            to4: '/',
        }}/>  
        
        <TableContainer component={Paper} className='table'>
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
                <Footer value={{ background: '#D0A2FE' }} />  
            </div>

        </div>
    )
}

export default ProductosAdmin
