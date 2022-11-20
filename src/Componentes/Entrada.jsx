import React, { useState } from "react";

import '../StyleSheets/Componentes/Entrada.css';

function Entrada(props){

    

    


    return(

        <div>

            <div className='PrecioEntrada'> {props.precio}</div>

            <div className="ContenedorEntrada">

                <div className='Menos' onClick={props.restar}>
                    <div></div>
                </div>

                <div className='Numero_Entrada'><div> {props.numero}</div></div>

                <div className='Mas' onClick={props.sumar}>
                    <div id='ancho'></div>
                    <div id='largo'></div>
                </div>

                <div className='Descripcion'>{props.descripcion}</div>

            </div>
        </div>

        

    );
    
}

export default Entrada;