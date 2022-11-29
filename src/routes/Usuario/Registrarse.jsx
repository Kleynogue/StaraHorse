import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


import Nav_Iniciar_Registrarse from '../../Componentes/Nav_Iniciar_Registrarse';
import Cabecera from '../../Componentes/Cabecera';
import Footer from '../../Componentes/Footer';
import Boton_Direccion from '../../Componentes/Boton_Direccion';

import '../../StyleSheets/Usuario/Registrarse.css';

function Registrarse(props){


        const [nombre, setNombre] = useState();
        const [apellido, setApellido] = useState()
        const [cedula, setCedula] = useState();
        const [nacimiento, setNacimiento] = useState()
        const [usuario, setUsuario] = useState();
        const [password, setPassword] = useState()
        const [passwordconfirm, setPasswordconfirm] = useState()

        const navigate = useNavigate();
        const toUsuarioCarreras=()=>{
            navigate('/usuario_carreras',{
                state:{
                //Variables
                }});
        }


        //Una vez presionado el boton del form
        const handleSubmit= (e) => {
            e.preventDefault();
            console.log("- "+nombre);
            console.log("- "+apellido);
            console.log("- "+cedula);
            console.log("- "+nacimiento);
            console.log("- "+usuario);
            console.log("- "+password);
            console.log("- "+passwordconfirm);
            if(1==1){ //Usuario corecto
                toUsuarioCarreras();
            }
            else{   //Usuario incorecto

            }
        }


        return (

            <div className='bodyRegistrarse'>
                    
                <div>
                    <Cabecera/>
                    <Nav_Iniciar_Registrarse />    
                </div>

                <div>
                    <form className='FormRegistrarse' onSubmit={e => {handleSubmit(e)}}>

                        <div className='DNombre'>Nombre</div>
                        <div className='INombre'><input type="text" required onChange={e => setNombre(e.target.value)}></input></div>

                        <div className='DApellido'>Apellido</div>
                        <div className='IApellido'><input type="text" required onChange={e => setApellido(e.target.value)}></input></div>

                        <div className='DCedula'>Cedula</div>
                        <div className='ICedula'><input type="number" required onChange={e => setCedula(e.target.value)}></input></div>

                        <div className='DFecha'>Fecha de Nacimiento</div>
                        <div className='IFecha'><input type="date" required onChange={e => setNacimiento(e.target.value)}></input></div>

                        <div className='DUsuario'>Usuario</div>
                        <div className='IUsuario'><input type="text" required onChange={e => setUsuario(e.target.value)}></input></div>
                                    
                        <div className='Password'>Contraseña</div>
                        <div className='Password'><input  type="password" required onChange={e => setPassword(e.target.value)}></input></div>

                        <div className='Password'>Repetir Contraseña</div>
                        <div className='Password'><input  type="password" required onChange={e => setPasswordconfirm(e.target.value)}></input></div>

                        <div className='BotonRegistrar' ><Boton_Direccion nombre="Registrarse"  /></div>
                    </form>
                </div>

                <div>
                    <Footer/>
                </div>

            </div>
        );
      
}            


export default Registrarse;