import React from 'react';

 
import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Campo_Menu from '../../Componentes/Campo_Menu';
import Boton_Aceptar from '../../Componentes/Boton_Aceptar';

import '../../StyleSheets/Usuario/Usuario_Menu_General.css';


class Usuario_Entrenadores_Info extends React.Component{

    render() {

        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='MenuInfo'>
                    <h2 className='subtitulo'>ENTRENADORES</h2>
                    <Campo_Menu titulo="Nombre"/>
                    <Campo_Menu titulo="Posicion Actual"/>
                    <Campo_Menu titulo="Dinero Ganado"/>
                    <Campo_Menu titulo="5 primeros"/>
                    <Campo_Menu titulo="Cuadra"/>    
                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
    }  
}            


export default Usuario_Entrenadores_Info;