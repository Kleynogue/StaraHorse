import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Lista_Elementos from '../../Componentes/Lista_Elementos';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Barra_Busqueda from '../../Componentes/Barra_Busqueda';

import '../../StyleSheets/Usuario/Usuario_Menu_Principal.css';


function Usuario_Entrenadores(){

        //Estados de los entrenadores
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [entrenadores, setEntrenadores] = useState();

        //Se establecen los valores de los estados 
        const EstablecerEntrenadores = () => {
            if(cargado=="false"){
                
                let entr = [
                    {key: "1", Col2: "Entrenador_1"},
                    {key: "2", Col2: "Entrenador_2"},
                    {key: "3", Col2: "Entrenador_3"},
                    {key: "4", Col2: "Entrenador_4"},
                    {key: "5", Col2: "Entrenador_5"},
                    {key: "6", Col2: "Entrenador_6"},
                    {key: "7", Col2: "Entrenador_7"},
                    {key: "8", Col2: "Entrenador_8"},
                    {key: "9", Col2: "Entrenador_9"},
                    {key: "10", Col2: "Entrenador_10"},
                    {key: "11", Col2: "Entrenador_11"},
                    {key: "12", Col2: "Entrenador_12"}
                ]
                setEntrenadores(entr);

                setCargado("true");
            }
            
        }
        EstablecerEntrenadores();

        //Se actualizan los resultados al hacer una busqueda
        const actualizarEntrenadores = (e,busqueda) => {
            e.preventDefault();
            console.log("Busqueda: "+busqueda);
            //Se realiza la busqueda

            if(1==1){ //De haber resultados se arman y se actualiza lo que se muestra
                let entr2 = [
                    {key: "13", Col2: "Entrenador_13"},
                    {key: "14", Col2: "Entrenador_14"},
                    {key: "15", Col2: "Entrenador_15"},
                    {key: "16", Col2: "Entrenador_16"},
                    {key: "17", Col2: "Entrenador_17"},
                    {key: "18", Col2: "Entrenador_18"},
                    {key: "19", Col2: "Entrenador_19"},
                    {key: "20", Col2: "Entrenador_20"},
                    {key: "21", Col2: "Entrenador_21"},
                    {key: "22", Col2: "Entrenador_22"},
                    {key: "23", Col2: "Entrenador_23"},
                    {key: "24", Col2: "Entrenador_24"}
                ]
                setEntrenadores(entr2);
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
                    <h2 className='subtitulo'>ENTRENADORES</h2>
                    <Barra_Busqueda fun={actualizarEntrenadores}/>
                    <Lista_Elementos elementos={entrenadores} dir="/usuario_entrenadores_info"/>
                </div>

                <div>
                    <Footer/>
                </div>

            </div>
        );
      
}

export default Usuario_Entrenadores;