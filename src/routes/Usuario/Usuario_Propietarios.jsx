import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Lista_Elementos from '../../Componentes/Lista_Elementos';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Barra_Busqueda from '../../Componentes/Barra_Busqueda';

import '../../StyleSheets/Usuario/Usuario_Menu_Principal.css';


function Usuario_Propietarios(){


        //Estados de los propietarios
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [propietarios, setPropietarios] = useState();
        

        //Se establecen los valores de los estados 
        const EstablecerPropietarios = () => {
            if(cargado=="false"){
                
                let prop = [
                    {key: "1", Col2: "Propietario_1"},
                    {key: "2", Col2: "Propietario_2"},
                    {key: "3", Col2: "Propietario_3"},
                    {key: "4", Col2: "Propietario_4"},
                    {key: "5", Col2: "Propietario_5"},
                    {key: "6", Col2: "Propietario_6"},
                    {key: "7", Col2: "Propietario_7"},
                    {key: "8", Col2: "Propietario_8"},
                    {key: "9", Col2: "Propietario_9"},
                    {key: "10", Col2: "Propietario_10"},
                    {key: "11", Col2: "Propietario_11"},
                    {key: "12", Col2: "Propietario_12"}
                ]
                setPropietarios(prop);

                setCargado("true");
            }
            
        }
        EstablecerPropietarios();

        //Se actualizan los resultados al hacer una busqueda
        const actualizarPropietarios = (e,busqueda) => {
            e.preventDefault();
            console.log("Busqueda: "+busqueda);
            //Se realiza la busqueda

            if(1==1){ //De haber resultados se arman y se actualiza lo que se muestra
                let prop2 = [
                    {key: "13", Col2: "Propietario_13"},
                    {key: "14", Col2: "Propietario_14"},
                    {key: "15", Col2: "Propietario_15"},
                    {key: "16", Col2: "Propietario_16"},
                    {key: "17", Col2: "Propietario_17"},
                    {key: "18", Col2: "Propietario_18"},
                    {key: "19", Col2: "Propietario_19"},
                    {key: "20", Col2: "Propietario_20"},
                    {key: "21", Col2: "Propietario_21"},
                    {key: "22", Col2: "Propietario_22"},
                    {key: "23", Col2: "Propietario_23"},
                    {key: "24", Col2: "Propietario_24"}
                ]
                setPropietarios(prop2);
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
                    <h2 className='subtitulo'>PROPIETARIOS</h2>
                    <Barra_Busqueda fun={actualizarPropietarios}/>
                    <Lista_Elementos elementos={propietarios} dir="/usuario_propietarios_info"/>
                </div>

                <div>
                    <Footer/>
                </div>

            </div>
        );
     
}

export default Usuario_Propietarios;