import React from 'react';
import { useNavigate } from 'react-router-dom';


import Nav_Iniciar_Registrarse from '../../Componentes/Nav_Iniciar_Registrarse';
import Cabecera from '../../Componentes/Cabecera';
import Footer from '../../Componentes/Footer';
import Boton_Direccion from '../../Componentes/Boton_Direccion';

import '../../StyleSheets/Usuario/Registrarse.css';

function Registrarse(props){

        const navigate = useNavigate();
        const toUsuarioCarreras=()=>{
            navigate('/usuario_carreras',{
                state:{
                //Variables
                }});
        }

        return (

            <div className='bodyRegistrarse'>
                    
                <div>
                    <Cabecera/>
                    <Nav_Iniciar_Registrarse />    
                </div>

                <div>
                    <form className='FormRegistrarse'>

                        <div className='DNombre'>Nombre</div>
                        <div className='INombre'><input type="text" required=""></input></div>

                        <div className='DApellido'>Apellido</div>
                        <div className='IApellido'><input type="text" required=""></input></div>

                        <div className='DCedula'>Cedula</div>
                        <div className='ICedula'><input type="number" required=""></input></div>

                        <div className='DFecha'>Fecha de Nacimiento</div>
                        <div className='IFecha'><input type="date" required=""></input></div>

                        <div className='DUsuario'>Usuario</div>
                        <div className='IUsuario'><input type="text" required=""></input></div>
                                    
                        <div className='Password'>Contraseña</div>
                        <div className='Password'><input  type="password" required=""></input></div>

                        <div className='Password'>Repetir Contraseña</div>
                        <div className='Password'><input  type="password" required=""></input></div>

                        <div className='BotonRegistrar' ><Boton_Direccion fun={toUsuarioCarreras} nombre="Registrarse"  /></div>
                    </form>
                </div>

                <div>
                    <Footer/>
                </div>

            </div>
        );
      
}            


export default Registrarse;