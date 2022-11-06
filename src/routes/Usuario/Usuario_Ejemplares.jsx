import React from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Lista_Elementos from '../../Componentes/Lista_Elementos';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Barra_Busqueda from '../../Componentes/Barra_Busqueda';

import '../../StyleSheets/Usuario/Usuario_Menu_Principal.css';


class Usuario_Ejemplares extends React.Component{

    

    render() {

        const elementos = ["Ejemplar_1", "Ejemplar_2", "Ejemplar_3", "Ejemplar_4"
                     ,"Ejemplar_5", "Ejemplar_6", "Ejemplar_7", "Ejemplar_8"
                     ,"Ejemplar_9", "Ejemplar_10", "Ejemplar_11" , "Ejemplar_12"];

        return (
            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='DLista'>
                    <h2 className='subtitulo'>EJEMPLARES</h2>
                    <Barra_Busqueda/>
                    <Lista_Elementos elementos={elementos} dir="/usuario_ejemplares_info"/>
                </div>

                <div>
                    <Footer/>
                </div>

            </div>
        );
    }  
}

export default Usuario_Ejemplares;