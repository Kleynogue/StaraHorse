import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';
import Campo_Menu from './Campo_Menu';

import '../StyleSheets/Componentes/Lista_Elementos_Boton.css';
import Boton_Direccion_Ampliado from './Boton_Direccion_Ampliado';

function Lista_Elementos_Boton(props) {

    const [elemento, setElemento] = useState("Ejemplar");
    const [clave, setClave] = useState();

    const renderListado=()=> {
      
        return props.elementos.map((Elementos) => {      
                 const { key, Col2} = Elementos 
                 return (
                    <li key={key} onClick={e => {setElemento(Col2),setClave(key)}}>{Col2}</li>           
                 )   
        })
    }

    
    return (

        <form id="FormLista" onSubmit={e => {props.fun(e,elemento,clave)}} >

            <div className="ContenedorLista">
                <ol className='ElementoCarrera'>    
                    {renderListado()}  
                </ol>
            </div>

            <div id="ElementoSeleccionado"><Campo_Menu titulo={props.titulo} valor={elemento}/> </div>

            <div id='BotonElementoSeleccionado'><Boton_Direccion_Ampliado  nombre={props.boton} /></div>

        </form>
    
    );
}

export default Lista_Elementos_Boton;