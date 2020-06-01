import React from "react";
import { withRouter } from 'react-router-dom';
import AuthContext from "../../context/autenticacion/authContext";

const Barra = (props) => {
  // Extraer la información de autenticación
  const authContext = React.useContext(AuthContext);
  const { usuario, usuarioAutenticado, cerrarSesion } = authContext;

  React.useEffect(() => {
    usuarioAutenticado();
    // eslint-disable-next-line
  }, []);

  const closeSesion = () =>{
    cerrarSesion()
    props.history.push('/')
  }

  return (
    <header className="app-header">
      {usuario ? (
        <p className="nombre-usuario">
          Hola <span>{usuario.nombre} </span>{" "}
        </p>
      ) : null}
      <nav className="nav-principal">
        <button
          className="btn btn-blank cerrar-sesion"
          style={{ color: "white" }}
          onClick={() => cerrarSesion()}
        >
          Cerrar Sesión
        </button>
      </nav>
    </header>
  );
};

export default withRouter(Barra);
