import React from 'react'
import "../css/homePage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Col, Container, Row } from 'react-bootstrap';
import imgPrincipal from "../imagen/usuario1.png"
import Button from 'react-bootstrap/Button';
import { planes, productos, profesores } from '../helpers/arrayHomeUser';
import Cart from '../components/Cart';
import Img from '../components/Img';

const HomeUser = () => {
  return (
    <>
    <NavbarC />
    <Container className="d-flex justify-content-center align-items-center mt-2">
    <Img urlImagen={imgPrincipal} widthImagen={10000}/>
    </Container>
    <Container className='Conteiner mt-4' >
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
        <Button className='m-1' variant="outline-warning">Productos</Button>
        </Col>
        <Col lg={10}>
       <Row className=''>
       {productos.map((producto) => (
          <Col sm={12} md={6} lg={4}>
         <Cart ImgCard={producto.imagen} tituloCard={producto.titulo} desCard={producto.precio}/> 
          </Col>
        ))}
       </Row>
        </Col>
      </Row>
    </Container>
    <Container  className='d-flex justify-content-center text-light'>
      <Row>
       <Row >
        <h2 className='mt-4'>Planes Mensuales</h2>
       {planes.map((plan) => (
          <Col sm={12} md={6} lg={4}>
         <Cart className="cardPlan" ImgCard={plan.imagenPlanes} tituloCard={plan.tipo} desCard={plan.descripcion}/> 
          </Col>
        ))}
       </Row>
      </Row>
    </Container>
    <Container  className='d-flex justify-content-center text-light'>
      <Row>
       <Row >
        <h2 className='mt-4'>Nuestros Profesores</h2>
       {profesores.map((prof) => (
          <Col sm={12} md={6} lg={4}>
         <Cart className="cardPlan" ImgCard={prof.fotoDePerfil} tituloCard={prof.nombre}/> 
          </Col>
        ))}
       </Row>
      </Row>
    </Container>
   </> 
  )
}

export default HomeUser;