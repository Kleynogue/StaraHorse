import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';
 
import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Campo_Menu from '../../Componentes/Campo_Menu';


import '../../StyleSheets/Usuario/Usuario_Menu_General.css';


function Usuario_Entrenadores_Info(){

        const location = useLocation();
        console.log("El nombre del entrenador es: "+location.state.nombre+" de clave "+location.state.clave);

        //Estados de los valores del Entrenador
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [nombre, setNombre] = useState();
        const [posicion, setPosicion] = useState();
        const [dinero, setDinero] = useState();
        const [cinco, setCinco] = useState();
        const [cuadra, setCuadra] = useState();

        //Se establecen los valores de los estados 
        const EstablecerEntrenador = () => {
            if(cargado=="false"){
                setNombre("Nombre");
                setPosicion("Posicion");
                setDinero("Dinero");
                setCinco("cinco primeros");
                setCuadra("cuadra");
                
                setCargado("true");
            }
        }
        EstablecerEntrenador();




        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='MenuInfo'>
                    <h2 className='subtitulo'>ENTRENADORES</h2>
                    <Campo_Menu titulo="Nombre" valor={nombre}/>
                    <Campo_Menu titulo="Posicion Actual" valor={posicion}/>
                    <Campo_Menu titulo="Dinero Ganado" valor={dinero}/>
                    <Campo_Menu titulo="5 primeros" valor={cinco}/>
                    <Campo_Menu titulo="Cuadra" valor={cuadra}/>    
                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
    
}            


export default Usuario_Entrenadores_Info;