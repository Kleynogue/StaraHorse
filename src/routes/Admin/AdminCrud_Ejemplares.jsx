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



function AdminCrud_Ejemplares(){

        const [hidden, setHidden] = useState(true);
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [sexo, setSexo] = useState();
        const [pelaje, setPelaje] = useState();
        const [padre, setPadre] = useState();
        const [madre, setMadre] = useState();
        const [hacienda, setHacienda] = useState();
        const [nombre, setNombre] = useState();
        const [tatuaje, setTatuaje] = useState();
        const [nacimiento, setNacimiento] = useState();
        const [ingreso, setIngreso] = useState();
        const [propietarios, setPropietarios] = useState();
        const [propietariosSeleccionados, setPropietariosSeleccionados] = useState();
        const [propietarioEliminado, setPropietarioEliminado] = useState();
        const [porcentaje, setporcentaje] = useState();
        const [peso, setPeso] = useState();

        const [opcPadre, setOpcPadre] = useState();
        const [opcMadre, setOpcMadre] = useState();
        const [opcHacienda, setOpcHacienda] = useState();
        const [opcSexo, setOpcSexo] = useState();
        const [opcPelaje, setOpcPelaje] = useState();
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

                const Caballos = [
                    { value: '1', label: 'Caballo1' },
                    { value: '2', label: 'Caballo2' },
                    { value: '3', label: 'Caballo3' },
                    { value: '4', label: 'Caballo4' },
                ]
                setOpcPadre(Caballos);

                const Yeguas = [
                    { value: '5', label: 'Yegua5' },
                    { value: '6', label: 'Yegua6' },
                    { value: '7', label: 'Yegua7' },
                    { value: '8', label: 'Yegua8' },
                ]
                setOpcMadre(Yeguas);

                const Haciendas = [
                    { value: '1', label: 'Hacienda1' },
                    { value: '2', label: 'Hacienda2' },
                    { value: '3', label: 'Hacienda3' },
                    { value: '4', label: 'Hacienda4' },
                ]
                setOpcHacienda(Haciendas);

                const OpSexo = [
                    { value: '0', label: 'No aplica' },
                    { value: '1', label: 'Caballo' },
                    { value: '2', label: 'Yegua' },
                ]
                setOpcSexo(OpSexo);

                const OpPelaje = [
                    { value: '0', label: 'No aplica' },
                    { value: '1', label: 'Castano' },
                    { value: '2', label: 'Alazan' },
                    { value: '3', label: 'Zaino' },
                    { value: '4', label: 'Tordillo' },
                ]
                setOpcPelaje(OpPelaje);

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
                //padre y madre pueden ser null
                if(nombre && tatuaje && nacimiento && ingreso && sexo && pelaje && hacienda){
                    alert("Se crea con exito la cuadra")
                }
                else{
                    alert("Debe llenar los campos solicitados")
                }
            }
            else{
                if(nombre ){alert("Se actuliza nombre por: "+nombre)}
                if(tatuaje){alert("Se actuliza tatuaje por: "+tatuaje)}
                if(nacimiento){alert("Se actuliza nacimiento por: "+nacimiento)}
                if(ingreso){alert("Se actuliza ingreso por: "+ingreso)}
                if(sexo){alert("Se actuliza sexo por: "+sexo.label)}
                if(pelaje){alert("Se actuliza capacidad por: "+pelaje.label)}
                if(hacienda){alert("Se actuliza capacidad por: "+hacienda.label)}
                if(padre){alert("Se actuliza padre por: "+padre.label)}
                if(madre){alert("Se actuliza capacidad por: "+madre.label)}
                if(propietarios){alert("Se incorpora el propietario: "+propietarios.label)}
                if(propietariosSeleccionados && porcentaje){alert("Al propietario "+propietariosSeleccionados.label+" Se le da un porcentaje del : "+ porcentaje)}
                if(propietarioEliminado){alert("Se elimina al propietario: "+propietarioEliminado.label)}

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

                        <div >Nombre</div>
                        <div ><input  type="text" id="Ejem_Nombre" name="Ejem_Nombre" onChange={e => setNombre(e.target.value)}></input></div>

                        <div >Tatuaje</div>
                        <div ><input  type="text" id="Ejem_Num_Tatuaje" name="Ejem_Num_Tatuaje"  onChange={e => setTatuaje(e.target.value)}></input></div>

                        <div >Fecha Nacimiento</div>
                        <div ><input  type="date" id="Ejem_Fecha_Nacimiento" name="Ejem_Fecha_Nacimiento"  onChange={e => setNacimiento(e.target.value)}></input></div>

                        <div >Fecha Ingreso</div>
                        <div ><input  type="date" id="Ejem_Fecha_Ingreso" name="Ejem_Fecha_Ingreso"  onChange={e => setIngreso(e.target.value)}></input></div>

                        <div >Sexo</div>
                        <div ><input  type="text" id="Ejem_Sexo" name="Ejem_Sexo"  onChange={e => setSexo(e.target.value)}></input></div>

                        <div >Peso</div>
                        <div ><input  type="number" id="Ejem_Peso" name="Ejem_Peso"  onChange={e => setPeso(e.target.value)}></input></div>

                        <div >Pelaje</div>
                        <div ><input  type="text" id="Ejem_Pelaje" name="Ejem_Pelaje"  onChange={e => setPelaje(e.target.value)}></input></div>
                        
                        <div >Padre</div>
                        <div ><input  type="number" id="Ejem_FK_Padre" name="Ejem_FK_Padre"  onChange={e => setPadre(e.target.value)}></input></div>
                        
                        <div >Madre</div>
                        <div ><input  type="number" id="Ejem_FK_Madre" name="Ejem_FK_Madre"  onChange={e => setMadre(e.target.value)}></input></div>
                        
                        <div >Hacienda</div>
                        <div ><input  type="number" id="Ejem_FK_Hacienda" name="Ejem_FK_Hacienda"  onChange={e => setHacienda(e.target.value)}></input></div>
                        

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


export default AdminCrud_Ejemplares;