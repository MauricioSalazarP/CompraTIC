import React from 'react'
import Footer from '../../navegacion/Footer/Footer';
import Navbar1 from '../../navegacion/Navbar/Navbar1'
import './Inicio.css'

const productImages = require.context('../../../assets/images', true)

const Inicio = () => {
    return (
        <div>
            <Navbar1 value={{ background: '#C4C4C4' }} 
            attribute={{
                nombre1: 'PRODUCTOS',
                nombre2: 'Inicio Sesion',
                to1: '/login',
                to2: '/login'

            }}/>
            <section id="portfolio" classNameName="portfolio">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h3>Aquí encontraras una muestra de nuestros <span>productos</span></h3>
                    </div>
  
                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                        <div className="col-lg-3 col-md-6 portfolio-item filter-app">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <img src={ productImages('./computer.png') } className="img-fluid" alt="" />
                            </div>
                            <div className="portfolio-info">
                                <h4>Computadores</h4>
                                <p>Tecnología</p>
                            </div>
                        </div>
            
                        <div className="col-lg-3 col-md-6 portfolio-item filter-web">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <img src={ productImages('./diademas.png') } className="img-fluid" alt="" />
                            </div>
                            <div className="portfolio-info">
                                <h4>Diademas</h4>
                                <p>Tecnología</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 portfolio-item filter-web">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <img src={ productImages('./software.png') } className="img-fluid" alt="" />
                            </div>
                            <div className="portfolio-info">
                                <h4>Software</h4>
                                <p>Tecnología</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 portfolio-item filter-web">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <img src={ productImages('./discoduro.png') } className="img-fluid" alt="" />
                            </div>
                            <div className="portfolio-info">
                                <h4>Disco Duro</h4>
                                <p>Tecnología</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 portfolio-item filter-web">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <img src={ productImages('./videojuegos.png') } className="img-fluid" alt="" style={{width: 150+'%'}} />
                            </div>
                            <div className="portfolio-info">
                                <h4>Playstation</h4>
                                <p>Tecnología</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 portfolio-item filter-web">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <img src={ productImages('./portatil.png') } className="img-fluid" alt="" />
                            </div>
                            <div className="portfolio-info">
                                <h4>Portatil</h4>
                                <p>Tecnología</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 portfolio-item filter-web">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <img src={ productImages('./impresora.png') } className="img-fluid" alt="" />
                            </div>
                            <div className="portfolio-info">
                                <h4>Impresora</h4>
                                <p>Tecnología</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 portfolio-item filter-web">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <img src={ productImages('./teclado.png') }className="img-fluid" alt="" />
                            </div>
                            <div className="portfolio-info">
                                <h4>Teclado</h4>
                                <p>Tecnología</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 portfolio-item filter-web">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <img src={ productImages('./celular.png') } className="img-fluid" alt="" />
                            </div>
                            <div className="portfolio-info">
                                <h4>Celular</h4>
                                <p>Tecnología</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 portfolio-item filter-web">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <img src={ productImages('./mouse.png') } className="img-fluid" alt="" />
                            </div>
                            <div className="portfolio-info">
                                <h4>Mouse</h4>
                                <p>Tecnología</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 portfolio-item filter-web">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <img src={ productImages('./pc.png') } className="img-fluid" alt="" style={{width: 150+'%'}} />
                            </div>
                            <div className="portfolio-info">
                                <h4>PC's</h4>
                                <p>Tecnología</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 portfolio-item filter-web">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <img src={ productImages('./usb.png') } className="img-fluid" alt="" style={{width: 150+'%'}} />
                            </div>
                            <div className="portfolio-info">
                                <h4>USB</h4>
                                <p>Tecnología</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer value={{ background: '#C4C4C4' }} />
        </div>
    )
}

export default Inicio
