import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Campo_Menu from '../../Componentes/Campo_Menu';
import Boton_Direccion from '../../Componentes/Boton_Direccion';

import '../../StyleSheets/Usuario/Usuario_Menu_General.css';


function Usuario_Jinetes_Info(){

        const location = useLocation();
        console.log("El nombre del jinete es: "+location.state.nombre+" de clave "+location.state.clave);

        const navigate = useNavigate();
        const toJinetesEstadisticas=(direccion)=>{
            navigate(direccion,{
                state:{
                //Variables
                }});
        }


        //Estados de los valores del jinete
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [nombre, setNombre] = useState();
        const [cedula, setCedula] = useState();
        const [nacimiento, setNacimiento] = useState();
        const [peso, setPeso] = useState();
        const [altura, setAltura] = useState();

        //Se establecen los valores de los estados 
        const EstablecerJinete = () => {
            if(cargado=="false"){
                setNombre("Nombre");
                setCedula("Cedula");
                setNacimiento("Nacimiento");
                setPeso("Peso");
                setAltura("Altura");
                
                setCargado("true");
            }
            
        }
        EstablecerJinete();



        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='MenuInfo'>
                    <h2 className='subtitulo'>JINETES</h2>
                    <Campo_Menu titulo="Nombre" valor={nombre}/>
                    <Campo_Menu titulo="Cedula" valor={cedula}/>
                    <Campo_Menu titulo="Fecha de Nacimiento" valor={nacimiento}/>
                    <Campo_Menu titulo="Peso Promedio" valor={peso}/>
                    <Campo_Menu titulo="Altura" valor={altura}/>  
                    <div className='BotonJinete' ><Boton_Direccion fun={()=>toJinetesEstadisticas('/usuario_jinetes_estadisticas')} nombre="Estadisticas"  /></div>      
                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
      
}            


export default Usuario_Jinetes_Info;