import React from 'react';
import { useNavigate,useLocation } from 'react-router';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Jinete from '../../Componentes/Nav_Jinete';

import '../../StyleSheets/Usuario/Usuario_Menu_General.css';
import Boton_Direccion_Ampliado from '../../Componentes/Boton_Direccion_Ampliado';
import Nav_Admin from '../../Componentes/Nav_Admin';
import Nav_Admin2 from '../../Componentes/NavAdmin2';


function Admin_Cuenta(){

        const location = useLocation();
        console.log("Token Cuenta Admin: "+location.state.token);

        //Inicio Direcciones
        const navigate = useNavigate();
        const toUsuarioCuenta=(direccion)=>{
            navigate(direccion,{
                state:{
                    token:location.state.token
                //Variables
                }});
        }
        //Fin Direcciones


        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Admin2 tok={location.state.token}/>
                </div>

                <div className='MenuInfo'>
                    <h2 className='subtitulo'>CONFIGURACION DE CUENTA</h2>
                    <div className='BotonMenuCuenta' ><Boton_Direccion_Ampliado fun={()=>toUsuarioCuenta('/admin_cuenta_datos')} nombre="Datos Personales"  /></div>      
                    <div className='BotonMenuCuenta' ><Boton_Direccion_Ampliado fun={()=>toUsuarioCuenta('/iniciar_sesion')} nombre="Cerrar Sesion"  /></div>      

                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
      
}            


export default Admin_Cuenta;