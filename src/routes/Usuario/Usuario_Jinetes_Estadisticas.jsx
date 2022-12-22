import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Campo_Menu from '../../Componentes/Campo_Menu';
import Boton_Direccion from '../../Componentes/Boton_Direccion';

import '../../StyleSheets/Usuario/Usuario_Menu_General.css';


function Usuario_Jinetes_Estadisticas(){


        const navigate = useNavigate();
            const toJinetesInfo=(direccion)=>{
                navigate(direccion,{
                    state:{
                    //Variables
                    }});
        }
    
        //Estados de los valores del jinete
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [nombre, setNombre] = useState();
        const [posicion, setPosicion] = useState();
        const [dinero, setDinero] = useState();
        const [cinco, setCinco] = useState();
        

        //Se establecen los valores de los estados 
        const EstablecerEstadisticasJinete = () => {
            if(cargado=="false"){
                setNombre("Nombre");
                setPosicion("Posicion");
                setDinero("Dinero");
                setCinco("cinco primeros");
                
                setCargado("true");
            }
            
        }
        EstablecerEstadisticasJinete();

        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='MenuInfo'>
                    <h2 className='subtitulo'>JINETES</h2>
                    <Campo_Menu titulo="Nombre" valor={nombre}/>
                    <Campo_Menu titulo="Posicion Actual" valor={posicion}/>
                    <Campo_Menu titulo="Dinero Ganado" valor={dinero}/>
                    <Campo_Menu titulo="5 primeros" valor={cinco}/>
                    <div></div>
                    <div className='BotonJinete' ><Boton_Direccion fun={()=>toJinetesInfo('/usuario_jinetes_info')} nombre="Regresar"  /></div>      
                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
      
}            


export default Usuario_Jinetes_Estadisticas;