import React from 'react';


import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Campo_Menu from '../../Componentes/Campo_Menu';


import '../../StyleSheets/Usuario/Usuario_Menu_General.css';
import Lista_Elementos_Reducida from '../../Componentes/Lista_Elementos_Reducida';
import Campo_Menu_Ampliado from '../../Componentes/Campo_Menu_Ampliado';


class Usuario_Propietarios_Info extends React.Component{

    render() {

        const elementos = ["Telefono_1", "Telefono_2", "Telefono_3", "Telefono_4"];



        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='MenuInfo'>
                    <h2 className='subtitulo'>PROPIETARIOS</h2>
                    <Campo_Menu titulo="Nombre"/>
                    <Campo_Menu titulo="Cedula"/>
                    <Campo_Menu titulo="Fecha de Nacimiento"/>
                    <Campo_Menu titulo="Correo"/> 
                    <div></div>
                    <div></div>
                    <Campo_Menu_Ampliado titulo="Direccion"/> 
                    <div></div>
                    <div></div>
                    <div className='AtributoPropietarios'>Telefonos de Contacto</div>
                    <Lista_Elementos_Reducida elementos={elementos} dir="/usuario_propietarios_info"/> 
                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
    }  
}            


export default Usuario_Propietarios_Info;