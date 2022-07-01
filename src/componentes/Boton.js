import React from "react";
import '../estilos/Boton.css';

function Boton(props){

  const esOperador = valor => {
    return isNaN(valor) && (valor!='.' ) && (valor!='=')
  };

    return(
      /*Esta clase contiene javascript*/
      /*Las comillas invertidas sirven para crear Plantillas*/
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
        onClick={() => props.manejarClic(props.children)}>
          {props.children}
        </div>
    );
}

export default Boton;