import React from 'react';
import { useNavigate,useLocation } from 'react-router';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Lista_Elementos from '../../Componentes/Lista_Elementos';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Barra_Busqueda from '../../Componentes/Barra_Busqueda';

import '../../StyleSheets/Usuario/Usuario_Menu_Principal.css';


function Usuario_Entrenadores(){

        const elementos = ["Entrenador_1", "Entrenador_2", "Entrenador_3", "Entrenador_4"
                     ,"Entrenador_5", "Entrenador_6", "Entrenador_7", "Entrenador_8"
                     ,"Entrenador_9", "Entrenador_10", "Entrenador_11" , "Entrenador_12"];

        return (
            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='DLista'>
                    <h2 className='subtitulo'>ENTRENADORES</h2>
                    <Barra_Busqueda/>
                    <Lista_Elementos elementos={elementos} dir="/usuario_entrenadores_info"/>
                </div>

                <div>
                    <Footer/>
                </div>

            </div>
        );
      
}

export default Usuario_Entrenadores;