import React, { useContext } from "react";

const Tarea = ({ tarea }) => {
  const cambiarEstado = (tarea) => {
    if (tarea.estado) {
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }
    // actualizarTarea(tarea);
  };

 // Función que se ejecuta cuando el usuario presiona el btn de eliminar tarea
 const tareaEliminar = id => {
  //  eliminarTarea(id, proyectoActual._id);
  //  obtenerTareas(proyectoActual.id)
}



  // Agrega una tarea actual cuando el usuario desea editarla
  const seleccionarTarea = (tarea) => {
   // guardarTareaActual(tarea);
  };

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre} </p>

      <div className="estado">
        {tarea.estado ? (
          <button
            type="button"
            className="completo"
            onClick={() => cambiarEstado(tarea)}
          >
            Completo
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => cambiarEstado(tarea)}
          >
            Incompleto
          </button>
        )}
      </div>

      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => seleccionarTarea(tarea) }
        >
          Editar
        </button>

        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => tareaEliminar(tarea._id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
