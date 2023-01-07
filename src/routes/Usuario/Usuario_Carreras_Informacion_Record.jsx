import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Tabla from '../../Componentes/Tabla';
import Boton_Direccion_Ampliado from '../../Componentes/Boton_Direccion_Ampliado';

import '../../StyleSheets/Usuario/Usuario_Menu_Principal.css';


function Usuario_Carreras_Informacion_Record(){

        const location = useLocation();
        console.log("El nombre de la carrera es: "+location.state.nombre+" de clave "+location.state.clave);

        //Inicio Direcciones
        const navigate = useNavigate();
        const toUsuarioCarreraResultado=(direccion)=>{
            navigate(direccion,{
                state:{
                nombre:location.state.nombre,
                clave:location.state.clave,
                }});
        }
        //Fin Direcciones

        //Columnas del record del ejemplar
        let COLejem = ["Fecha", "Carr ant", "Peso Ejem", "Dtcia", "PP", "1000m", "300m", "Lleg", "Ks, Jinete, Divid", "Ganador", "Cpos", "Tmpo Gndor", "Tmpo Ejem", "#Ejs"];


        //Estados de los valores del ejemplar
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [ejemplares, setEjemplares] = useState();
        //const [, set] = useState();


        //Se establecen los valores de los estados 
        const EstablecerCarrera = () => {
            if(cargado=="false"){
                
                //Datos de los ejemplares
                const ejem = [
                    {Col1: "00/00/0000", Col2: "Carr_1", Col3: "100", Col4: "1500", Col5: "1", Col6: "1",Col7: "1", Col8: "1", Col9: "51, Jinete_1, Divid_1", Col10: "2", Col11: "Cpos_1", Col12: "00:00", Col13: "00:00", Col14: "11"},
                    {Col1: "00/00/0000", Col2: "Carr_2", Col3: "200", Col4: "2500", Col5: "2", Col6: "2",Col7: "2", Col8: "2", Col9: "52, Jinete_2, Divid_2", Col10: "3", Col11: "Cpos_2", Col12: "00:00", Col13: "00:00", Col14: "12"},
                    {Col1: "00/00/0000", Col2: "Carr_3", Col3: "300", Col4: "3500", Col5: "3", Col6: "3",Col7: "3", Col8: "3", Col9: "53, Jinete_3, Divid_2", Col10: "4", Col11: "Cpos_3", Col12: "00:00", Col13: "00:00", Col14: "13"},

                ]
                setEjemplares(ejem);
                
                setCargado("true");
            }
            
        }
        EstablecerCarrera();




        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='DLista'>
                    <h2 className='subtitulo'>RECORD</h2>
                    <div id='Tejemplares'><Tabla datos={ejemplares} columnas={COLejem} col={14} /></div>

                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
      
}            


export default Usuario_Carreras_Informacion_Record;