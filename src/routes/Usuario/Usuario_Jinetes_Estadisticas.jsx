import React from 'react';

 
import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Campo_Menu from '../../Componentes/Campo_Menu';
import Boton_Direccion from '../../Componentes/Boton_Direccion';

import '../../StyleSheets/Usuario/Usuario_Menu_General.css';


class Usuario_Jinetes_Estadisticas extends React.Component{

    render() {

        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='MenuInfo'>
                    <h2 className='subtitulo'>JINETES</h2>
                    <Campo_Menu titulo="Nombre"/>
                    <Campo_Menu titulo="Posicion Actual"/>
                    <Campo_Menu titulo="Dinero Ganado"/>
                    <Campo_Menu titulo="5 primeros"/>
                    <div></div>
                    <div className='BotonJinete' ><Boton_Direccion dir={'/usuario_jinetes_info'} nombre="Regresar"  /></div>      
                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
    }  
}            


export default Usuario_Jinetes_Estadisticas;