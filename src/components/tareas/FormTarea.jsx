import React, { useContext, useState, useEffect } from 'react';  

const FormTarea = () => {

   // State del formulario
   const [tarea, guardarTarea] = useState({
    nombre: ''
})

// extraer el nombre del proyecto
const { nombre } = tarea;

// Leer los valores del formulario
const handleChange = e => {
    guardarTarea({
        ...tarea,
        [e.target.name] : e.target.value
    })
}

const onSubmit = e => {
    e.preventDefault();

    // validar
    if(nombre.trim() === '' ) {
      
    }

    // Si es edición o si es nueva tarea
  //  if(tareaseleccionada === null ) {
        // agregar la nueva tarea al state de tareas
        
  //  } else {
        // actualizar tarea existente
       

        // Elimina tareaseleccionada del state
      
    
    // Obtener y filtrar las tareas del proyecto actual
   

    // reiniciar el form
    guardarTarea({
        nombre: ''
    })

}
    return (
       <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={'Agregar Tarea'}
                    />
                </div>
            </form>

           
        </div>
    )
}

export default FormTarea
