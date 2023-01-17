import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';
import Select from 'react-select'

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Boton_Direccion from '../../Componentes/Boton_Direccion';
import Lista_Elementos from '../../Componentes/Lista_Elementos';
import Nav_Usuario from '../../Componentes/Nav_Usuario';

import '../../StyleSheets/Usuario/Usuario_Menu_Principal.css';
import Combobox_Roles from '../../Componentes/Combobox_Roles';
import Lista_Elementos_Reducida from '../../Componentes/Lista_Elementos_Reducida';
import Tabla from '../../Componentes/Tabla';
import Tabla_Apuesta from '../../Componentes/Tabla_Apuesta';



function Usuario_Apuesta_Detalle(){
        
        const location = useLocation();
        console.log("Token Detalle Apuesta: "+location.state.token);

        //Inicio Direcciones
        const navigate = useNavigate();
        const toA=(direccion)=>{
            navigate(direccion,{
                state:{
                //Variables
                }});
        }
        //Fin Direcciones

        //Estados de las carreras
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [descripcion, setDescripcion] = useState();
        const [monto, setMonto] = useState();

        const [posicion, setPosicion] = useState();
        const [orden, setOrden] = useState();
        const [inscripcion, setInscripcion] = useState();
        const [listaApuestas, setListaApuestas] = useState();
        const [listaApuestasEnvio, setListaApuestasEnvio] = useState();

        const [opcInscripciones, setOpcInscripciones] = useState();
        const [tipoApuesta, setTipoApuesta] = useState();
        const [carrera, setCarrera] = useState();


        let header = ["Posicion", "Orden", "Inscripcion"];

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

        const arreglo = (info,NombreTabla) => {                
            return info.map( item => { 
                switch(NombreTabla){
                    case "Ejemplares":{
                        return { 
                            value: item.id,
                            label: item.ejemplar};  
                    }
                    
                }
            })
        }

        //Se establecen los valores de los estados 
        const EstablecerCarreras = () => {
            if(cargado=="false"){

                setMonto(location.state.monto);
                setDescripcion(location.state.descripcion);
                setTipoApuesta(location.state.tipo);
                setCarrera(location.state.carrera);

                //----------------
                getEjemplares()
                .then((value)=>{
                    console.log(value)
                    setOpcInscripciones(arreglo(value,"Ejemplares"));
                })
                .catch((value)=>{
                    alert("Error")
                    console.log(value)
                });



               

                let apuestasInscripcion = []
                setListaApuestas(apuestasInscripcion);
                setListaApuestasEnvio(apuestasInscripcion);
                setCargado("true");
            }
            
        }
        EstablecerCarreras();
        

        const EliminarTope= (e) => {
            e.preventDefault();
            setListaApuestasEnvio(listaApuestasEnvio.splice(listaApuestasEnvio.length,1));
            setListaApuestas(listaApuestas.splice(listaApuestas.length,1));
            console.log(listaApuestas);
        }

        const Enviar= (e) => {
            e.preventDefault();
            postAll();
        }

        

        async function getEjemplares(){
            const response = await fetch('http://starahorsebd.ddns.net/bet/edit/horse?id='+location.state.carrera, {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                credetials: 'omit',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': location.state.token.replace(/['"]+/g, '')
                } 
            });
            return response.json();
        };

        async function postAll(){
            const response = await fetch('http://starahorsebd.ddns.net/bet/edit', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credetials: 'omit',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': location.state.token.replace(/['"]+/g, '')
                },
                body: JSON.stringify({
                    tipo: location.state.tipo,
                    descripcion:location.state.descripcion,
                    monto:location.state.monto,
                    ejemplares:listaApuestasEnvio
                })
            });

            
            return response;
        };


        const handleSubmit= (e) => {
            e.preventDefault();
        
            let arrayApuestas = {
                Col1:posicion,
                Col2:listaApuestas.length+1,
                Col3: inscripcion.label,
            }

            let arrayApuestasEnvio = {
                "posicion":posicion,
                "orden":listaApuestas.length+1,
                "id": inscripcion.value,
            }

            console.log(arrayApuestas);
            setListaApuestas(listaApuestas.concat(arrayApuestas));
            setListaApuestasEnvio(listaApuestasEnvio.concat(arrayApuestasEnvio));

            console.log(listaApuestas);
        }

        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='DLista'>
                    <h2 className='subtitulo'>DETALLE APUESTA</h2>

          
                    <div className='ContFormCrud2' >
                        <form onSubmit={(e)=>handleSubmit(e)} id='FormCrud' className="FormRadioCrud">
                            <div >Posicion</div>
                            <div ><input type="number" onChange={e => setPosicion(e.target.value)} ></input></div>

                            <div >Inscripcion</div>
                            <Select styles={customerStyles} options={opcInscripciones} defaultValue={inscripcion}  onChange={setInscripcion} />


                            <div id='BotonActualizar'><Boton_Direccion  nombre="Guardar" /></div>
                        </form>
                        <div id='BotonActualizar'><Boton_Direccion fun={(e)=>EliminarTope(e)}  nombre="Eliminar" /></div>
                        <div id='BotonActualizar'><Boton_Direccion fun={(e)=>Enviar(e)}  nombre="Enviar" /></div>

                    </div>

                    <div className='tablaApuesta2'><Tabla_Apuesta datos={listaApuestas} tok={location.state.token} columnas={header} col={3}/></div>

                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
      
}            


export default Usuario_Apuesta_Detalle;