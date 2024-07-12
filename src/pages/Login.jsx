import React from 'react'
import ImgRegister from "../imagen/login-register.jpg"
import ImgMovile from "../imagen/file.jpg"
import "../css/register.css"
import FormL from '../components/FormL';
import NavbarP from '../components/NavbarP';
import FototerC from '../components/FototerC';

const Login = () => {
        document.title="Iniciar Sesion"
  return (

    <>
    <NavbarP />
    <div className='register-container'>
       <div className='register-content d-flex justify-content-center align-align-items-center'>
          <FormL />
       </div>
       <img src={ImgMovile} alt="" className='register-imagen-movile' />
      <img src={ImgRegister} alt="" className='register-image' />
    </div>
    <FototerC />
    </>
  )
}

export default Login;