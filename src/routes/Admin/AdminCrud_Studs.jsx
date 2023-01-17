import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';
import Select from 'react-select'

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';

import '../../StyleSheets/Admin/Admin_Menu_Principal.css';
import Boton_Direccion_Ampliado from '../../Componentes/Boton_Direccion_Ampliado';
import NavAdmin2 from '../../Componentes/NavAdmin2';
import Boton_Direccion from '../../Componentes/Boton_Direccion';
import Combobox_Roles from '../../Componentes/Combobox_Roles';



function AdminCrud_Studs(){
        const location = useLocation();
        console.log("Token Cuenta Admin: "+location.state.token);
        
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

        const [accion, setAccion] = useState();
        
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
                    setAccion('http://starahorsebd.ddns.net/admin/'+location.state.Nombre+'/edit/'+location.state.Elemento);
                }
                else{
                    setAccion('http://starahorsebd.ddns.net/admin/'+location.state.Nombre+'/create');
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
                    <NavAdmin2  tok={location.state.token}/>
                    <h2 className='subtitulo'>CRUD ({location.state.Nombre})</h2>

                </div>

                
                <div id='ContFormCrud' >

                    <form   method="POST" action={accion} id='FormCrud' className="FormRadioCrud">

                        <div >ID</div>
                        <div  className='IDcrud'>{location.state.Elemento}</div>

                        <div >Nombre</div>
                        <div ><input  type="text" id="Stud_Nombre" name="Stud_Nombre"  onChange={e => setNombre(e.target.value)}></input></div>

                        <div >Fecha de creacion</div>
                        <div ><input  type="date" id="Stud_Fecha_Creacion" name="Stud_Fecha_Creacion"  onChange={e => setCreacion(e.target.value)}></input></div>

                        
                        <div id='BotonActualizar'><Boton_Direccion  nombre={location.state.estado} /></div>
                    
                    </form>

                    {!hidden ? 
                        <form  id='BotonEliminar'  method="POST" action={'http://starahorsebd.ddns.net/admin/'+location.state.Nombre+'/'+location.state.Elemento}>
                            <div ><Boton_Direccion  nombre="Delete" /></div>
                        </form>
                    : null}
                </div>


                <div>
                    <Footer/>
                </div>

            </div>

        );
      
}            


export default AdminCrud_Studs;