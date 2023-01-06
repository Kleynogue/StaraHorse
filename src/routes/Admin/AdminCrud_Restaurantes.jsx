import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';
import Select from 'react-select'

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';

import '../../StyleSheets/Admin/Admin_Menu_Principal.css';
import Boton_Direccion_Ampliado from '../../Componentes/Boton_Direccion_Ampliado';
import Nav_Admin from '../../Componentes/Nav_Admin';
import Boton_Direccion from '../../Componentes/Boton_Direccion';
import Combobox_Roles from '../../Componentes/Combobox_Roles';



function AdminCrud_Restaurantes(){
        const location = useLocation();

        const [hidden, setHidden] = useState(true);
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [nombre, setNombre] = useState();
        const [capacidad, setCapacidad] = useState();
        const [apertura, setApertura] = useState();
        const [cierre, setCierre] = useState();
        const [area, setArea] = useState();

        const [opcArea, setOpcArea] = useState();


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

                const OpArea = [
                    { value: '1', label: 'Area1' },
                    { value: '2', label: 'Area2' },
                    { value: '3', label: 'Area3' },
                    { value: '4', label: 'Area4' },
                    { value: '5', label: 'Area5' },
                ]
                setOpcArea(OpArea);

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
                //capacidad puede ser null
                if(nombre && apertura && cierre && area){
                    alert("Se crea con exito el restaurante")
                }
                else{
                    alert("Todos los campos deben ser llenados")
                }
            }
            else{
                if(nombre){alert("Se actuliza nombre por: "+nombre)}
                if(apertura){alert("Se actuliza apertura por: "+apertura)}
                if(cierre){alert("Se actuliza cierre por: "+cierre)}
                if(area){alert("Se actuliza area por: "+area.label)}
                if(capacidad){alert("Se actuliza capacidad por: "+capacidad)}
            }
            
        }



        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Admin />
                    <h2 className='subtitulo'>CRUD ({location.state.Nombre})</h2>

                </div>

                
                <div id='ContFormCrud' >

                    <form onSubmit={e => {handleSubmit(e)}} id='FormCrud' className="FormRadioCrud">

                        <div >ID</div>
                        <div className='IDcrud'>{location.state.Elemento}</div>

                        <div >Nombre</div>
                        <div ><input  type="text" onChange={e => setNombre(e.target.value)}></input></div>

                        <div >Capacidad</div>
                        <div ><input  type="text" onChange={e => setCapacidad(e.target.value)}></input></div>

                        {/*00:00 -> Por eso es Text*/}
                        <div >Hora de Apertura</div>
                        <div ><input  type="time" onChange={e => setApertura(e.target.value)}></input></div>

                        <div >Hora de Cierre</div>
                        <div ><input  type="time" onChange={e => setCierre(e.target.value)}></input></div>

                        <div >Se Encuentra En</div>
                        <div id='ComboboxCrud'><Select styles={customerStyles} options={opcArea} defaultValue={area}  onChange={setArea}  /></div>

                        
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


export default AdminCrud_Restaurantes;