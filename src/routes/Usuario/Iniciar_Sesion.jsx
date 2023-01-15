import React from 'react';
import { redirect, useNavigate } from 'react-router-dom';
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
            
            fetch('http://starahorse.ddns.net/Admin/Lugar')
            .then((response) => response.json())
            .then((data) => {
                setLugar(data)
                console.log(data)
            });

            console.log("+++ Lugar: "+JSON.stringify(lugar));
          }
          getLugar();
          
        }, []);
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

        const toIniciarSesion=()=>{
            navigate('/iniciar_sesion',{
                state:{
                //Variables
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
            getUser(usuario, password)
                .then((res)=>{
                    console.log(res)
                    toUsuarioCarreras();
                })
                .catch((err)=>{
                    console.log(err)
                    toIniciarSesion();
                })
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