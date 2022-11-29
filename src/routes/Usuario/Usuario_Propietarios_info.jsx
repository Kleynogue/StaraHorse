import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Campo_Menu from '../../Componentes/Campo_Menu';


import '../../StyleSheets/Usuario/Usuario_Menu_General.css';
import Lista_Elementos_Reducida from '../../Componentes/Lista_Elementos_Reducida';
import Campo_Menu_Ampliado from '../../Componentes/Campo_Menu_Ampliado';


function Usuario_Propietarios_Info(){

        const location = useLocation();
        console.log("El nombre del propietario es: "+location.state.nombre+" de clave "+location.state.clave);

    
        //Estados de los valores del propietario
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [nombre, setNombre] = useState();
        const [cedula, setCedula] = useState();
        const [nacimiento, setNacimiento] = useState();
        const [correo, setCorreo] = useState();
        const [direccion, setDireccion] = useState();
        const [telefonos, setTelefonos] = useState();
        

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
                setTelefonos(tele);

                setCargado("true");
            }
            
        }
        EstablecerPropietario();


        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='MenuInfo'>
                    <h2 className='subtitulo'>PROPIETARIOS</h2>
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
                    <Lista_Elementos_Reducida elementos={telefonos} /> 
                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
      
}            


export default Usuario_Propietarios_Info;