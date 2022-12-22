import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Campo_Menu from '../../Componentes/Campo_Menu';
import Nav_Entrenador from '../../Componentes/Nav_Entrenador';

import '../../StyleSheets/Entrenador/Entrenador_Menu_Principal.css';


function Entrenador_Perfil(props){


       //Estados de los valores del jinete
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
                        <Nav_Entrenador />
                    </div>

                    <div className='MenuInfo'>
                        <h2 className='subtitulo'>MI PERFIL</h2>
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


export default Entrenador_Perfil;