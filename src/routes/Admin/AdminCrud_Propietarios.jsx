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



function AdminCrud_Propietarios(){
        const location = useLocation();

        const [hidden, setHidden] = useState(true);
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [ci, setCi] = useState();
        const [pnombre, setPnombre] = useState();
        const [snombre, setSnombre] = useState();
        const [papellido, setPapellido] = useState();
        const [sapellido, setSapellido] = useState();
        const [nacimiento, setNacimiento] = useState();
        const [correo, setCorreo] = useState();
        const [direccion, setDireccion] = useState();
        const [reside, setReside] = useState();
        const [tipo, setTipo] = useState();
        const [telefonos, setTelefonos] = useState();
        const [telefono, setTelefono] = useState();

        const [opcTelefonos, setOpcTelefonos] = useState();
        const [opcTipo, setOpcTipo] = useState();
        const [opcReside, setOpcReside] = useState();

        const [accion, setAccion] = useState();

        //Inicio Direcciones
        const navigate = useNavigate();
        const toUsuarioCuenta=(direccion)=>{
            navigate(direccion,{
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

        const EstablecerCrud = () => {
            if(cargado=="false"){    

                const tele = [
                    {value: "120", label: "Telefono_120"},
                    {value: "121", label: "Telefono_121"},
                    {value: "122", label: "Telefono_122"},
                    {value: "123", label: "Telefono_123"},
                    {value: "124", label: "Telefono_124"},
                    {value: "125", label: "Telefono_125"}
                ]
                setOpcTelefonos(tele);
                
                const OpcTipoTelefono = [
                    {value: "1", label: "Local"},
                    {value: "2", label: "Celular"},
                ]
                setOpcTipo(OpcTipoTelefono);

                const OpcReside = [
                    { value: '1', label: 'Lugar 1' },
                    { value: '2', label: 'Lugar 2' },
                    { value: '3', label: 'Lugar 3' },
                    { value: '4', label: 'Lugar 4' },
                    { value: '5', label: 'Lugar 5' },
                ]
                setOpcReside(OpcReside);

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
                //snombre, sapellido, correo, direccion y reside pueden ser null
                if(ci && pnombre && papellido && nacimiento){
                    alert("Se crea con exito el jinete")
                }
                else{
                    alert("Todos los campos deben ser llenados")
                }
            }
            else{
                if(ci){alert("Se actuliza ci por: "+ci)}
                if(pnombre){alert("Se actuliza pnombre por: "+pnombre)}
                if(snombre){alert("Se actuliza snombre por: "+snombre)}
                if(papellido){alert("Se actuliza papellido por: "+papellido)}
                if(sapellido){alert("Se actuliza sapellido por: "+sapellido)}
                if(nacimiento){alert("Se actuliza nacimiento por: "+nacimiento)}
                if(correo){alert("Se actuliza correo por: "+correo)}
                if(direccion){alert("Se actuliza direccion por: "+direccion)}
                if(reside){alert("Se actuliza reside por: "+reside.label)}
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

                    <form   method="POST" action={accion} id='FormCrud' className="FormRadioCrud">

                        <div >ID</div>
                        <div  className='IDcrud'>{location.state.Elemento}</div>

                        <div >CI</div>
                        <div ><input  type="number" id="Prop_Pers_CI" name="Prop_Pers_CI" onChange={e => setCi(e.target.value)}></input></div>

                        <div >Primer Nombre</div>
                        <div ><input  type="text" id="Prop_Pers_p_Nombre" name="Prop_Pers_p_Nombre"  onChange={e => setPnombre(e.target.value)}></input></div>

                        <div >Segundo Nombre</div>
                        <div ><input  type="text" id="Prop_Pers_s_Nombre" name="Prop_Pers_s_Nombre"  onChange={e => setSnombre(e.target.value)}></input></div>

                        <div >Primer Apellido</div>
                        <div ><input  type="text" id="Prop_Pers_p_Apellido" name="Prop_Pers_p_Apellido"  onChange={e => setPapellido(e.target.value)}></input></div>

                        <div >Segundo Apellido</div>
                        <div ><input  type="text" id="Prop_Pers_s_Apellido" name="Prop_Pers_s_Apellido"  onChange={e => setSapellido(e.target.value)}></input></div>

                        <div >Correo</div>
                        <div ><input  type="text" id="Prop_Correo" name="Prop_Correo"  onChange={e => setCorreo(e.target.value)}></input></div>

                        <div >Direccion</div>
                        <div ><input  type="text" id="Prop_Direccion" name="Prop_Direccion"  onChange={e => setDireccion(e.target.value)}></input></div>

                        <div >Reside</div>
                        <div ><input  type="number" id="Prop_FK_Lugar" name="Prop_FK_Lugar"  onChange={e => setReside(e.target.value)}></input></div>

                        <div >Fecha Nacimiento</div>
                        <div ><input  type="date" id="Prop_Fecha_Nac" name="Prop_Fecha_Nac"  onChange={e => setNacimiento(e.target.value)}></input></div>

                        
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


export default AdminCrud_Propietarios;