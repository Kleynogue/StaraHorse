import React from 'react';
import { useNavigate,useLocation } from 'react-router';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Usuario from '../../Componentes/Nav_Usuario';

import '../../StyleSheets/Usuario/Usuario_Menu_Principal.css';


function Usuario_Carreras_Informacion(){

    const location = useLocation();
    console.log("El nombre de la carrera es: "+location.state.Elemento);

        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='DLista'>
                    <h2 className='subtitulo'>INFORMACION DE CARRERA</h2>
                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
      
}            


export default Usuario_Carreras_Informacion;