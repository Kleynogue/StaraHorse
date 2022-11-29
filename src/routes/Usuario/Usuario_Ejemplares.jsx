import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Lista_Elementos from '../../Componentes/Lista_Elementos';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Barra_Busqueda from '../../Componentes/Barra_Busqueda';

import '../../StyleSheets/Usuario/Usuario_Menu_Principal.css';


function Usuario_Ejemplares(){

        

        let ejem = [
            {key: "1", Col2: "Ejemplar_1"},
            {key: "2", Col2: "Ejemplar_2"},
            {key: "3", Col2: "Ejemplar_3"},
            {key: "4", Col2: "Ejemplar_4"},
            {key: "5", Col2: "Ejemplar_5"},
            {key: "6", Col2: "Ejemplar_6"},
            {key: "7", Col2: "Ejemplar_7"},
            {key: "8", Col2: "Ejemplar_8"},
            {key: "9", Col2: "Ejemplar_9"},
            {key: "10", Col2: "Ejemplar_10"},
            {key: "11", Col2: "Ejemplar_11"},
            {key: "12", Col2: "Ejemplar_12"}
        ]

        const [ejemplares, setEjemplares] = useState(ejem);
        
        const actualizarEjemplares = (e,busqueda) => {
            e.preventDefault();
            console.log("Busqueda: "+busqueda);
            //Se realiza la busqueda

            if(1==1){ //De haber resultados se arman y se actualiza lo que se muestra
                let ejem2 = [
                    {key: "13", Col2: "Ejemplar_13"},
                    {key: "14", Col2: "Ejemplar_14"},
                    {key: "15", Col2: "Ejemplar_15"},
                    {key: "16", Col2: "Ejemplar_16"},
                    {key: "17", Col2: "Ejemplar_17"},
                    {key: "18", Col2: "Ejemplar_18"},
                    {key: "19", Col2: "Ejemplar_19"},
                    {key: "20", Col2: "Ejemplar_20"},
                    {key: "21", Col2: "Ejemplar_21"},
                    {key: "22", Col2: "Ejemplar_22"},
                    {key: "23", Col2: "Ejemplar_23"},
                    {key: "24", Col2: "Ejemplar_24"}
                ]
                setEjemplares(ejem2);
            }
            else{   //La busqueda no encontro resultados
                alert('No se encontraron resultados'); 
            }
        }

        return (
            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='DLista'>
                    <h2 className='subtitulo'>EJEMPLARES</h2>
                    <Barra_Busqueda fun={actualizarEjemplares}/>
                    <Lista_Elementos elementos={ejemplares} dir="/usuario_ejemplares_info"/>
                </div>

                <div>
                    <Footer/>
                </div>

            </div>
        );
      
}

export default Usuario_Ejemplares;