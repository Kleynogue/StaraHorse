import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';
import Select from 'react-select'

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Boton_Direccion from '../../Componentes/Boton_Direccion';

import Nav_Usuario from '../../Componentes/Nav_Usuario';

import '../../StyleSheets/Usuario/Usuario_Menu_Principal.css';

import Tabla from '../../Componentes/Tabla';
import Tabla_Apuesta from '../../Componentes/Tabla_Apuesta';
import Tabla_Apuesta2 from '../../Componentes/Tabla_Apuesta2';



function Usuario_Apuesta(){
        
        const location = useLocation();
        console.log("Token Apuesta: "+location.state.token);

        //Inicio Direcciones
        const navigate = useNavigate();
        const toA=(direccion,tip,mon,des,car)=>{
            navigate(direccion,{
                state:{
                    token:location.state.token,
                    tipo:tip,
                    monto:mon,
                    descripcion:des,
                    carrera:car
                }});
        }
        //Fin Direcciones

        //Estados de las carreras
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [opcTipoApuesta, setOpcTipoApuesta] = useState();
        const [tipoApuesta, setTipoApuesta] = useState();
        const [opcCarrerasActuales, setOpcCarrerasActuales] = useState();
        const [carrerasActuales, setCarrerasActuales] = useState();

        let header = ["ID","Descripcion", "Monto"];
        const [monto, setMonto] = useState();
        const [descripcion, setDescripcion] = useState();

        const [apuestasActivas, setApuestasActivas] = useState();

        const arreglo = (info,NombreTabla) => {                
            return info.map( item => { 
                switch(NombreTabla){
                    case "Tipo_Apuesta":{
                        return { 
                            value: item.id,
                            label: item.tipo};  
                    }
                    case "Apuestas_Pasadas":{
                        return { 
                            Col1: item.apue_id,
                            Col2: item.descripcion,
                            Col3: item.monto};  
                    }
                    case "Carreras":{
                        return { 
                            value: item.id,
                            label: item.carrera};  
                    }
                    
                }
            })
        }

      

        async function getApuestas(){
            const response = await fetch('http://starahorsebd.ddns.net/bet', {
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

        async function getTipoApuestas(){
            const response = await fetch('http://starahorsebd.ddns.net/bet/edit', {
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

        async function getCarrerasActuales(){
            const response = await fetch('http://starahorsebd.ddns.net/bet/edit/race', {
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

        async function postTipo_Carrera(){
            const response = await fetch('http://starahorsebd.ddns.net/bet/edit/race', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credetials: 'omit',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': location.state.token.replace(/['"]+/g, '')
                },
                body: JSON.stringify({
                    tipo: tipoApuesta.value,
                    carrera: carrerasActuales.value,
                })
            });

            
            return response;
        };

        async function postTipo_Monto(){
            const response = await fetch('http://starahorsebd.ddns.net/bet', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credetials: 'omit',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': location.state.token.replace(/['"]+/g, '')
                },
                body: JSON.stringify({
                    tipo: tipoApuesta.value,
                    monto: monto,
                })
            });

            
            return response;
        };

        //Se establecen los valores de los estados 
        const EstablecerCarreras = () => {
            if(cargado=="false"){
                //----------------
                getApuestas()
                .then((value)=>{
                    console.log(value)
                    setApuestasActivas(arreglo(value,"Apuestas_Pasadas"));
                })
                .catch((value)=>{
                    alert("Error")
                    console.log(value)
                });
                //----------------
                getTipoApuestas()
                .then((value)=>{
                    console.log(value)
                    setOpcTipoApuesta(arreglo(value,"Tipo_Apuesta"));
                })
                .catch((value)=>{
                    alert("Error")
                    console.log(value)
                });
                //----------------
                getCarrerasActuales()
                .then((value)=>{
                    console.log(value)
                    setOpcCarrerasActuales(arreglo(value,"Carreras"));
                })
                .catch((value)=>{
                    alert("Error")
                    console.log(value)
                });


                let reco = []
                setApuestasActivas(reco);

                setCargado("true");
            }
            
        }
        EstablecerCarreras();


        

        const handleSubmit= (e) => {
            e.preventDefault();
            if(tipoApuesta.value && monto && descripcion){

                postTipo_Monto()
                .then((value)=>{
                    if(!value.ok){///Todo mal
                        value.text().then(text => { alert(text) }) 
                    }
                    else{//Todo bien
                        console.log(value)
                        postTipo_Carrera().then((value)=>{
                            if(!value.ok){  //Todo mal
                                value.text().then(text => { alert(text) }) 
                            }
                            else{   //Todo bien
                                console.log(value)
                                toA("/usuario_apuestas_detalle",tipoApuesta.value,monto,descripcion,carrerasActuales.value);

                            }
                            
                        })
                        
                    }
                    
                })
                


            }
            else{
                alert("Debe llenar los datos solicitados");
            }
   
        }

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

        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='DLista'>
                    <h2 className='subtitulo'>APUESTAS</h2>

                    <div className='ContFormCrud2' >
                        <form onSubmit={(e)=>handleSubmit(e)} id='FormCrud' className="FormRadioCrud">
                            <div >Tipo Apuesta</div>
                            <Select styles={customerStyles} options={opcTipoApuesta} defaultValue={tipoApuesta}  onChange={setTipoApuesta} />
                            
                            <div >Carreras Actuales</div>
                            <Select styles={customerStyles} options={opcCarrerasActuales} defaultValue={carrerasActuales}  onChange={setCarrerasActuales} />

                            <div >Monto</div>
                            <div ><input type="number" onChange={e => setMonto(e.target.value)} ></input></div>

                            <div >Descripcion</div>
                            <div ><input type="text" onChange={e => setDescripcion(e.target.value)} ></input></div>

                            <div id='BotonActualizar'><Boton_Direccion  nombre="Guardar" /></div>
                        </form>
                    </div>

                    <div className='tablaApuesta'><Tabla_Apuesta2 datos={apuestasActivas} tok={location.state.token} columnas={header} col={3}/></div>
                    
                    
                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
      
}            


export default Usuario_Apuesta;