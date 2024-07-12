import React from 'react'
import TablaC from '../components/TablaC';
import 'boxicons'
import { semanaUno } from '../Helperss/arrayTurnos';
import { Container } from 'react-bootstrap';
import "../css/detalles.css"
import NavbarP from '../components/NavbarP';
import FototerC from '../components/FototerC';
const Turnos = () => {
  return (
    <>
    <NavbarP />
    <Container> 

       {semanaUno.map((sUno) => (
        <TablaC hora={sUno.HS} cupo1={sUno.lunes} cupo2={sUno.martes} cupo3={sUno.miercoles} 
         cupo4={sUno.jueves} cupo5={sUno.viernes}/> ))} 
    </Container>
    <FototerC />
    </>
  )
}

export default Turnos;