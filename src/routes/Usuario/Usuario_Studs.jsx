import React from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Lista_Elementos from '../../Componentes/Lista_Elementos';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Barra_Busqueda from '../../Componentes/Barra_Busqueda';

import '../../StyleSheets/Usuario/Usuario_Menu_Principal.css';


class Usuario_Studs extends React.Component{

    


    render() {

        const elementos = ["Stud_1", "Stud_2", "Stud_3", "Stud_4"
                     ,"Stud_5", "Stud_6", "Stud_7", "Stud_8"
                     ,"Stud_9", "Stud_10", "Stud_11" , "Stud_12"];

        return (
            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='DLista'>
                    <h2 className='subtitulo'>STUDS</h2>
                    <Barra_Busqueda/>
                    <Lista_Elementos elementos={elementos} dir="/usuario_studs_info" />
                </div>

                <div>
                    <Footer/>
                </div>

            </div>
        );
    }  
}

export default Usuario_Studs;