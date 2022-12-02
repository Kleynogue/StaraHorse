import React from 'react';
import { useNavigate,useLocation } from 'react-router';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Boton_Direccion_Ampliado from '../../Componentes/Boton_Direccion_Ampliado';


import '../../StyleSheets/Usuario/Usuario_Menu_General.css';


function Usuario_Cuenta(){

        //Inicio Direcciones
        const navigate = useNavigate();
        const toUsuarioCuenta=(direccion)=>{
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

                <div className='MenuInfo'>
                    <h2 className='subtitulo'>CONFIGURACION DE CUENTA</h2>
                    <div className='BotonMenuCuenta' ><Boton_Direccion_Ampliado fun={()=>toUsuarioCuenta('/usuario_cuenta_datos')} nombre="Datos Personales"  /></div>      
                    <div className='BotonMenuCuenta' ><Boton_Direccion_Ampliado fun={()=>toUsuarioCuenta('/usuario_cuenta_solicitud')} nombre="Solicitar Privilegios"  /></div>      
                    <div className='BotonMenuCuenta' ><Boton_Direccion_Ampliado fun={()=>toUsuarioCuenta('/iniciar_sesion')} nombre="Cerrar Sesion"  /></div>      

                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
      
}            


export default Usuario_Cuenta;