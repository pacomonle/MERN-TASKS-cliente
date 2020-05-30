import React from "react";

const Barra = () => {
  return (
    <header className="app-header">
      <p className="nombre-usuario">Hola <span>FRANCISCO</span> </p>

      <nav className="nav-principal">
        <button className="btn btn-blank cerrar-sesion" style={{color: 'white'}}>Cerrar Sesión</button>
      </nav>
    </header>
  );
};

export default Barra;
