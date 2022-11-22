import React from 'react';
import { useNavigate,useLocation } from 'react-router';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Boton_Direccion from '../../Componentes/Boton_Direccion';
import Lista_Elementos from '../../Componentes/Lista_Elementos';
import Nav_Jinete from '../../Componentes/Nav_Jinete';

import '../../StyleSheets/Jinete/Jinete_Menu_Principal.css';


function Jinete_Carreras(props){


        const elementos = ["Carrera_Numero_1", "Carrera_Numero_2", "Carrera_Numero_3", "Carrera_Numero_4"
        ,"Carrera_Numero_5", "Carrera_Numero_6", "Carrera_Numero_7", "Carrera_Numero_8"
        ,"Carrera_Numero_9", "Carrera_Numero_10", "Carrera_Numero_11" , "Carrera_Numero_12"];

        

        return (

            <div className='bodyUsuario'>
                

                    <div>
                        <Cabecera/>
                        <Nav_Jinete />
                    </div>

                    <div className='DLista'>
                        <h2 className='subtitulo'>CARRERAS</h2>

                        <form id='FormFecha' >
                            <div id='FechaInput'><input type="date" required="" placeholder='Card Number' ></input></div>
                            <div id='FechaBoton'><Boton_Direccion  nombre={"Seleccionar"} /></div>
                        </form> 

                        <div id="CarreraLista"><Lista_Elementos elementos={elementos} dir="/usuario_carreras_info" /></div>
                        
                        

                    </div>

                    <div>
                        <Footer/>
                    </div>

                
                
            </div>

        );
      
}            


export default Jinete_Carreras;