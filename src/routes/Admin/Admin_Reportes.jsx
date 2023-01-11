import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState, useEffect } from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Jinete from '../../Componentes/Nav_Jinete';

import Boton_Direccion_Ampliado from '../../Componentes/Boton_Direccion_Ampliado';
import Nav_Admin from '../../Componentes/Nav_Admin';

import Barra_Busqueda from '../../Componentes/Barra_Busqueda';
import Combobox_Roles from '../../Componentes/Combobox_Roles';
import Boton_Direccion from '../../Componentes/Boton_Direccion';


import '../../StyleSheets/Admin/Admin_Menu_Principal.css';
import Tabla from '../../Componentes/Tabla';
import Tabla_Crud from '../../Componentes/Tabla_Crud';


function Admin_Cruds(){

        const location = useLocation();
        

        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [opcfiltrar, setOpcfiltrar] = useState();
        const [record, setRecord] = useState();
        const [header, setHeader] = useState();
        const [nombre, setNombre] = useState();
        const [columnas, setColumnas] = useState();
        const [consulta, setConsulta] = useState([]);
        const [parametro, setParametro] = useState();
        const [filtro, setFiltro] = useState();

        useEffect(() => {
            
            console.log("////> "+location.state.Nombre);
            console.log("////> "+location.state.Query);
            console.log("////> "+location.state.NumCol);
            console.log("////> "+location.state.titulo);
            console.log("////> "+location.state.Filtro);
            setNombre(location.state.Nombre);
            setColumnas(location.state.NumCol);
            setConsulta(location.state.Query);
            setFiltro(location.state.Filtro);

            console.log("---------> "+Object.keys(consulta).length);
            
        }, []);

        const EstablecerCrud = () => {
            if(cargado=="false"){

                setNombre(location.state.Nombre);
                setColumnas(location.state.NumCol);
                setConsulta(location.state.Query);
                console.log("-> "+nombre);
                console.log("-> "+columnas);
                console.log("-> "+consulta);

                
                
                
    
                
                

                setCargado("true");
            }
            
        }
        EstablecerCrud();


        
        //Inicio Direcciones
        const navigate = useNavigate();
        const toA=(direccion,Nombre,estado)=>{
            navigate(direccion,{
                state:{
                    Nombre,
                    estado
                }});
        }
        //Fin Direcciones


        

        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Admin />
                    
                </div>

                <div className='MenuInfo'>
                    <h2 className='subtitulo'>REPORTE ({nombre})</h2>
                    

                    <div id='TablaCrud'>
                        <Tabla_Crud nombreTabla={nombre} datos={/*record*/ consulta} columnas={location.state.titulo} col={columnas}/>
                    </div>

                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
      
}            


export default Admin_Cruds;