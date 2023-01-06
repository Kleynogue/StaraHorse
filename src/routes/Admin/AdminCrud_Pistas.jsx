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



function AdminCrud_Pistas(){

        const [hidden, setHidden] = useState(true);
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [longitud, setLongitud] = useState();
        const [capacidad, setCapacidad] = useState();
        const [materialSelecionado, setMaterialSelecionado] = useState();
        const [material, setMaterial] = useState();

        
        const [opcMaterialSelecionado, setOpcMaterialSelecionado] = useState();
        const [opcMaterial, setOpcMaterial] = useState();


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
                
                const OpMaterial = [
                    { value: '0', label: 'No aplica' },
                    { value: '1', label: 'Material 1' },
                    { value: '2', label: 'Material 2' },
                    { value: '3', label: 'Material 3' },
                    { value: '4', label: 'Material 4' },
                    { value: '5', label: 'Material 5' },
                ]
                setOpcMaterial(OpMaterial);

                const OpMaterialSeleccionado = [
                    { value: '0', label: 'No aplica' },
                    { value: '1', label: 'Material 1' },
                    { value: '2', label: 'Material 2' },
                ]
                setOpcMaterialSelecionado(OpMaterialSeleccionado);

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
                //materialSelecionado puede ser null
                if(longitud && capacidad && material ){
                    alert("Se crea con exito ela pista")
                }
                else{
                    alert("Todos los campos deben ser llenados")
                }
            }
            else{
                if(longitud){alert("Se actuliza longitud por: "+longitud)}
                if(capacidad){alert("Se actuliza capacidad por: "+capacidad)}
                if(material ){alert("Se incorpora el material: "+material.label)}
                if(materialSelecionado){alert("Se elimina el material: "+materialSelecionado.label)}
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

                        <div >Longitud (mts)</div>
                        <div ><input  type="number" onChange={e => setLongitud(e.target.value)}></input></div>

                        <div >Capacidad</div>
                        <div ><input  type="number" onChange={e => setCapacidad(e.target.value)}></input></div>

                        <div >Material</div>
                        <div id='ComboboxCrud'><Select styles={customerStyles} options={opcMaterial} defaultValue={material}  onChange={setMaterial}  /></div>

                        <div id='mensaje'>EL ELEMENTO SELECCIONADO SERA ELIMINADO</div>
                        <div >Materiales</div>
                        <div id='ComboboxCrud'><Select styles={customerStyles} options={opcMaterialSelecionado} defaultValue={materialSelecionado}  onChange={setMaterialSelecionado}  /></div>


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


export default AdminCrud_Pistas;