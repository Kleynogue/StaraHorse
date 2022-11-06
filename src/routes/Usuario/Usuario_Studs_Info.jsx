import React from 'react';


import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Campo_Menu from '../../Componentes/Campo_Menu';


import '../../StyleSheets/Usuario/Usuario_Menu_General.css';
import Lista_Elementos_Reducida from '../../Componentes/Lista_Elementos_Reducida';


class Usuario_Studs_Info extends React.Component{

    render() {

        const elementos = ["Propietario_1", "Propietario_2", "Propietario_3", "Propietario_4"
                     ,"Propietario_5", "Propietario_6", "Propietario_7", "Propietario_8"
                     ,"Propietario_9", "Propietario_10", "Propietario_11" , "Propietario_12"];



        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='MenuInfo'>
                    <h2 className='subtitulo'>STUDS</h2>
                    <Campo_Menu titulo="Nombre"/>
                    <Campo_Menu titulo="Fecha de Creacion"/>
                    <Campo_Menu titulo="Descripcion chaqueta"/>
                    <Campo_Menu titulo="Descripcion gorra"/>  
                    <div className='AtributoPropietarios Studs'>Propietarios</div>
                    <Lista_Elementos_Reducida elementos={elementos} dir="/usuario_propietarios_info"/> 
                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
    }  
}            


export default Usuario_Studs_Info;