import React from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import  Nav_Iniciar_Registrarse  from '../../Componentes/Nav_Iniciar_Registrarse';
import Boton_Aceptar from '../../Componentes/Boton_Aceptar';

import '../../StyleSheets/Usuario/Iniciar_Sesion.css';


class Iniciar_Sesion extends React.Component{

    


    render() {
        return (

            <div className='bodyIniciar'>
        
                <div>
                    <Cabecera/>
                    <Nav_Iniciar_Registrarse />  
                </div>

                <div>
                    <form className='FormIniciar'>
                        <div className='DUsuario'>Usuario</div>
                        <div className='IUsuario'><input type="text" required=""></input></div>
                                
                        <div className='Password'>Contraseña</div>
                        <div className='Password'><input  type="password" required=""></input></div>
                            
                        <div className='BotonIniciar'><Boton_Aceptar dir={'/usuario_carreras'} nombre="Iniciar Sesion" /></div>
                    </form>
                </div>

                <div>
                    <Footer/>
                </div>
                
            </div>

        );
    }

}

export default Iniciar_Sesion;