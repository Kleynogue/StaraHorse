import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import  Nav_Iniciar_Registrarse  from '../../Componentes/Nav_Iniciar_Registrarse';
import Boton_Direccion from '../../Componentes/Boton_Direccion';

import '../../StyleSheets/Usuario/Iniciar_Sesion.css';


function Iniciar_Sesion(){

        //Borrar
        const [lugar, setLugar] = useState(false);
        useEffect(() => {
          getLugar();
        }, []);
        function getLugar() {
          fetch('http://localhost:3000')
            .then(response => {
              return response.text();
            })
            .then(data => {
              setLugar(data);
              
            });
        }
        console.log("-- Lugar: "+getLugar());
        //Borrar
        
        
        const [usuario, setUsuario] = useState();
        const [password, setPassword] = useState()


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
            console.log("El usuario:"+usuario);
            console.log("El usuario:"+password);
            if(1==1){ //Usuario corecto
                toUsuarioCarreras();
            }
            else{   //Usuario incorecto

            }
        }

    
        return (

            <div className='bodyIniciar'>
        
                <div>
                    <Cabecera/>
                    <Nav_Iniciar_Registrarse />  
                </div>

                
                    <form onSubmit={e => {handleSubmit(e)}} className='FormIniciar' >
                        <div className='DUsuario'>Usuario</div>
                        <div className='IUsuario'><input type="text" required onChange={e => setUsuario(e.target.value)}></input></div>

                        <div className='Password'>Contraseña</div>
                        <div className='Password'><input  type="password" required onChange={e => setPassword(e.target.value)}></input></div>
                            
                        <div className='BotonIniciar'><Boton_Direccion  nombre="Iniciar Sesion" /></div>
                    </form>
                

                <div>
                    <Footer/>
                </div>
                
            </div>

        );
    

}

export default Iniciar_Sesion;