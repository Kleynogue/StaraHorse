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
import Nav_Admin2 from '../../Componentes/NavAdmin2';


function Admin_Cruds(){

        const location = useLocation();
        console.log("Token Cuenta Admin: "+location.state.token);        

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

                const options = [
                    { value: 'ID', label: 'ID' },
                    { value: 'Nombre', label: 'Nombre' },
                    { value: 'Edad', label: 'Edad' },
                    { value: 'Stud', label: 'Stud' },
                    { value: 'Pelaje', label: 'Pelaje' },
                    { value: 'Peso', label: 'Peso' },
                    { value: 'Sexo', label: 'Sexo' },
                ]
                setOpcfiltrar(options);
                
                
    
                
                

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
                    estado,
                    token:location.state.token
                }});
        }
        //Fin Direcciones


        //Se actualizan los resultados al hacer una busqueda
        const filtrar = (e,busqueda) => {
            e.preventDefault();
            console.log("Busqueda: "+busqueda);
            if(parametro!=null){ //De haber resultados se arman y se actualiza lo que se muestra   
                alert('La busqueda '+busqueda+' con el parametro '+parametro); 
            }
            else{   //La busqueda no encontro resultados
                alert('Debe seleccionar por cual opcion filtra'); 
            }
        }

        //El usuario filtra por...
        const filtrarPor= (e,elemento,valor) => {
            e.preventDefault();
            console.log("El usuario selecciona la opcion: "+elemento);
            setParametro(elemento);
            if(1==1){ //Todo ocurre correctamente     
            }
            else{   //Algun error con la solicitud
            }
        }

        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Admin2  tok={location.state.token}/>
                    
                </div>

                <div className='MenuInfo'>
                    <h2 className='subtitulo'>CRUD ({nombre})</h2>
                    <div id='crudmenu'>
                        <div><Barra_Busqueda fun={filtrar}/></div>
                        <div><Combobox_Roles opciones={filtro} fun={filtrarPor} textoBoton="Filtrar Por"/></div>
                        <div><Boton_Direccion  nombre="Create" fun={()=>toA("/admin_cruds_"+nombre,nombre,"Create")} /></div>
                    </div>

                    <div id='TablaCrud'>
                        <Tabla_Crud tok={location.state.token} nombreTabla={nombre} datos={/*record*/ consulta} columnas={location.state.titulo} col={columnas}/>
                    </div>

                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
      
}            


export default Admin_Cruds;