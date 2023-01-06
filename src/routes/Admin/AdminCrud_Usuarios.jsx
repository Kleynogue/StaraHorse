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



function AdminCrud_Usuarios(){

        const [hidden, setHidden] = useState(true);
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [nombre, setNombre] = useState();
        const [constrasena, setConstrasena] = useState();
        const [rol, setRol] = useState();
        const [rolSeleccionado, setRolSeleccionado] = useState();

        const [opcRol, setOpcRol] = useState();
        const [opcRolSeleccionado, setOpcRolSeleccionado] = useState();



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

        const location = useLocation();
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

                const OpRol = [
                    { value: '1', label: 'Rol 1' },
                    { value: '2', label: 'Rol 2' },
                    { value: '3', label: 'Rol 3' },
                    { value: '4', label: 'Rol 4' },
                ]
                setOpcRol(OpRol);

                const OpRolSelec = [
                    { value: '1', label: 'Rol 1' },
                    { value: '2', label: 'Rol 2' },
                ]
                setOpcRolSeleccionado(OpRolSelec);

               
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
                //rol y rolSeleccionado pueden ser null
                if(nombre && constrasena){
                    alert("Se crea con exito el Usuario")
                }
                else{
                    alert("Todos los campos deben ser llenados")
                }
            }
            else{
                if(nombre){alert("Se actuliza nombre por: "+nombre)}
                if(constrasena){alert("Se actuliza constrasena por: "+constrasena)}
                if(rol){alert("Se incorpora el rol: "+rol.label)}
                if(rolSeleccionado){alert("Se elimina el rol: "+rolSeleccionado.label)}
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
                        <div  className='IDcrud'>{location.state.Elemento}</div>

                        <div >Nombre</div>
                        <div ><input  type="text" onChange={e => setNombre(e.target.value)}></input></div>

                        <div >Password</div>
                        <div ><input  type="text" onChange={e => setConstrasena(e.target.value)}></input></div>

                        <div >Rol</div>
                        <div id='ComboboxCrud'><Select styles={customerStyles} options={opcRol} defaultValue={rol}  onChange={setRol}  /></div>

                        <div id='mensaje'>EL ELEMENTO SELECCIONADO SERA ELIMINADO</div>
                        <div >Rol</div>
                        <div id='ComboboxCrud'><Select styles={customerStyles} options={opcRolSeleccionado} defaultValue={rolSeleccionado}  onChange={setRolSeleccionado} /></div>

                    
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


export default AdminCrud_Usuarios;