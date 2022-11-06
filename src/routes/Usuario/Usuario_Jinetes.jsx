import React from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Lista_Elementos from '../../Componentes/Lista_Elementos';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Barra_Busqueda from '../../Componentes/Barra_Busqueda';

import '../../StyleSheets/Usuario/Usuario_Menu_Principal.css';


class Usuario_Jinetes extends React.Component{

    


    render() {

        const elementos = ["Jinete_1", "Jinete_2", "Jinete_3", "Jinete_4"
                     ,"Jinete_5", "Jinete_6", "Jinete_7", "Jinete_8"
                     ,"Jinete_9", "Jinete_10", "Jinete_11" , "Jinete_12"];

        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='DLista'>
                    <h2 className='subtitulo'>JINETES</h2>
                    <Barra_Busqueda/>
                    <Lista_Elementos elementos={elementos} dir="/usuario_jinetes_info"/>
                </div>

                <div>
                    <Footer/>
                </div>

            </div>
        );
    }  
}       

export default Usuario_Jinetes;