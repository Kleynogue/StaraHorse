import React from 'react';
import { useNavigate,useLocation } from 'react-router';
 
import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Campo_Menu from '../../Componentes/Campo_Menu';
import Boton_Direccion from '../../Componentes/Boton_Direccion';

import '../../StyleSheets/Usuario/Usuario_Menu_General.css';


function Usuario_Jinetes_Info(){

        const location = useLocation();
        console.log("El nombre del jinete es: "+location.state.Elemento);    

        const navigate = useNavigate();
        const toJinetesEstadisticas=(direccion)=>{
            navigate(direccion,{
                state:{
                //Variables
                }});
        }


        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='MenuInfo'>
                    <h2 className='subtitulo'>JINETES</h2>
                    <Campo_Menu titulo="Nombre"/>
                    <Campo_Menu titulo="Cedula"/>
                    <Campo_Menu titulo="Fecha de Nacimiento"/>
                    <Campo_Menu titulo="Peso Promedio"/>
                    <Campo_Menu titulo="Altura"/>  
                    <div className='BotonJinete' ><Boton_Direccion fun={()=>toJinetesEstadisticas('/usuario_jinetes_estadisticas')} nombre="Estadisticas"  /></div>      
                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
      
}            


export default Usuario_Jinetes_Info;