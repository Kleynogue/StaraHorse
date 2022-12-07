import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Campo_Menu from '../../Componentes/Campo_Menu';
import Nav_Entrenador from '../../Componentes/Nav_Entrenador';
import Campo_Menu_Ampliado from '../../Componentes/Campo_Menu_Ampliado';
import Lista_Elementos_Reducida from '../../Componentes/Lista_Elementos_Reducida';

import '../../StyleSheets/Entrenador/Entrenador_Menu_Principal.css';


function Entrenador_Perfil(props){


       //Estados de los valores del jinete
       const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
       const [nombre, setNombre] = useState();
       const [cedula, setCedula] = useState();
       const [nacimiento, setNacimiento] = useState();
       const [correo, setCorreo] = useState();
       const [direccion, setDireccion] = useState();
       const [telefono, setTelefono] = useState();


        //Se establecen los valores de los estados 
        const EstablecerPropietario = () => {
            if(cargado=="false"){
                setNombre("Nombre");
                setCedula("Cedula");
                setNacimiento("Nacimiento");
                setCorreo("Correo");
                setDireccion("Direccion");

                let tele = [
                    {key: "120", Col2: "Telefono_120"},
                    {key: "121", Col2: "Telefono_121"},
                    {key: "122", Col2: "Telefono_122"},
                    {key: "123", Col2: "Telefono_123"}
                ]
                setTelefono(tele);


                setCargado("true");
            }
            
        }
        EstablecerPropietario();


        
        return (

            <div className='bodyUsuario'>
                

                    <div>
                        <Cabecera/>
                        <Nav_Entrenador />
                    </div>

                    <div className='MenuInfo'>
                        <h2 className='subtitulo'>MI PERFIL</h2>
                        <Campo_Menu titulo="Nombre" valor={nombre}/>
                        <Campo_Menu titulo="Cedula" valor={cedula}/>
                        <Campo_Menu titulo="Fecha de Nacimiento" valor={nacimiento}/>
                        <Campo_Menu titulo="Correo" valor={correo}/> 
                        <div></div>
                        <div></div>
                        <Campo_Menu_Ampliado titulo="Direccion" valor={direccion}/> 
                        <div></div>
                        <div></div>
                        <div className='AtributoPropietarios'>Telefonos de Contacto</div>
                        <Lista_Elementos_Reducida elementos={telefono} />
                    </div>

                    <div>
                        <Footer/>
                    </div>
 
            </div>

        );
      
}            


export default Entrenador_Perfil;