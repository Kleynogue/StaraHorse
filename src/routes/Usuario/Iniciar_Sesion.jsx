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
        const [lugar, setLugar] = useState([]);
        useEffect(() => {
          const getLugar = async () => {
            
            
          }
          getLugar();
          
        }, []);
        //Borrar
        
        
        const [usuario, setUsuario] = useState();
        const [password, setPassword] = useState()
        const [accion, setAccion] = useState();

        const navigate = useNavigate();
        const toUsuarioCarreras=()=>{
            navigate('/usuario_carreras',{
                state:{
                //Variables
                }});
        }
        const toUsuarioInicio=()=>{
            navigate('/iniciar_sesion',{
                state:{
                //Variables
                }});
        }

        async function getUser(user, pass){
            const response = await fetch('http://localhost/login', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'omit',
                headers:{
                    'Content-Type': 'aplication/json'
                },
                body: JSON.stringify({
                    user: user,
                    password: pass
                })
            })
            console.log(JSON.stringify({
                user: user,
                password: pass
            }))
            return response.json();
        }


        //Una vez presionado el boton del form
        const handleSubmit= (e) => {
            e.preventDefault();
            console.log("El usuario:"+usuario);
            console.log("El usuario:"+password);
            console.log();
            /*getUser(usuario,password)
            .then((value)=>{
                toUsuarioCarreras;
                console.log(value)
            })
            .catch((value)=>{
                toUsuarioInicio
                console.log(value)
            })*/
            
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

                
                    <form method="POST" action="http://starahorsebd.ddns.net/login" onSubmit={(e)=>{handleSubmit(e)}} className='FormIniciar' >
                        <div className='DUsuario'>Usuario</div>
                        <div className='IUsuario'><input type="text" id="user" name="user" required onChange={e => setUsuario(e.target.value)}></input></div>

                        <div className='Password'>Contraseña</div>
                        <div className='Password'><input  type="password" id="password" name="password" required onChange={e => setPassword(e.target.value)}></input></div>
                              
                        <div className='BotonIniciar'><Boton_Direccion  nombre="Iniciar Sesion" /></div>
                    
                    </form>
                

                <div>
                     
                    <Footer/>
                </div>
                
            </div>

        );
    

}

export default Iniciar_Sesion;