import React from 'react';
import { useNavigate,useLocation } from 'react-router';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Boton_Direccion from '../../Componentes/Boton_Direccion';
import Lista_Elementos from '../../Componentes/Lista_Elementos';
import Nav_Jinete from '../../Componentes/Nav_Jinete';
import Campo_Menu from '../../Componentes/Campo_Menu';

import '../../StyleSheets/Jinete/Jinete_Menu_Principal.css';


function Jinete_Perfil(props){


       //Inicio Direcciones
       const navigate = useNavigate();
       const toJineteCompletar=(direccion)=>{
           navigate(direccion,{
               state:{
               //Variables
               }});
       }
       //Fin Direcciones 

        return (

            <div className='bodyUsuario'>
                

                    <div>
                        <Cabecera/>
                        <Nav_Jinete />
                    </div>

                    <div className='MenuInfo'>
                        <h2 className='subtitulo'>MI PERFIL</h2>
                            <Campo_Menu titulo="Nombre"/>
                            <Campo_Menu titulo="Cedula"/>
                            <Campo_Menu titulo="Fecha de Nacimiento"/>
                            <Campo_Menu titulo="Peso Promedio"/>
                            <Campo_Menu titulo="Altura"/>
                            <Campo_Menu titulo="Posicion Actual"/>
                            <Campo_Menu titulo="Dinero Ganado"/>
                            <Campo_Menu titulo="5 primeros"/>
                    </div>

                    <div>
                        <Footer/>
                    </div>
 
            </div>

        );
      
}            


export default Jinete_Perfil;