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



function AdminCrud_Tipo_Apuesta(){
        const location = useLocation();
        
        const [hidden, setHidden] = useState(true);
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [nombre, setNombre] = useState();
        const [descripcion, setDescripcion] = useState();
        const [maxEjemplares, setMaxEjemplares] = useState();
        const [minEjemplares, setMinEjemplares] = useState();
        const [minApuesta, setMinApuesta] = useState();
        const [ultimasCarValidas, setUltimasCarValidas] = useState();

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
            alert("Se realiza el fetch");
            const response = await fetch(accion, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credetials: 'omit',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    tip_apu_nombre: nombre,
                    tip_apu_descripcion:descripcion,
                    tip_apu_max_ejemplares: maxEjemplares,
                    tip_apu_min_ejemplares_carr: minEjemplares,
                    tip_apu_min_apuesta: minApuesta,
                    tip_apu_ultimas_car_validas: ultimasCarValidas,
                    
                })
            });
            
            return response.json();
        };

        const handleSubmit= (e) => {
            e.preventDefault();
            
            getConsulta();
            if(location.state.estado=="Create"){
                // minEjemplares y ultimasCarValidas pueden ser null
                if(nombre && descripcion && maxEjemplares && minApuesta){
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
            
            if(maxEjemplares>5  && maxEjemplares <0){
                return false;
            }

            if(minEjemplares> 1 /*maxEjemplares*/ && minEjemplares<0){
                return false;
            }
            if(minApuesta<0){
                return false;
            }

            return true;
                
        }


        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Admin />
                    <h2 className='subtitulo'>CRUD ({location.state.Nombre})</h2>

                </div>

                
                <div id='ContFormCrud' >

                    <form   onSubmit={(e)=>handleSubmit(e)} id='FormCrud' className="FormRadioCrud">

                        <div >ID</div>
                        <div  className='IDcrud'>{location.state.Elemento}</div>
                        
                        <div >Nombre</div>
                        <div ><input  type="text"   onChange={e => setNombre(e.target.value)}></input></div>

                        <div >Descripcion</div>
                        <div ><input  type="text"   onChange={e => setDescripcion(e.target.value)}></input></div>

                        <div >MaxEjemplares</div>
                        <div ><input  type="number"   onChange={e => setMaxEjemplares(e.target.value)}></input></div>

                        <div >MinEjemplares</div>
                        <div ><input  type="number"   onChange={e => setMinEjemplares(e.target.value)}></input></div>

                        <div >MinApuesta</div>
                        <div ><input  type="number"   onChange={e => setMinApuesta(e.target.value)}></input></div>

                        <div >UltimasCarValidas</div>
                        <div ><input  type="number"   onChange={e => setUltimasCarValidas(e.target.value)}></input></div>

                        
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


export default AdminCrud_Tipo_Apuesta;