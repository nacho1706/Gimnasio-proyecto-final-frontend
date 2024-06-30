import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../css/Formulario.css"
const FormL = ({ idPage }) => {
    const [form, setForm] = useState({
        userName: '',
        pass: ''
    });

    const [error, setError] = useState({
        allImput: '',
        userError: '',
        passError: '',
    });

    const handleChange = (ev) => {
        const { name, value } = ev.target;
        setForm({ ...form, [name]: value });
    }

    const handleClick = (ev) => {
        ev.preventDefault();
        const { userName, pass } = form;
        let newError = {};

        if (!userName || !pass) {
            newError = {
                ...error,
                allImput: 'errorAllImput',
                userError: !userName ? 'ErrorUser' : '',
                passError: !pass ? 'ErrorPass' : '',
            };
            setError(newError);
        } else {
            setError({
                allImput: '',
                userError: '',
                passError: '',
            });

            alert('formulario enviado');
        }
    }

    return (
        <div className='form-conteiner d-flex justify-content-center align-items-center'>
            <Form className='m-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                        className={error.allImput === 'errorAllImput' || error.userError === 'ErrorUser' ? 'form-control is-invalid' : 'form-control'}
                        type="email"
                        placeholder="Enter email"
                        onChange={handleChange}
                        name='userName'
                    />
                    {error.userError === 'ErrorUser' || (error.allImput === 'errorAllImput' && (
                        <p className='text-danger'>Campo Usuario vacío</p>
                    ))}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        className={error.allImput === 'errorAllImput' || error.passError === 'ErrorPass' ? 'form-control is-invalid' : 'form-control'}
                        type="password"
                        placeholder="Password"
                        name='pass'
                        onChange={handleChange}
                    />
                    {error.passError === 'ErrorPass' && (
                        <p className='text-danger'>Campo Contraseña vacío</p>
                    )}
                </Form.Group>

                <Form.Group className='d-flex justify-content-center'>
                    <Button variant="primary" type="submit" className='btn' onClick={handleClick}>
                        {idPage === 'Register' ? 'Registrarse' : 'Iniciar Sesión'}
                    </Button>
                </Form.Group>
            </Form>
        </div>
    );
}

export default FormL;