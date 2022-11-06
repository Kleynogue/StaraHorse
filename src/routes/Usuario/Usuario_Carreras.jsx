import React from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Boton_Aceptar from '../../Componentes/Boton_Aceptar';
import Lista_Elementos from '../../Componentes/Lista_Elementos';
import Nav_Usuario from '../../Componentes/Nav_Usuario';

import '../../StyleSheets/Usuario/Usuario_Menu_Principal.css';


class Usuario_Carreras extends React.Component{

    


    render() {

        const elementos = ["Carrera_Numero_1", "Carrera_Numero_2", "Carrera_Numero_3", "Carrera_Numero_4"
        ,"Carrera_Numero_5", "Carrera_Numero_6", "Carrera_Numero_7", "Carrera_Numero_8"
        ,"Carrera_Numero_9", "Carrera_Numero_10", "Carrera_Numero_11" , "Carrera_Numero_12"];


        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='DLista'>
                    <h2 className='subtitulo'>CARRERAS DEL DÍA</h2>
                    <Lista_Elementos elementos={elementos} dir="/usuario_carreras_info" />
                    <div className='DivBotonApuesta'><Boton_Aceptar dir={'/usuario_carreras'} nombre="Apuestas" /></div>
                    <div><Boton_Aceptar dir={'/usuario_carreras'} nombre="Historial" /></div>
                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
    }  
}            


export default Usuario_Carreras;