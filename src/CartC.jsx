import "../css/cardC.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

const CartC = ({ImgCard, tituloCard, PrecioCard}) => {
  return (
    <Container className='card-style'>
  <Card className='m-2 bg-transparent card'>
    <Card.Img  className="img-card" src={ImgCard} />
    <Card.Body >
      <Card.Title className='d-flex justify-content-center text-light'>{tituloCard}</Card.Title>
      <Card.Text className='m-1'>{PrecioCard}</Card.Text>
    </Card.Body>
    <Card.Body className='d-flex justify-content-center'>
      <Button className='btn-card'>Ver</Button>
    </Card.Body>
  </Card>
    </Container>
  );
};

export default CartC;