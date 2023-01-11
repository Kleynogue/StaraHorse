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



function AdminCrud_Jinetes(){

        const [hidden, setHidden] = useState(true);
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [ci, setCi] = useState();
        const [pnombre, setPnombre] = useState();
        const [snombre, setSnombre] = useState();
        const [papellido, setPapellido] = useState();
        const [sapellido, setSapellido] = useState();
        const [altura, setAltura] = useState();
        const [peso, setPeso] = useState();
        const [nacimiento, setNacimiento] = useState();


        const [accion, setAccion] = useState();


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
                //snombre y sapellido pueden ser null
                if(ci && pnombre && papellido && nacimiento && altura && peso){
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
                if(altura){alert("Se actuliza altura por: "+altura)}
                if(peso){alert("Se actuliza peso por: "+peso)}
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
                        <div ><input  type="number" id="Jine_Pers_CI" name="Jine_Pers_CI" onChange={e => setCi(e.target.value)}></input></div>

                        <div >Primer Nombre</div>
                        <div ><input  type="text" id="Jine_Pers_p_Nombre" name="Jine_Pers_p_Nombre"  onChange={e => setPnombre(e.target.value)}></input></div>

                        <div >Segundo Nombre</div>
                        <div ><input  type="text" id="Jine_Pers_s_Nombre" name="Jine_Pers_s_Nombre"  onChange={e => setSnombre(e.target.value)}></input></div>

                        <div >Primer Apellido</div>
                        <div ><input  type="text" id="Jine_Pers_p_Apellido" name="Jine_Pers_p_Apellido"  onChange={e => setPapellido(e.target.value)}></input></div>

                        <div >Segundo Apellido</div>
                        <div ><input  type="text" id="Jine_Pers_s_Apellido" name="Jine_Pers_s_Apellido"  onChange={e => setSapellido(e.target.value)}></input></div>

                        <div >Fecha Nacimiento</div>
                        <div ><input  type="date" id="Jine_Fecha_Nac" name="Jine_Fecha_Nac"  onChange={e => setNacimiento(e.target.value)}></input></div>

                        <div >Altura</div>
                        <div ><input  type="number" id="Jine_Altura" name="Jine_Altura"  onChange={e => setAltura(e.target.value)}></input></div>

                        <div >Peso</div>
                        <div ><input  type="number" id="Jine_Peso" name="Jine_Peso"  onChange={e => setPeso(e.target.value)}></input></div>

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


export default AdminCrud_Jinetes;