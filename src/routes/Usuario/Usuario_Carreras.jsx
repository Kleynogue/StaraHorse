import React from 'react';
import { useNavigate,useLocation } from 'react-router';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Boton_Direccion from '../../Componentes/Boton_Direccion';
import Lista_Elementos from '../../Componentes/Lista_Elementos';
import Nav_Usuario from '../../Componentes/Nav_Usuario';

import '../../StyleSheets/Usuario/Usuario_Menu_Principal.css';


function Usuario_Carreras(){


        const elementos = ["Carrera_Numero_1", "Carrera_Numero_2", "Carrera_Numero_3", "Carrera_Numero_4"
        ,"Carrera_Numero_5", "Carrera_Numero_6", "Carrera_Numero_7", "Carrera_Numero_8"
        ,"Carrera_Numero_9", "Carrera_Numero_10", "Carrera_Numero_11" , "Carrera_Numero_12"];

        //Inicio Direcciones
        const navigate = useNavigate();
        const toUsuarioApuestas=(direccion)=>{
            navigate(direccion,{
                state:{
                //Variables
                }});
        }
        //Fin Direcciones

        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='DLista'>
                    <h2 className='subtitulo'>CARRERAS DEL DÍA</h2>
                    <Lista_Elementos elementos={elementos} dir="/usuario_carreras_info" />
                    <div className='DivBotonApuesta'><Boton_Direccion fun={()=>toUsuarioApuestas('/usuario_apuestas')} nombre="Apuestas" /></div>
                    <div><Boton_Direccion fun={()=>toUsuarioApuestas('/usuario_apuestas_historial')} nombre="Historial" /></div>
                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
      
}            


export default Usuario_Carreras;