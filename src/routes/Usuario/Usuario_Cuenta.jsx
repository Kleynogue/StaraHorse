import React from 'react';


import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Usuario from '../../Componentes/Nav_Usuario';


import '../../StyleSheets/Usuario/Usuario_Menu_General.css';
import Boton_Ampliado from '../../Componentes/Boton_Ampliado';


class Usuario_Cuenta extends React.Component{

    render() {

        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='MenuInfo'>
                    <h2 className='subtitulo'>CONFIGURACION DE CUENTA</h2>
                    <div className='BotonMenuCuenta' ><Boton_Ampliado dir={'/usuario_cuenta_datos'} nombre="Datos Personales"  /></div>      
                    <div className='BotonMenuCuenta' ><Boton_Ampliado dir={'/usuario_cuenta_solicitud'} nombre="Solicitar Privilegios"  /></div>      
                    <div className='BotonMenuCuenta' ><Boton_Ampliado dir={'/iniciar_sesion'} nombre="Cerrar Sesion"  /></div>      

                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
    }  
}            


export default Usuario_Cuenta;