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



function AdminCrud_Carreras(){

        const [hidden, setHidden] = useState(true);
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [nombre, setNombre] = useState();
        const [fecha, setFecha] = useState();
        const [numLlamado, setNumLlamado] = useState();
        const [distancia, setDistancia] = useState();
        const [descripcion, setDescripcion] = useState();
        const [edadMin, setEdadMin] = useState();
        const [edadMax, setEdadMax] = useState();
        const [sexo, setSexo] = useState();
        const [minGanadas, setMinGanadas] = useState();
        const [maxGanadas, setMaxGanadas] = useState();
        const [reclamo, setReclamo] = useState();
        const [pista, setPista] = useState();
        const [categoria, setCategoria] = useState();

        const [opcPista, setOpcPista] = useState();
        const [opcCategoria, setOpcCategoria] = useState();
        const [opcSexo, setOpcSexo] = useState();
        const [opcReclamo, setOpcReclamo] = useState();


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

                const OpPista = [
                    { value: '1', label: 'Pista 1' },
                    { value: '2', label: 'Pista 2' },
                    { value: '3', label: 'Pista 3' },
                    { value: '4', label: 'Pista 4' },
                    { value: '5', label: 'Pista 5' },
                ]
                setOpcPista(OpPista);

                const OpCategoria = [
                    { value: '1', label: 'Categoria 1' },
                    { value: '2', label: 'Categoria 2' },
                    { value: '3', label: 'Categoria 3' },
                    { value: '4', label: 'Categoria 4' },
                    { value: '5', label: 'Categoria 5' },
                ]
                setOpcCategoria(OpCategoria);

                const OpSexo = [
                    { value: '1', label: 'Caballo' },
                    { value: '2', label: 'Yegua' },
                ]
                setOpcSexo(OpSexo);

                const OpReclamo = [
                    { value: '1', label: 'Si' },
                    { value: '2', label: 'No' },
                ]
                setOpcReclamo(OpReclamo);

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

                
                //edadMax y maxGanadas pueden ser null
                if(nombre  && fecha && numLlamado && distancia && descripcion && edadMin && sexo && minGanadas && reclamo && pista && categoria){
                    alert("Se crea con exito la carrera")
                }
                else{
                    alert("Debe llenar los campos solicitados")
                }
            }
            else{
                alert("Se actualizan los datos");

                if(nombre  ){alert("Se actuliza nombre por: "+nombre)}
                if(fecha){alert("Se actuliza fecha por: "+fecha)}
                if(numLlamado){alert("Se actuliza numLlamado por: "+numLlamado)}
                if(distancia ){alert("Se actuliza distancia por: "+distancia)}
                if(descripcion){alert("Se actuliza descripcion por: "+descripcion)}
                if(edadMin){alert("Se actuliza edadMin por: "+edadMin)}
                if(edadMax){alert("Se actuliza edadMax por: "+edadMax)}
                if( sexo ){alert("Se actuliza sexo por: "+sexo.label)}
                if( minGanadas){alert("Se actuliza minGanadas por: "+minGanadas)}
                if( maxGanadas){alert("Se actuliza maxGanadas por: "+maxGanadas)}
                if( reclamo){alert("Se actuliza reclamo por: "+reclamo.label)}
                if( pista ){alert("Se actuliza pista por: "+pista.label)}
                if(categoria){alert("Se actuliza categoria por: "+categoria.label)}
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

                        <div >Fecha</div>
                        <div ><input  type="date" onChange={e => setFecha(e.target.value)}></input></div>

                        <div >Numero de Llamado</div>
                        <div ><input  type="number" onChange={e => setNumLlamado(e.target.value)}></input></div>

                        <div >Distancia</div>
                        <div ><input  type="number" onChange={e => setDistancia(e.target.value)}></input></div>

                        <div >Descripcion</div>
                        <div ><input  type="text" onChange={e => setDescripcion(e.target.value)}></input></div>

                        <div >Edad Minima</div>
                        <div ><input  type="number" onChange={e => setEdadMin(e.target.value)}></input></div>

                        <div >* Edad Maxima</div>
                        <div ><input  type="number" onChange={e => setEdadMax(e.target.value)}></input></div>

                        <div >Minimo de Ganadas</div>
                        <div ><input  type="number" onChange={e => setMinGanadas(e.target.value)}></input></div>

                        <div >* Maximo de Ganadas</div>
                        <div ><input  type="number" onChange={e => setMaxGanadas(e.target.value)}></input></div>

                        <div >Sexo</div>
                        <div id='ComboboxCrud'><Select styles={customerStyles} options={opcSexo} defaultValue={sexo}  onChange={setSexo}  /></div>

                        <div >Reclamo</div>
                        <div id='ComboboxCrud'><Select styles={customerStyles} options={opcReclamo} defaultValue={reclamo}  onChange={setReclamo}  /></div>

                        <div >Pista</div>
                        <div id='ComboboxCrud'><Select styles={customerStyles} options={opcPista} defaultValue={pista}  onChange={setPista}  /></div>

                        <div >Categoria</div>
                        <div id='ComboboxCrud'><Select styles={customerStyles} options={opcCategoria} defaultValue={categoria}  onChange={setCategoria}  /></div>

                    
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


export default AdminCrud_Carreras;