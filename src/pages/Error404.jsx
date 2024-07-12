import React from 'react'
import NavbarP from '../components/NavbarP'
import FototerC from '../components/FototerC'
import { Link } from 'react-router-dom/dist'
import { Container } from 'react-bootstrap/esm'

export const Error404 = () => {
  return (
    <>
    <NavbarP />
    <Container className='text-center py-2 '>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKpfjqV1Xn-
            gvWbGg03Mto7cqc49f2rG-TcP025VjiPLdpvMJtqRCouTzEsbfqIccAi0&usqp=CAU" alt="" className='imgError404 mx-auto d-block' />
            <Container className='d-flex justify-content-center align-items-center m-3'>
            <Link to='/HomeUser' className=" btn bgVerde border-0 ">Volver al inicio</Link>
            </Container>
        </Container>
    <FototerC />
    </>
  )
}
