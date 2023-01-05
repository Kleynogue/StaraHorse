import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';
import Select from 'react-select'

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';

import '../../StyleSheets/Admin/Admin_Menu_Principal.css';
import Boton_Direccion from '../../Componentes/Boton_Direccion';
import Nav_Propietario from '../../Componentes/Nav_Propietario';



function Propietario_Studs_Crud(){
    const location = useLocation();
    
    const [hidden, setHidden] = useState(true);
    const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
    const [creacion, setCreacion] = useState();
    const [nombre, setNombre] = useState();
    const [propietarios, setPropietarios] = useState();
    const [propietariosSeleccionados, setPropietariosSeleccionados] = useState();
    const [propietarioEliminado, setPropietarioEliminado] = useState();
    const [porcentaje, setporcentaje] = useState();

    const [opcPropietarios, setOpcPropietarios] = useState();
    const [opcPropietariosSeleccionados, setOpcPropietariosSeleccionados] = useState();

    
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

    //Inicio Direcciones
    const navigate = useNavigate();
    const toUsuarioCuenta=(direccion)=>{
        navigate(direccion,{
            state:{
            //Variables
            }});
    }
    //Fin Direcciones

    

    const EstablecerCrud = () => {
        if(cargado=="false"){    
            
            const OpPropietarios = [
                { value: '0', label: 'Propietario 1' },
                { value: '1', label: 'Propietario 2' },
                { value: '2', label: 'Propietario 3' },
                { value: '3', label: 'Propietario 4' },
                { value: '4', label: 'Propietario 5' },
            ]
            setOpcPropietarios(OpPropietarios);

            const OpPropietariosSeleccionados = [
                { value: '0', label: 'Propietario 1' },
                { value: '1', label: 'Propietario 2' },
            ]
            setOpcPropietariosSeleccionados(OpPropietariosSeleccionados);

            if(location.state.estado=="Update"){
                setHidden(s => !s);
            } 

            setCargado("true");
        }
        
    }
    EstablecerCrud();


    const handleSubmit= (e) => {
        e.preventDefault();

        if(location.state.estado=="Create"){
            if(creacion && nombre){
                alert("Se crea con exito el stud")
            }
            else{
                alert("Todos los campos deben ser llenados")
            }
        }
        else{
            if(creacion){alert("Se actuliza creacion por: "+creacion)}
            if(nombre){alert("Se actuliza nombre por: "+nombre)}
            if(propietarios){alert("Se incorpora el propietario: "+propietarios.label)}
            if(propietariosSeleccionados && porcentaje){alert("Al propietario "+propietariosSeleccionados.label+" Se le da un porcentaje del : "+ porcentaje)}
            if(propietarioEliminado){alert("Se elimina al propietario: "+propietarioEliminado.label)}

        }
        
    }



    return (

        <div className='bodyUsuario'>

            <div>
                <Cabecera/>
                <Nav_Propietario />
                <h2 className='subtitulo'>CRUD ({location.state.Nombre})</h2>

            </div>

            
            <div id='ContFormCrud' >

                <form onSubmit={e => {handleSubmit(e)}} id='FormCrud' className="FormRadioCrud">

                    <div >ID</div>
                    <div  className='IDcrud'>{location.state.Elemento}</div>

                    <div >Nombre</div>
                    <div ><input  type="text" onChange={e => setNombre(e.target.value)}></input></div>

                    <div >Fecha de creacion</div>
                    <div ><input  type="date" onChange={e => setCreacion(e.target.value)}></input></div>

                    
                    <div >Propietarios</div>
                    <div id='ComboboxCrud'><Select styles={customerStyles} options={opcPropietarios} defaultValue={propietarios}  onChange={setPropietarios} /></div>


                    <div >Propietarios %</div>
                    <div id='ComboboxCrud'><Select styles={customerStyles} options={opcPropietariosSeleccionados} defaultValue={propietariosSeleccionados}  onChange={setPropietariosSeleccionados} /></div>
                    <div></div>
                    <div ><input  type="number" onChange={e => setporcentaje(e.target.value)}></input></div>

                    <div id='mensaje'>EL ELEMENTO SELECCIONADO SERA ELIMINADO</div>
                    <div >Propietarios</div>
                    <div id='ComboboxCrud'><Select styles={customerStyles} options={opcPropietariosSeleccionados} defaultValue={propietarioEliminado}  onChange={setPropietarioEliminado} /></div>

                    
                    <div id='BotonActualizar'><Boton_Direccion  nombre={location.state.estado} /></div>
                
                </form>

                {!hidden ? 
                    <div id='BotonEliminar'><Boton_Direccion  nombre="Delete" /></div>
                : null}
            </div>


            <div>
                <Footer/>
            </div>

        </div>

    );
  
}            


export default Propietario_Studs_Crud;