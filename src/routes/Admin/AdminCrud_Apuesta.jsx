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



function AdminCrud_Apuesta(){
        const location = useLocation();
        console.log("Token Cuenta Admin: "+location.state.token);
        
        const [hidden, setHidden] = useState(true);
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [Descripcion, setDescripcion] = useState();
        const [Monto, setMonto] = useState();
        const [Cobrada, setCobrada] = useState();
        const [Fecha, setFecha] = useState();
        const [Dividendo, setDividendo] = useState();
        const [FK_Usuario, setFK_Usuario] = useState();
        const [FK_Propietario, setFK_Propietario] = useState();
        const [FK_Entrenador, setFK_Entrenador] = useState();
        const [FK_Veterinario, setFK_Veterinario] = useState();
        const [FK_Visitante, setFK_Visitante] = useState();
        const [FK_Taquilla, setFK_Taquilla] = useState();
        const [FK_Tipo_Apuesta, setFK_Tipo_Apuesta] = useState();
        
        
        
        
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
                    apue_descripcion: Descripcion,
                    apue_monto: Monto,
                    apue_cobrada: Cobrada,
                    apue_fecha: Fecha,
                    apue_dividendo: Dividendo,
                    apue_fk_usuario: FK_Usuario,
                    apue_fk_propietario: FK_Propietario,
                    apue_fk_entrenador: FK_Entrenador,
                    apue_fk_veterinario: FK_Veterinario,
                    apue_fk_visitante: FK_Visitante,
                    apue_fk_taquilla: FK_Taquilla,
                    apue_fk_tipo_apuesta: FK_Tipo_Apuesta,
                })
            });

            console.log(JSON.stringify({
                apue_descripcion: Descripcion,
                apue_monto: Monto,
                apue_cobrada: Cobrada,
                apue_fecha: Fecha,
                apue_dividendo: Dividendo,
                apue_fk_usuario: FK_Usuario,
                apue_fk_propietario: FK_Propietario,
                apue_fk_entrenador: FK_Entrenador,
                apue_fk_veterinario: FK_Veterinario,
                apue_fk_visitante: FK_Visitante,
                apue_fk_taquilla: FK_Taquilla,
                apue_fk_tipo_apuesta: FK_Tipo_Apuesta,
            }));
            return response.json();
        };
        
        
        const handleSubmit= (e) => {
            e.preventDefault();
            getConsulta();
            
            if(location.state.estado=="Create"){
                // Cobrada, Dividendo, FK_Usuario, FK_Propietario, FK_Entrenador, FK_Veterinario, FK_Visitante, FK_Taquilla   pueden ser null
                if(Descripcion && Monto && Fecha && FK_Tipo_Apuesta){
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
            
            if(Descripcion){
                return false;
            }

            if(Monto){
                return false;
            }

            if(Fecha){
                return false;
            }

            if(FK_Tipo_Apuesta){
                return false;
            }

            if(Cobrada){
                return false;
            }

            if(Dividendo){
                return false;
            }

            if(FK_Usuario){
                return false;
            }

            if(FK_Propietario){
                return false;
            }

            if(FK_Entrenador){
                return false;
            }

            if(FK_Veterinario){
                return false;
            }

            if(FK_Visitante){
                return false;
            }

            if(FK_Taquilla){
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

                        <div >Descripcion</div>
                        <div ><input  type="text"   onChange={e => setDescripcion(e.target.value)}></input></div>

                        <div >Monto</div>
                        <div ><input  type="number"   onChange={e => setMonto(e.target.value)}></input></div>

                        <div >Cobrada</div>
                        <div ><input  type="text"   onChange={e => setCobrada(e.target.value)}></input></div>

                        <div >Fecha</div>
                        <div ><input  type="date"   onChange={e => setFecha(e.target.value)}></input></div>

                
                        <div >Dividendo</div>
                        <div ><input  type="number"   onChange={e => setDividendo(e.target.value)}></input></div>

                        <div >Usuario</div>
                        <div ><input  type="number"   onChange={e => setFK_Usuario(e.target.value)}></input></div>

                        <div >Propietario</div>
                        <div ><input  type="number"   onChange={e => setFK_Propietario(e.target.value)}></input></div>

                        <div >Entrenador</div>
                        <div ><input  type="number"   onChange={e => setFK_Entrenador(e.target.value)}></input></div>

                        <div >Veterinario</div>
                        <div ><input  type="number"   onChange={e => setFK_Veterinario(e.target.value)}></input></div>

                        <div >Visitante</div>
                        <div ><input  type="number"   onChange={e => setFK_Visitante(e.target.value)}></input></div>

                        <div >Taquilla</div>
                        <div ><input  type="number"   onChange={e => setFK_Taquilla(e.target.value)}></input></div>

                        <div >Tipo_Apuesta</div>
                        <div ><input  type="number"   onChange={e => setFK_Tipo_Apuesta(e.target.value)}></input></div>

                        
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


export default AdminCrud_Apuesta;