import React from 'react'
import "../css/cartaDetalles.css"
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom/dist';

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
    <Link to='/Error404' className=" btn bgVerde border-0 ">Unirme</Link>
      </Card.Body>
    </Card>
    </div>
    </>
)
}

export default CartaDetalles;