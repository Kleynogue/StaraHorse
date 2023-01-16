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



function Usuario_Apuesta(){
        
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
        const [opcTipoApuesta, setOpcTipoApuesta] = useState();
        const [tipoApuesta, setTipoApuesta] = useState();
        let header = ["ID", "Descripcion", "Monto", "Cobrada","Fecha","Dividendo","Tipo"];
        const [monto, setMonto] = useState();
        const [descripcion, setDescripcion] = useState();

        const [apuestasActivas, setApuestasActivas] = useState();

        const arreglo = (info,NombreTabla) => {                
            return info.map( item => { 
                switch(NombreTabla){
                    case "Tipo_Apuesta":{
                        return { 
                            value: item.tip_apu_id,
                            label: item.tip_apu_nombre};  
                    }
                    
                }
            })
        }

        const realizarConsultaReports = async () => {
                 
            fetch('http://starahorsebd.ddns.net/admin/'+"Tipo_Apuesta")
            .then((response) => response.json())
            .then((data) => {
                //console.log(data);
                console.log(arreglo(data,"Tipo_Apuesta"));
                setOpcTipoApuesta(arreglo(data,"Tipo_Apuesta"));
                //console.log("El titulo es: "+titulo);
                //toA(user,NombreTabla, arreglo(data,NombreTabla),NumCol,titulo,"/admin_reset");
            });
            
    
        }

        //Se establecen los valores de los estados 
        const EstablecerCarreras = () => {
            if(cargado=="false"){
                realizarConsultaReports();
                

                let reco = [
                    {Col1: "1", Col2: "1000", Col3: "Jinete",Col4: "00/00/00", Col5: "0", Col6: "00:00"},
                    {Col1: "2", Col2: "1000", Col3: "Jinete",Col4: "00/00/00", Col5: "0", Col6: "00:00"},
                    {Col1: "3", Col2: "1000", Col3: "Jinete",Col4: "00/00/00", Col5: "0", Col6: "00:00"},
                    {Col1: "4", Col2: "1000", Col3: "Jinete",Col4: "00/00/00", Col5: "0", Col6: "00:00"}
                ]
                setApuestasActivas(reco);
                setCargado("true");
            }
            
        }
        EstablecerCarreras();


        

        const handleSubmit= (e) => {
            e.preventDefault();
        
   
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
                        <form id='FormCrud' className="FormRadioCrud">
                            <div >Tipo Apuesta</div>
                            <Select styles={customerStyles} options={opcTipoApuesta} defaultValue={tipoApuesta}  onChange={setTipoApuesta} />

                            <div >Monto</div>
                            <div ><input type="number" onChange={e => setMonto(e.target.value)} ></input></div>

                            <div >Descripcion</div>
                            <div ><input type="text" onChange={e => setDescripcion(e.target.value)} ></input></div>

                            <div id='BotonActualizar'><Boton_Direccion  nombre="Guardar" /></div>
                        </form>
                    </div>

                    <div className='tablaApuesta'><Tabla_Apuesta datos={apuestasActivas} columnas={header} col={7}/></div>
                    
                    
                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
      
}            


export default Usuario_Apuesta;