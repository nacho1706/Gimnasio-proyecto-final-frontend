import React from 'react'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import 'boxicons'
import "../css/detalles.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalC from './ModalC';


const TablaC = ({hora, cupo1, cupo2, cupo3, cupo4, cupo5}) => {
  return (
   <>
   <Container className='d-flex justify-content-center align-items-center mt-5 bg-primary'>
    <Container className='d-flex flex-column mt-3'>
    <div className="d-flex align-items-center">
            <box-icon name='calendar'></box-icon>
            <p className="text-dark ml-2 mb-0 ">TURNOS</p>
        </div>
        <ModalC />

    </Container>  
   </Container>
   <Container className='d-flex justify-content-center align-items-center bg-primary'>
    <Table striped bordered hover className='m-4'>
      <thead>
        <tr>
          <th>HS</th>
          <th>Lunes</th>
          <th>Martes</th>
          <th>Miercoles</th>
          <th>Jueves</th>
          <th>Viernes</th>
        </tr>
        <tr>
          <td>{hora}</td>
          <td>{cupo1}</td>
          <td>{cupo2}</td>
          <td>{cupo3}</td>
          <td>{cupo4}</td>
          <td>{cupo5}</td>
        </tr>
        <tr>
          <td>{hora}</td>
          <td>{cupo1}</td>
          <td>{cupo2}</td>
          <td>{cupo3}</td>
          <td>{cupo4}</td>
          <td>{cupo5}</td>
        </tr>
        <tr>
          <td>{hora}</td>
          <td>{cupo1}</td>
          <td>{cupo2}</td>
          <td>{cupo3}</td>
          <td>{cupo4}</td>
          <td>{cupo5}</td>
        </tr>
        <tr>
          <td>{hora}</td>
          <td>{cupo1}</td>
          <td>{cupo2}</td>
          <td>{cupo3}</td>
          <td>{cupo4}</td>
          <td>{cupo5}</td>
        </tr>
        <tr>
          <td>{hora}</td>
          <td>{cupo1}</td>
          <td>{cupo2}</td>
          <td>{cupo3}</td>
          <td>{cupo4}</td>
          <td>{cupo5}</td>
        </tr>
        <tr>
          <td>{hora}</td>
          <td>{cupo1}</td>
          <td>{cupo2}</td>
          <td>{cupo3}</td>
          <td>{cupo4}</td>
          <td>{cupo5}</td>
        </tr>
        <tr>
          <td>{hora}</td>
          <td>{cupo1}</td>
          <td>{cupo2}</td>
          <td>{cupo3}</td>
          <td>{cupo4}</td>
          <td>{cupo5}</td>
        </tr>
        <tr>
          <td>{hora}</td>
          <td>{cupo1}</td>
          <td>{cupo2}</td>
          <td>{cupo3}</td>
          <td>{cupo4}</td>
          <td>{cupo5}</td>
        </tr>
      </thead>
    </Table>
    </Container>
   </>
  )
}

export default TablaC;