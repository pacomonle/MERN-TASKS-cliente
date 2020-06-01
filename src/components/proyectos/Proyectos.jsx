import React from "react";
import Sidebar from "../layout/Sidebar";
import Barra from "../layout/Barra";
import FormTarea from "../tareas/FormTarea";
import ListadoTareas from "../tareas/ListadoTareas";

import AuthContext from '../../context/autenticacion/authContext';

const Proyectos = () => {


 // Extraer la información de autenticación
 const authContext = React.useContext(AuthContext);
 const { usuarioAutenticado } = authContext;

 React.useEffect(() => {
     usuarioAutenticado();
     // eslint-disable-next-line
 }, [])

  return (
    <div className="contenedor-app">
      <aside>
        <Sidebar></Sidebar>
      </aside>

      <div className="seccion-principal">
        <Barra />
        <main>
          <FormTarea />
          <div className="contenedor-tareas"></div>
          <ListadoTareas />
        </main>
      </div>
    </div>
  );
};

export default Proyectos;
