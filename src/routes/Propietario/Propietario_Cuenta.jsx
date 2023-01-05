import React from 'react';
import { useNavigate,useLocation } from 'react-router';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Propietario from '../../Componentes/Nav_Propietario';

import '../../StyleSheets/Usuario/Usuario_Menu_General.css';
import Boton_Direccion_Ampliado from '../../Componentes/Boton_Direccion_Ampliado';


function Propietario_Cuenta(){

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
                    <Nav_Propietario />
                </div>

                <div className='MenuInfo'>
                    <h2 className='subtitulo'>CONFIGURACION DE CUENTA</h2>
                    <div className='BotonMenuCuenta' ><Boton_Direccion_Ampliado fun={()=>toUsuarioCuenta('/propietario_cuenta_datos')} nombre="Datos Personales"  /></div>      
                    <div className='BotonMenuCuenta' ><Boton_Direccion_Ampliado fun={()=>toUsuarioCuenta('/iniciar_sesion')} nombre="Cerrar Sesion"  /></div>      

                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
      
}            


export default Propietario_Cuenta;