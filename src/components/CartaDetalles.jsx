import React from 'react'
import "../css/cartaDetalles.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CartaDetalles = ({imagen, titulo, descripcion }) => {
  return (
    <>
    <div className='cartaDetalles'>
    <Card>
      <Card.Header>
        <img className="imgC" src={imagen} alt="" width={100} />
      </Card.Header>
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{descripcion}
        </Card.Text>
        <Button variant="primary">Unirme</Button>
      </Card.Body>
    </Card>
    </div>
    </>
)
}

export default CartaDetalles;