import React from 'react'
import "../css/cartaDetalles.css"
import CartaDetalles from '../components/CartaDetalles'
import ImgDetalle from "../imagen/usuario1.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Col, Container, Row } from 'react-bootstrap';
import { detalles } from '../Helperss/arrayDetalle';
import NavbarP from '../components/NavbarP';
import FototerC from '../components/FototerC';

const Detalles = () => {
  return (
    <>
    <NavbarP />
    <Container className='d-flex justify-content-center align-items-center '>
        <Container className='d-flex justify-content-center align-items-center img'>
        <img className=' img' src={ImgDetalle} alt="" width={1100}/>
        </Container>
    </Container>
    <Container >
        <Container className='d-flex justify-content-center align-items-center'>
        <Container className='d-flex justify-content-center align-items-center mt-3'>
            <Row lassName='d-flex justify-content-center'> 
                {detalles.map((detalle) =>(
                  <Col sm={12} md={6} lg={4}>
                    <CartaDetalles imagen={detalle.imagen} titulo={detalle.titulo} descripcion={detalle.des} />
                  </Col>
                ))}
            </Row>
        </Container>


        </Container>
  
    </Container>
    <FototerC />
    </>
  )
}

export default Detalles