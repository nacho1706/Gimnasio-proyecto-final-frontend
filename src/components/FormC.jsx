import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const FormC = ({idPage}) => {
  return (
   <>
 <div className='d-flex justify-content-center mt-5'>
 <Form className='w-25'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      {
        idPage ==="Register" && (
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Repetir Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
        )
      }

      <Form.Group className='d-flex justify-content-center'>
         <Button variant="primary" type="submit" className='btn'>
            {
                idPage ==="Register" ?
                "Registrarse" : "Iniciar Sesion"
            }
          </Button>
      </Form.Group>

    </Form>
 </div>
   </>
  )
}

export default FormC