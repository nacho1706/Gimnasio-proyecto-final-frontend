// src/components/NotFound.js
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Página No Encontrada</h1>
      <p style={styles.text}>
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <Link to="/" style={{ textDecoration: "none" }}>
        <button style={styles.button}>Volver al Inicio</button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    backgroundColor: "black",
    height: "100vh",
    color: "white",
  },
  heading: {
    fontSize: "48px",
    marginBottom: "20px",
  },
  text: {
    fontSize: "24px",
    marginBottom: "30px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default NotFound;
