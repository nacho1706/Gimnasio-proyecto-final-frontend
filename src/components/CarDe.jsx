import React from 'react'
import "../css/cardC.css"
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom/dist';
const CarDe = ({ImgCard, tituloCard, PrecioCard}) => {
  return (
<>
<Container className='card-style'>
  <Card className='m-2 bg-transparent card'>
    <Card.Img  className="img-card" src={ImgCard} />
    <Card.Body >
      <Card.Title className='d-flex justify-content-center text-light'>{tituloCard}</Card.Title>
      <Card.Text className='m-1'>{PrecioCard}</Card.Text>
    </Card.Body>
    <Card.Body className='d-flex justify-content-center'>
    <Link to='/Detalles' className=" btn bgVerde border-0 ">Ver</Link>
    </Card.Body>
  </Card>
    </Container>
    </>
)
}

export default CarDe