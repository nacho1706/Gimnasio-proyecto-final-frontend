import React, { useState } from 'react'
import { Container, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar el CSS de Bootstrap
import "../css/detalles.css"
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const ModalC = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
     <Container>
                <Button variant="outline-warning" className="mt-3 align-self-start classBTN" onClick={handleShow}>
                    Abrir Modal
                </Button>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ejemplo de Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
       
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
        </Form.Group>
      </Row>
      <Row className="mb-3">
         <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Lunes"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Hora</Form.Label>
          <Form.Control type="text" placeholder="07:00" required  defaultValue="07:00" />
          <Form.Control.Feedback type="invalid">
           Por favor, ingrese una hora.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit">Enviar turno</Button>
    </Form>
              </Modal.Body>
            </Modal>
        </Container>
</>
  )
}

export default ModalC