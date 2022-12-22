import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Campo_Menu from '../../Componentes/Campo_Menu';
import Nav_Entrenador from '../../Componentes/Nav_Entrenador';

import '../../StyleSheets/Entrenador/Entrenador_Menu_Principal.css';


function Entrenador_Solicitudes(props){


       //Estados de los valores del jinete
       const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
       const [ejemplar, setEjemplar] = useState();
       const [stud, setStud] = useState();
       


        //Se establecen los valores de los estados 
        const EstablecerSolicitud = () => {
            if(cargado=="false"){
                setEjemplar("Ejemplar");
                setStud("Stud");
                

                setCargado("true");
            }
            
        }
        EstablecerSolicitud();


        
        return (

            <div className='bodyUsuario'>
                
                    <div>
                        <Cabecera/>
                        <Nav_Entrenador />
                    </div>

                    <div className='MenuInfo'>
                        <h2 className='subtitulo'>SOLICITUDES</h2>
                    
                        
                    </div>

                    <div>
                        <Footer/>
                    </div>
 
            </div>

        );
      
}            


export default Entrenador_Solicitudes;