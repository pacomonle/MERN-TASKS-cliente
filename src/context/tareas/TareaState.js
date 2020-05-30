import React, { useReducer } from 'react';
import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';

import {uuid} from 'uuidv4'

import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';

// import clienteAxios from '../../config/axios';

const TareaState = props => {

 

    const initialState = {
        tareas: [
            {id:1, proyectoId:1, nombre: 'tarea1', estado:true},
            {id:2, proyectoId:2, nombre: 'tarea2', estado:false},
            {id:3, proyectoId:3, nombre: 'tarea3', estado:true}
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null
    }

      // Crear dispatch y state
      const [state, dispatch] = useReducer(tareaReducer, initialState);

  // Obtener las tareas de un proyecto
  const obtenerTareas = proyectoId => {

    console.log(proyectoId);

    dispatch({
        type: TAREAS_PROYECTO,
        payload: proyectoId
    })

}

 // Agregar una tarea al proyecto seleccionado
 const agregarTarea =  tarea => {
    console.log(tarea);
        tarea.id = uuid()
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
   
}

// Valida y muestra un error en caso de que sea necesario
const validarTarea = () => {
    dispatch({
        type: VALIDAR_TAREA
    })
}

 // Eliminar tarea por id
 const eliminarTarea = (id) => {
   
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
   
}

 // Edita o modifica una tarea
 const actualizarTarea = tarea => {
    
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
   
}

// Extrae una tarea para edición
const guardarTareaActual = tarea => {
    dispatch({
        type: TAREA_ACTUAL,
        payload: tarea
    })
}


 // Elimina la tareaseleccionada
 const limpiarTarea = () => {
    dispatch({
        type: LIMPIAR_TAREA
    })
}

    return (
        <tareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto : state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </tareaContext.Provider>
    )
}

export default TareaState;