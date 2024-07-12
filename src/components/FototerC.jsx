import React from 'react'
import { Row } from 'react-bootstrap'
import { Col, Container } from 'react-bootstrap/esm'
import logo from "../imagen/icono.png"
import { Link } from 'react-router-dom/dist'

const FototerC = () => {
  return (
    <>
    <Container fluid className='pt-1 mt-auto bg-transparent '>
        <Row>
            <Col md={12} lg={3} className='text-center'>
            <img src={logo} alt="" width={100}/>
            </Col>
            <Col className="d-none d-md-block text-white">
             <h4 className='text-white'>Opciones</h4>
             <Link className="text-decoration-none link-dark text-white" to="/"> 
             <p>Inicio</p>
             </Link>
             <Link
              className="text-decoration-none link-dark text-white"
              to="/login"
            >
              <p>Login</p>
            </Link>
            <Link
              className="text-decoration-none link-dark text-white"
              to="/nosotros"
            >
              <p>Nosotros</p>
            </Link>
            <Link
              className="text-decoration-none link-dark text-white"
              to="/contacto"
            >
              <p>Contacto</p>
            </Link>
            </Col>
            <Col xs={12} md={4} lg={3} >
            <h4 className="text-white">Información</h4>
            <Link className="text-decoration-none link-dark text-white" to="*">
              <p>Políticas de privacidad</p>
            </Link>
            <Link className="text-decoration-none link-dark text-white" to="*">
              <p>Legal</p>
            </Link>
            <Link className="text-decoration-none link-dark text-white" to="*">
              <p>Promociones</p>
            </Link>
            <Link className="text-decoration-none link-dark text-white" to="*">
              <p>Horarios de atención</p>
            </Link>
            </Col>
            <Col xs={12} md={4} lg={3}>
            <h4 className="text-white">Contacto</h4>
            <div>
                <div>
                    <p className="text-white link-dark">
                         <i className="bi bi-whatsapp">345 1234568</i>
                    </p>
                    <p className="text-white link-dark">
                         <i className="bi bi-instagram"></i> Facebook
                    </p>
                    <p className="text-white link-dark">
                         <i className="bi bi-facebook"></i> evolutionFitness@gmail.com
                    </p>
                     <p className="text-white link-dark">
                         <i className="bi bi-geo-alt-fill"></i> Gral. Paz 576
                    </p>
                </div>
            </div>
            </Col>
        </Row>
    </Container>
    </>
)
}

export default FototerC