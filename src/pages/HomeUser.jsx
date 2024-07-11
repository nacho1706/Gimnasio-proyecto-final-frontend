import React from 'react'
import "../css/homePage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Col, Container, Row } from 'react-bootstrap';
import imgPrincipal from "../imagen/usuario1.png"
import Button from 'react-bootstrap/Button';
import Cart from '../components/Cart';
import Img from '../components/Img';
import { planes, productos, profesores } from '../Helperss/arrayHomeUser';
import NavbarP from '../components/NavbarP';
import FototerC from '../components/FototerC';

const HomeUser = () => {
  document.title = "Pagina Principal"

  return (
    <>
    <NavbarP />
    <Container className="d-flex justify-content-center align-items-center mt-2">
    <Container className='img'>
    <Img urlImagen={imgPrincipal} widthImagen={1100}/>
    </Container>
    </Container>
    <Container className='Conteiner mt-4' >
      <Row className="justify-content-center">
        <Col className="d-flex justify-content-center align-items-center ">
        <Button className='m-1' variant="outline-warning">Productos</Button>
        </Col>
        <Col lg={10}>
       <Row className="justify-content-center">
        {productos.map((producto) =>(
          <Col sm={12} md={6} lg={4}>
          <Cart ImgCard={producto.imagen} tituloCard={producto.titulo} desCard={producto.precio}/> 
           </Col>
        ))}
       </Row>
        </Col>
      </Row>
    </Container>
    <Container  className=' mt-4'>
      <Row className='justify-content-center text-light'>
        <h2>Planes Mensales</h2>
      </Row>
        <Row className='justify-content-center'> 
       {planes.map((plan) => (
          <Col sm={12} md={6} lg={4}>
         <Cart className="cardPlan" ImgCard={plan.imagenPlanes} tituloCard={plan.tipo} desCard={plan.descripcion}/> 
          </Col>
        ))}
       </Row>
    </Container>
    <Container  className='d-flex justify-content-center text-light'>
      <Row className='d-flex justify-content-center text-light m-1'>
        <h2 className='mt-4'>Nuestros Profesores</h2>
       {profesores.map((prof) => (
          <Col sm={12} md={6} lg={4}>
         <Cart className="cardPlan" ImgCard={prof.fotoDePerfil} tituloCard={prof.nombre}/> 
          </Col>
        ))}
       </Row>
    </Container>
    <FototerC />
   </> 
  )
}

export default HomeUser;