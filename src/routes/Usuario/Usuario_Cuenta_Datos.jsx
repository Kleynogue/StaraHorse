import React from 'react';
import { useNavigate,useLocation } from 'react-router';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Campo_Menu_Lateral from '../../Componentes/Campo_Menu_Lateral';
import Campo_Menu_Ampliado from '../../Componentes/Campo_Menu_Ampliado';
import Combobox_Roles from '../../Componentes/Combobox_Roles';
import Boton_Direccion from '../../Componentes/Boton_Direccion';

import '../../StyleSheets/Usuario/Usuario_Menu_General.css';



function Usuario_Cuenta_Datos(){


        const options = [
            { value: 'Estandar', label: 'Estandar' },
            { value: 'Jinete', label: 'Jinete' },
            { value: 'Entrenador', label: 'Entrenador' },
            { value: 'Propietario', label: 'Propietario' },
            { value: 'Admin', label: 'Admin' },
        ]

        //Inicio Direcciones
        const navigate = useNavigate();
        const toNOWHERE=(direccion)=>{
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
                    <Nav_Usuario />
                </div>

                <div className='MenuInfo'>
                    <h2 className='subtitulo'>DATOS PERSONALES</h2>
                    
                    <Campo_Menu_Lateral titulo="Usuario"/>
                    <Campo_Menu_Lateral titulo="Nombre"/>
                    <Campo_Menu_Lateral titulo="Apellido"/>
                    <Campo_Menu_Lateral titulo="Fecha de Nacimiento"/>
                    <Campo_Menu_Lateral titulo="Cedula"/>
                    
                    <Campo_Menu_Ampliado titulo="Direccion"/> 
                    
                    <div></div>
                    <div></div>

                    <div className='flex'>
                        <div className='ComboboxPrivilegios'><Combobox_Roles opciones={options}/></div>
                        <Boton_Direccion fun={()=>toNOWHERE()} nombre="Cambiar"  />    
                    </div>
                    
                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
      
}            


export default Usuario_Cuenta_Datos;