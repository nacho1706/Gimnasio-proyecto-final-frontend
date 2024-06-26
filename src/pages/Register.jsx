import React from 'react'
import FormC from '../components/FormC'
import ImgRegister from "../imagen/login-register.jpg"
import ImgMovile from "../imagen/file.jpg"
import "../css/register.css"

const Register = () => {
        document.title ="Registro"
  return (
    <>
    <div className='register-container'>
      <div className='register-content d-flex justify-content-center align-align-items-center'>
      <FormC idPage={"Register"}/>
      </div>
      <img src={ImgMovile} alt="" className='register-imagen-movile' />
      <img src={ImgRegister} alt="" className='register-image' />
    </div>

    </>
  )
}

export default Register