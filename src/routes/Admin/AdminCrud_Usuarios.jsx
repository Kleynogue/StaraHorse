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



function AdminCrud_Usuarios(){

        const location = useLocation();
        console.log("Token Cuenta Admin: "+location.state.token);

        const [hidden, setHidden] = useState(true);
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [nombre, setNombre] = useState();
        const [constrasena, setConstrasena] = useState();

        const [propietario, setPropietario] = useState();
        const [jinete, setJinete] = useState();
        const [entrenador, setEntrenador] = useState();
        const [veterinario, setVeterinario] = useState();
        const [visitante, setVisitante] = useState();

        const [rol, setRol] = useState();
        const [rolSeleccionado, setRolSeleccionado] = useState();

        const [opcRol, setOpcRol] = useState();
        const [opcRolSeleccionado, setOpcRolSeleccionado] = useState();

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
                    <NavAdmin2  tok={location.state.token}/>
                    <h2 className='subtitulo'>CRUD ({location.state.Nombre})</h2>

                </div>

                
                <div id='ContFormCrud' >

                <form   method="POST" action={accion} id='FormCrud' className="FormRadioCrud">
                        
                        <div >ID</div>
                        <div  className='IDcrud'>{location.state.Elemento}</div>

                        <div >Nombre</div>
                        <div ><input  type="text" id="Usua_Nombre" name="Usua_Nombre"  onChange={e => setNombre(e.target.value)}></input></div>

                        <div >Password</div>
                        <div ><input  type="text" id="Usua_Contrasena" name="Usua_Contrasena"  onChange={e => setConstrasena(e.target.value)}></input></div>

                        <div >Rol</div>
                        <div ><input  type="number" id="Usua_FK_Rol" name="Usua_FK_Rol"  onChange={e => setRol(e.target.value)}></input></div>

                        <div >Propietario</div>
                        <div ><input  type="number" id="Usua_FK_Propietario" name="Usua_FK_Propietario"  onChange={e => setPropietario(e.target.value)}></input></div>

                        <div >Jinete</div>
                        <div ><input  type="number" id="Usua_FK_Jinete" name="Usua_FK_Jinete"  onChange={e => setJinete(e.target.value)}></input></div>

                        <div >Entrenador</div>
                        <div ><input  type="number" id="Usua_FK_Entrenador" name="Usua_FK_Entrenador"  onChange={e => setEntrenador(e.target.value)}></input></div>

                        <div >Veterinario</div>
                        <div ><input  type="number" id="Usua_FK_Veterinario" name="Usua_FK_Veterinario"  onChange={e => setVeterinario(e.target.value)}></input></div>

                        <div >Visitante</div>
                        <div ><input  type="number" id="Usua_FK_Visitante" name="Usua_FK_Visitante"  onChange={e => setVisitante(e.target.value)}></input></div>

                    
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


export default AdminCrud_Usuarios;