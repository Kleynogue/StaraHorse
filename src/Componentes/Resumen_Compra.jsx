import React, { useState } from "react";

import '../StyleSheets/Componentes/Resumen_Compra.css';

function Resumen_Compra(props){

    return(

        <div>

            <div className='PrecioEntrada'> {props.precio}</div>

            <div className="ContenedorResumen">

                <div className='NumeroEntradasResumen'><div>00</div></div>
                <div className='DescripcionEntradaResumen'>{props.descripcion}</div>
                <div className="TotalEntrada">00 Bs.</div>

            </div>
        </div>

        

    );
    
}

export default Resumen_Compra;