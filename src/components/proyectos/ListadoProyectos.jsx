import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ListadoProyectos = () => {
  const proyectos = [
    { nombre: "proyecto1", _id: 1 },
    { nombre: "proyecto2", _id: 2 },
    { nombre: "proyecto3", _id: 3 },
  ];

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {proyectos.map((proyecto) => (
          <CSSTransition key={proyecto._id} timeout={200} classNames="proyecto">
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;
