import React from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import  Nav_Iniciar_Registrarse  from '../../Componentes/Nav_Iniciar_Registrarse';
import Boton_Direccion from '../../Componentes/Boton_Direccion';

import '../../StyleSheets/Usuario/Iniciar_Sesion.css';


function Iniciar_Sesion(){

        
        
        
        const [usuario, setUsuario] = useState();
        const [password, setPassword] = useState();
        const [token, setToken] = useState()
        const [accion, setAccion] = useState();

        const navigate = useNavigate();
        const toUsuarioCarreras=(tok)=>{
            console.log("Este es el toK: "+tok);
            navigate('/usuario_carreras',{
                state:{
                    token:tok
                }});
        }
        

        

      

        

        async function getUser(user, password){
            
            const response = await fetch('http://starahorsebd.ddns.net/login', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credetials: 'omit',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: user,
                    password: password
                })
            });
            return response.json();
        };


        //Una vez presionado el boton del form
        const handleSubmit= (e) => {
            e.preventDefault();
            console.log("El usuario:"+usuario);
            console.log("El usuario:"+password);
            

            getUser(usuario,password)
            .then((value)=>{
                setToken(value)
                console.log(value)
                toUsuarioCarreras(JSON.stringify(value.token))
            })
            .catch((value)=>{
                alert("Error al iniciar sesion")
                console.log(value)
            });
            
        }

    
        return (

            <div className='bodyIniciar'>
        
                <div>
                    <Cabecera/>
                    <Nav_Iniciar_Registrarse />  
                </div>

                
                    <form  onSubmit={(e)=>{handleSubmit(e)}} className='FormIniciar' >
                        <div className='DUsuario'>Usuario{JSON.stringify(token)}</div>
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