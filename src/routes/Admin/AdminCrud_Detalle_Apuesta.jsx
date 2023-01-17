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



function AdminCrud_Detalle_Apuesta(){
        const location = useLocation();
        console.log("Token Cuenta Admin: "+location.state.token);
        
        const [hidden, setHidden] = useState(true);
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [posicion, setPosicion] = useState();
        const [orden, setOrden] = useState();
        const [apuesta, setApuesta] = useState();
        const [inscripcion, setInscripcion] = useState();
        

        
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

        async function getConsulta(){
            const response = await fetch(accion, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credetials: 'omit',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Det_Apu_Posicion: posicion,
                    Det_Apu_Orden: orden,
                    Det_Apu_FK_Apuesta: apuesta,
                    Det_Apu_FK_Inscripcion: inscripcion, 
                })
            });
            console.log(JSON.stringify({
                det_apu_posicion: posicion,
                det_apu_orden: orden,
                det_apu_fk_apuesta: apuesta,
                det_apu_fk_inscripcion: inscripcion, 
            }));
            return response.json();
        };

        const handleSubmit= (e) => {
            e.preventDefault();
            getConsulta();
            if(location.state.estado=="Create"){
                // orden pueden ser null
                if(posicion && apuesta && inscripcion){
                    alert("Se crea con exito el veterinario")
                }
                else{
                    alert("Todos los campos deben ser llenados")
                }
            }
            else{
                
            }
            
            
        }

        const ValidarDatos= () => {
            
            if(posicion){
                return false;
            }

            if(orden){
                return false;
            }

            if(apuesta){
                return false;
            }

            if(inscripcion){
                return false;
            }

            return true;
                
        }


        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <NavAdmin2  tok={location.state.token}/>
                    <h2 className='subtitulo'>CRUD ({location.state.Nombre})</h2>

                </div>

                
                <div id='ContFormCrud' >

                    <form   onSubmit={(e)=>handleSubmit(e)} id='FormCrud' className="FormRadioCrud">

                        <div >ID</div>
                        <div  className='IDcrud'>{location.state.Elemento}</div>

                        <div >Posicion</div>
                        <div ><input  type="number"   onChange={e => setPosicion(e.target.value)}></input></div>

                        <div >Orden</div>
                        <div ><input  type="number"   onChange={e => setOrden(e.target.value)}></input></div>

                        <div >Apuesta</div>
                        <div ><input  type="number"   onChange={e => setApuesta(e.target.value)}></input></div>

                        <div >Inscripcion</div>
                        <div ><input  type="number"   onChange={e => setInscripcion(e.target.value)}></input></div>

                        
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


export default AdminCrud_Detalle_Apuesta;