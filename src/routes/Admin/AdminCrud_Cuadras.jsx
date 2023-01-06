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



function AdminCrud_Cuadras(){

        const [hidden, setHidden] = useState(true);
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [capacidad, setCapacidad] = useState();
        const [funcional, setFuncional] = useState();
        const [area, setArea] = useState();
        const [entrenador, setEntrenador] = useState();
        const [veterinario, setVeterinario] = useState();


        const [opcArea, setOpcArea] = useState();
        const [opcEntrenador, setOpcEntrenador] = useState();
        const [opcVeterinario, setOpcVeterinario] = useState();
        const [opcFuncional, setOpcFuncional] = useState();


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

                const OpArea = [
                    { value: '1', label: 'Area 1' },
                    { value: '2', label: 'Area 2' },
                    { value: '3', label: 'Area 3' },
                    { value: '4', label: 'Area 4' },
                    { value: '5', label: 'Area 5' },
                ]
                setOpcArea(OpArea);

                const OpEntrenador = [
                    { value: '1', label: 'Entrenador 1' },
                    { value: '2', label: 'Entrenador 2' },
                    { value: '3', label: 'Entrenador 3' },
                    { value: '4', label: 'Entrenador 4' },
                    { value: '5', label: 'Entrenador 5' },
                ]
                setOpcEntrenador(OpEntrenador);

                const OpVeterinario = [
                    { value: '1', label: 'Veterinario 1' },
                    { value: '2', label: 'Veterinario 2' },
                    { value: '3', label: 'Veterinario 3' },
                    { value: '4', label: 'Veterinario 4' },
                    { value: '5', label: 'Veterinario 5' },
                ]
                setOpcVeterinario(OpVeterinario);

                const OpFuncional = [
                    { value: '1', label: 'Activa' },
                    { value: '2', label: 'Inactiva' },
                ]
                setOpcFuncional(OpFuncional);

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
                
                //entrenador y veterinario pueden ser null
                if(capacidad && funcional && area ){
                    alert("Se crea con exito la cuadra")
                }
                else{
                    alert("Debe llenar los campos solicitados")
                }

            }
            else{
                if(capacidad ){alert("Se actuliza capacidad por: "+capacidad)}
                if(funcional){alert("Se funcional nombre por: "+funcional.label)}
                if(area ){alert("Se actuliza area por: "+area.label)}
                if(entrenador ){alert("Se actuliza entrenador por: "+entrenador.label)}
                if(veterinario ){alert("Se actuliza veterinario por: "+veterinario.label)}
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
 
                        <div >Capacidad</div>
                        <div ><input  type="number" onChange={e => setCapacidad(e.target.value)}></input></div>

                        <div >Funcional</div>
                        <div id='ComboboxCrud'><Select styles={customerStyles} options={opcFuncional} defaultValue={funcional}  onChange={setFuncional}  /></div>

                        <div >Area</div>
                        <div id='ComboboxCrud'><Select styles={customerStyles} options={opcArea} defaultValue={area}  onChange={setArea}  /></div>

                        <div >Entrenador</div>
                        <div id='ComboboxCrud'><Select styles={customerStyles} options={opcEntrenador} defaultValue={entrenador}  onChange={setEntrenador}  /></div>

                        <div >Veterinario</div>
                        <div id='ComboboxCrud'><Select styles={customerStyles} options={opcVeterinario} defaultValue={veterinario}  onChange={setVeterinario}  /></div>


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


export default AdminCrud_Cuadras;