import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../pages/style/Contact.css";

// Definimos el esquema de validación con Yup
const schema = yup.object().shape({
  email: yup
    .string()
    .email("El correo electrónico no es válido")
    .required("El correo electrónico es requerido"),
  message: yup
    .string()
    .required("El mensaje es requerido")
    .min(10, "El mensaje debe tener al menos 10 caracteres"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errasdors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviándolo a una API
  };

  return (
    <div className="contact-form-container mt-5 mb-5">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input id="email" type="email" {...register("email")} />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" {...register("message")} />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
