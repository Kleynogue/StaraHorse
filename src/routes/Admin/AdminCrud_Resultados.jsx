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



function AdminCrud_Resultados(){

        const location = useLocation();
        console.log("Token Cuenta Admin: "+location.state.token);

        const [hidden, setHidden] = useState(true);
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [partida, setPartida] = useState();
        const [tiempo, setTiempo] = useState();
        const [minutos, setMinutos] = useState();
        const [segundos, setSegundos] = useState();
        const [posicion, setPosicion] = useState();
        const [cuerpos, setCuerpos] = useState();
        const [carrera, setCarrera] = useState();
        const [ejemplar, setEjemplar] = useState();

        const [opcCuerpos, setOpcCuerpos] = useState();
        const [opcCarrera, setOpcCarrera] = useState();
        const [opcEjemplar, setOpcEjemplar] = useState();

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

                const OpCuerpos = [
                    { value: '1', label: 'Cuerpos 1' },
                    { value: '2', label: 'Cuerpos 2' },
                    { value: '3', label: 'Cuerpos 3' },
                    { value: '4', label: 'Cuerpos 4' },
                    { value: '5', label: 'Cuerpos 5' },
                ]
                setOpcCuerpos(OpCuerpos);

                const OpCarrera = [
                    { value: '1', label: 'Carrera 1' },
                    { value: '2', label: 'Carrera 2' },
                    { value: '3', label: 'Carrera 3' },
                    { value: '4', label: 'Carrera 4' },
                    { value: '5', label: 'Carrera 5' },
                ]
                setOpcCarrera(OpCarrera);

                const OpEjemplar = [
                    { value: '1', label: 'Ejemplar 1' },
                    { value: '2', label: 'Ejemplar 2' },
                    { value: '3', label: 'Ejemplar 3' },
                    { value: '4', label: 'Ejemplar 4' },
                    { value: '5', label: 'Ejemplar 5' },
                ]
                setOpcEjemplar(OpEjemplar);

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
                if(partida  && tiempo && minutos && segundos && posicion && cuerpos && carrera && ejemplar){
                    alert("Se crea con exito el resultado")
                }
                else{
                    alert("Todos los campos deben ser llenados")
                }
            }
            else{
                if(partida){alert("Se actuliza partida por: "+partida)}
                if(tiempo){alert("Se actuliza tiempo por: "+tiempo)}
                if(minutos){alert("Se actuliza minutos por: "+minutos)}
                if(segundos){alert("Se actuliza segundos por: "+segundos)}
                if(posicion){alert("Se actuliza posicion por: "+posicion)}
                if(cuerpos){alert("Se actuliza cuerpos por: "+cuerpos.label)}
                if(carrera){alert("Se actuliza carrera por: "+carrera.label)}
                if(ejemplar){alert("Se actuliza nombre por: "+ejemplar.label)}
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

                    
                        <div >Partida</div>
                        <div ><input  type="time" id="Resu_Hora_Partida" name="Resu_Hora_Partida"  onChange={e => setPartida(e.target.value)}></input></div>

                        <div >Posicion</div>
                        <div ><input  type="number" id="Resu_Posicion_Ejemplar" name="Resu_Posicion_Ejemplar"  onChange={e => setPosicion(e.target.value)}></input></div>

                        <div >Tiempo</div>
                        <div ><input  type="text" id="Resu_Tiempo_Carrera" name="Resu_Tiempo_Carrera"  onChange={e => setTiempo(e.target.value)}></input></div>

                        <div >Cuerpos</div>
                        <div ><input  type="number" id="Resu_FK_Cuerpos" name="Resu_FK_Cuerpos"  onChange={e => setCuerpos(e.target.value)}></input></div>

                        <div >Carrera</div>
                        <div ><input  type="number" id="Resu_FK_Inscripcion_1" name="Resu_FK_Inscripcion_1"  onChange={e => setCarrera(e.target.value)}></input></div>

                        <div >Ejemplar</div>
                        <div ><input  type="number" id="Resu_FK_Inscripcion_2" name="Resu_FK_Inscripcion_2"  onChange={e => setEjemplar(e.target.value)}></input></div>

                        
                    
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


export default AdminCrud_Resultados;