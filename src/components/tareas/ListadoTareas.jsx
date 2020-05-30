import React, { Fragment, useContext} from 'react';
import Tarea from './Tarea';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const ListadoTareas = () => {

    const tareasProyecto = [
        {_id:1, nombre: 'tarea1', estado:true},
        {_id:2, nombre: 'tarea2', estado:false},
        {_id:3, nombre: 'tarea3', estado:true}
    ]


    return (
        <Fragment>
            <h2>Proyecto: proyecto1 </h2>

            <ul className="listado-tareas">
            {tareasProyecto.length === 0 
                ? (<li className="tarea"><p>No hay tareas</p></li>) 
                : 
            <TransitionGroup>
            {tareasProyecto.map(tarea => (
                <CSSTransition
                    key={tarea._id}
                    timeout={200}
                    classNames="tarea"
                >
               
                <Tarea 
                        tarea={tarea}
                    />
                
                
                 
                </CSSTransition>
            ))}
            </TransitionGroup>
        }
            </ul>

            <button     
                type="button"
                className="btn btn-eliminar"
               
            >Eliminar Proyecto &times;</button>
        </Fragment>
    )
}

export default ListadoTareas
