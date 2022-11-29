import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Jinete from '../../Componentes/Nav_Jinete';
import Campo_Menu from '../../Componentes/Campo_Menu';

import '../../StyleSheets/Jinete/Jinete_Menu_Principal.css';


function Jinete_Perfil(props){


       //Estados de los valores del jinete
       const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
       const [nombre, setNombre] = useState();
       const [cedula, setCedula] = useState();
       const [nacimiento, setNacimiento] = useState();
       const [peso, setPeso] = useState();
       const [altura, setAltura] = useState(); 
       const [posicion, setPosicion] = useState();
       const [dinero, setDinero] = useState();
       const [cinco, setCinco] = useState();


        //Se establecen los valores de los estados 
        const EstablecerJinete = () => {
            if(cargado=="false"){
                setNombre("Nombre");
                setCedula("Cedula");
                setNacimiento("Nacimiento");
                setPeso("Peso");
                setAltura("Altura");
                setPosicion("Posicion");
                setDinero("Dinero");
                setCinco("cinco primeros");

                setCargado("true");
            }
            
        }
        EstablecerJinete();


        
        return (

            <div className='bodyUsuario'>
                

                    <div>
                        <Cabecera/>
                        <Nav_Jinete />
                    </div>

                    <div className='MenuInfo'>
                        <h2 className='subtitulo'>MI PERFIL</h2>
                            <Campo_Menu titulo="Nombre" valor={nombre}/>
                            <Campo_Menu titulo="Cedula" valor={cedula}/>
                            <Campo_Menu titulo="Fecha de Nacimiento" valor={nacimiento}/>
                            <Campo_Menu titulo="Peso Promedio" valor={peso}/>
                            <Campo_Menu titulo="Altura" valor={altura}/>
                            <Campo_Menu titulo="Posicion Actual" valor={posicion}/>
                            <Campo_Menu titulo="Dinero Ganado" valor={dinero}/>
                            <Campo_Menu titulo="5 primeros" valor={cinco}/>
                    </div>

                    <div>
                        <Footer/>
                    </div>
 
            </div>

        );
      
}            


export default Jinete_Perfil;