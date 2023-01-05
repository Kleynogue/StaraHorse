import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Lista_Elementos_Reducida from '../../Componentes/Lista_Elementos_Reducida';
import Nav_Propietario from '../../Componentes/Nav_Propietario';

import '../../StyleSheets/Usuario/Usuario_Menu_Principal.css';
import Boton_Direccion_Ampliado from '../../Componentes/Boton_Direccion_Ampliado';
import Lista_Elementos_Reducida_Crud from '../../Componentes/Lista_Elementos_Reducida_Crud';


function Propietario_Ejemplares(){

        //Estados de los ejemplares
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [ejemplares, setEjemplares] = useState();

        //Inicio Direcciones
        const navigate = useNavigate();
        const toA=(Nombre,estado,Elemento,direccion)=>{
            navigate(direccion,{
                state:{
                Nombre,
                estado,
                Elemento
                }});
        }
        //Fin Direcciones


        //Se establecen los valores de los estados 
        const EstablecerEjemplares = () => {
            if(cargado=="false"){
                
                let ejem = [
                    {key: "1", Col2: "Ejemplar_1"},
                    {key: "2", Col2: "Ejemplar_2"},
                    {key: "3", Col2: "Ejemplar_3"},
                    {key: "4", Col2: "Ejemplar_4"},
                    {key: "5", Col2: "Ejemplar_5"},
                    {key: "6", Col2: "Ejemplar_6"},
                ]
                setEjemplares(ejem);

                setCargado("true");
            }
            
        }
        EstablecerEjemplares();

        
        return (
            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Propietario />
                </div>

                <div className='DLista'>
                    <h2 className='subtitulo'>EJEMPLARES</h2>
                    <Lista_Elementos_Reducida_Crud elementos={ejemplares} dir="/propietario_ejemplares_crud" nombre="Ejemplar"/>
                    
                    <div className='BotonMenuCuenta' ><Boton_Direccion_Ampliado fun={()=>toA("Ejemplar","Create",null,'/propietario_ejemplares_crud')} nombre="Agregar"  /></div>      

                </div>

                <div>
                    <Footer/>
                </div>

            </div>
        );
      
}

export default Propietario_Ejemplares;