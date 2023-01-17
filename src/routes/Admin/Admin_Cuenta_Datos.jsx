import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Campo_Menu_Lateral from '../../Componentes/Campo_Menu_Lateral';
import Campo_Menu_Ampliado from '../../Componentes/Campo_Menu_Ampliado';
import Combobox_Roles from '../../Componentes/Combobox_Roles';
import Nav_Entrenador from '../../Componentes/Nav_Entrenador';

import '../../StyleSheets/Usuario/Usuario_Menu_General.css';
import Nav_Admin from '../../Componentes/Nav_Admin';
import Nav_Admin2 from '../../Componentes/NavAdmin2';


function Admin_Cuenta_Datos(){

        const location = useLocation();
        console.log("Token Cuenta datos Admin: "+location.state.token);

        const navigate = useNavigate();
        const ComboBoxHandleSubmit= (e,elemento,valor) => {
            e.preventDefault();
            console.log("El usuario selecciona la opcion: "+elemento);
            if(1==1){ //Todo ocurre correctamente
                navigate("/"+valor+"_cuenta",{
                    state:{
                    token:location.state.token
                }});     
            }
            else{   //Algun error con la solicitud
            }
        }


        //Estados de los valores del jinete
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [usuario, setUsuario] = useState();
        const [nombre, setNombre] = useState();
        const [apellido, setApellido] = useState();
        const [nacimiento, setNacimiento] = useState();
        const [cedula, setCedula] = useState();
        const [direccion, setDireccion] = useState();
        const [rol, setRol] = useState();

        //Se establecen los valores de los estados 
        const EstablecerJinete = () => {
            if(cargado=="false"){
                setUsuario("Usuario");
                setNombre("Nombre");
                setApellido("Apellido");
                setNacimiento("Nacimiento");
                setCedula("Cedula");
                setDireccion("Direccion");
                
                const options = [
                    { value: 'usuario', label: 'Estandar' },
                    { value: 'jinete', label: 'Jinete' },
                    { value: 'entrenador', label: 'Entrenador' },
                    { value: 'propietario', label: 'Propietario' },
                    { value: 'admin', label: 'Admin' },
                ]
                setRol(options);

                setCargado("true");
            }
            
        }
        EstablecerJinete();

        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Admin2 />
                </div>

                <div className='MenuInfo'>
                    <h2 className='subtitulo'>DATOS PERSONALES</h2>
                    
                    <Campo_Menu_Lateral titulo="Usuario" valor={usuario}/>
                    <Campo_Menu_Lateral titulo="Nombre" valor={nombre}/>
                    <Campo_Menu_Lateral titulo="Apellido" valor={apellido}/>
                    <Campo_Menu_Lateral titulo="Fecha de Nacimiento" valor={nacimiento}/>
                    <Campo_Menu_Lateral titulo="Cedula" valor={cedula}/>

                    <Campo_Menu_Ampliado titulo="Direccion" valor={direccion}/> 
                    
                    <div></div>
                    <div></div>

                    <div className='ComboboxPrivilegios'><Combobox_Roles opciones={rol} fun={ComboBoxHandleSubmit} textoBoton="Cambiar"/></div>
                           
                </div>


                <div>
                    <Footer/>
                </div>

            </div>

        );
      
}            


export default Admin_Cuenta_Datos;