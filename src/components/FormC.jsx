import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const FormC = ({idPage}) => {
    const [form, setForm]= useState({})
    const [error, setError] =useState ({
        allImput: ``,
        userError: ``,
        passError: ``,
        rpassError: ``,
    });

    const handleChange =(ev)=>{
        const {name, value} = ev.target;
        setForm({...form, [name]: value});
    }

    const handleClick =(ev)=>{
        ev.preventDefault();
        const {userName, pass, rpass} = form;
        let newError = {}

        if(!userName && !pass && (idPage === 'Register' && !rpass)){
            newError ={...error, allImput: `errorAllImput`}
            setError(newError);
        }else{
            setError({
                allImput: ``,
                userError: ``,
                passError: ``,
                rpassError: ``,
            })
            if(!userName){
                newError = {...error, userError: "ErrorUser"}
            }
            if(!pass){
                newError = {...error, passError: "ErrorPass"}
            }
            if(!rpass){
                newError = {...error, rpassError: "ErrorRpass"}
            }

            if(Object.keys(newError).length){
                setError(newError);
            }

            if(userName && pass && rpass){
                alert(`formulario enviado`)
            }
        }
    }
  return (
   <>
 <div className='d-flex justify-content-center mt-5'>
 <Form className='w-25'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Usuario</Form.Label>
        <Form.Control className={error.allImput === `errorAllImput` 
        || error.userError === "ErrorUser" ? `form-control is-invalid` : `form-control`} 
        type="email" placeholder="Enter email" onChange={handleChange} name='userName'/>
        {error.userError === "ErrorUser" || (error.allImput === "errorAllImput" &&(
            <p className='text-danger'>campo Usuario vacio</p>)
        )}

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control className={error.allImput === `errorAllImput`
         || error.passError === "ErrorPass" ? `form-control is-invalid` : `form-control`}  
        type="password" placeholder="Password"   name='pass' onChange={handleChange} />
        {error.passError === "ErrorPass" &&(
            <p className='text-danger'>campo Contraseña vacio</p>
        )}
      </Form.Group>

      {
        idPage ==="Register" && (
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Repetir Contraseña</Form.Label>
              <Form.Control className={error.allImput === `errorAllImput` 
              || error.rpassError === `ErrorRpass` ? `form-control is-invalid` : `form-control`}  
              type="password" placeholder="Password" name='rpass'  onChange={handleChange}/>
              {error.rpassError === "ErrorRpass" &&(
            <p className='text-danger'>campo Repetir Contaseña vacio</p>
        )}
            </Form.Group>
        )
      }

      <Form.Group className='d-flex justify-content-center'>
         <Button variant="primary" type="submit" className='btn' onClick={handleClick}>
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