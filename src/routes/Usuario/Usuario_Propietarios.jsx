import React from 'react';
import { useNavigate,useLocation } from 'react-router';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Lista_Elementos from '../../Componentes/Lista_Elementos';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Barra_Busqueda from '../../Componentes/Barra_Busqueda';

import '../../StyleSheets/Usuario/Usuario_Menu_Principal.css';


function Usuario_Propietarios(){

    

        const elementos = ["Propietario_1", "Propietario_2", "Propietario_3", "Propietario_4"
                     ,"Propietario_5", "Propietario_6", "Propietario_7", "Propietario_8"
                     ,"Propietario_9", "Propietario_10", "Propietario_11" , "Propietario_12"];

        return (
            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='DLista'>
                    <h2 className='subtitulo'>PROPIETARIOS</h2>
                    <Barra_Busqueda/>
                    <Lista_Elementos elementos={elementos} dir="/usuario_propietarios_info"/>
                </div>

                <div>
                    <Footer/>
                </div>

            </div>
        );
     
}

export default Usuario_Propietarios;