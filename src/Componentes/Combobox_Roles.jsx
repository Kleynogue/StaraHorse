import Select from 'react-select'
import { useState } from 'react';
import { useNavigate,useLocation } from 'react-router';

import Boton_Direccion from './Boton_Direccion';

import '../StyleSheets/Componentes/Combobox_Roles.css';



function Combobox_Roles(props){

    const [selectedOption, setSelectedOption] = useState(null);    

    //Inicio Direcciones
    const navigate = useNavigate();
    const toA=(direccion)=>{

        navigate("/"+direccion+"_carreras",{
            state:{
            //Variables
            }});
    }
    //Fin Direcciones

    const customerStyles = { 
        control: (styles, {isFocused}) => ({ 
            ...styles, 
            
            backgroundColor: "#FFFFFF",
            border: "5px 5px 0 0", 
            borderColor: "#F37021",
            boxShadow: 'none' }), 
            color: "#817A72",

        option: (styles, {isFocused}) => { 
            return { 
                ...styles, 
                backgroundColor: isFocused ? "#F37021" : "#FFFFFF",
                color: isFocused ? "#FFFFFF" : "#817A72",
                }
        }, input: styles => ({ ...styles, color: "#817A72" }), 
    
    
    };

    return(

        <form id='FormRol' >
            <div id='SelectRol'><Select styles={customerStyles} options={props.opciones} defaultValue={selectedOption}  onChange={setSelectedOption} /></div>
            <div id='BotonRol'><Boton_Direccion fun={()=>toA(selectedOption.value)} nombre="Cambiar"  /></div>    
        </form>
    );
    
}

export default Combobox_Roles;