import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Boton_Direccion from '../../Componentes/Boton_Direccion';
import Lista_Elementos from '../../Componentes/Lista_Elementos';
import Nav_Usuario from '../../Componentes/Nav_Usuario';

import '../../StyleSheets/Usuario/Usuario_Menu_Principal.css';
import Combobox_Roles from '../../Componentes/Combobox_Roles';
import Lista_Elementos_Reducida from '../../Componentes/Lista_Elementos_Reducida';
import Tabla from '../../Componentes/Tabla';



function Usuario_Apuesta_Inscripcion(){
        

        const location = useLocation();
        console.log("Token Inscripcion Apuesta: "+location.state.token);

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

        let header = ["Posicion", "Orden", "Inscripcion"];

        

        //Se establecen los valores de los estados 
        const EstablecerCarreras = () => {
            if(cargado=="false"){
                
                let apuestasInscripcion = [
                    {Col1: "1", Col2: "1000", Col3: "Jinete"},
                    {Col1: "2", Col2: "1000", Col3: "Jinete"},
                    {Col1: "3", Col2: "1000", Col3: "Jinete"},
                    {Col1: "4", Col2: "1000", Col3: "Jinete"}
                ]
                setListaApuestas(apuestasInscripcion);

                setCargado("true");
            }
            
        }
        EstablecerCarreras();
        

        const ComboBoxHandleSubmit= (e,elemento,valor) => {
            e.preventDefault();
            console.log("El usuario selecciona la opcion: "+elemento);
            setP(valor);
        }


        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='DLista'>
                    <h2 className='subtitulo'>ADD</h2>

                    <div className='ContFormCrud2' >
                        <form id='FormCrud' className="FormRadioCrud">
                            <div >Posicion</div>
                            <div ><input type="number" onChange={e => setPosicion(e.target.value)} ></input></div>

                            <div >Orden</div>
                            <div ><input type="number" onChange={e => setOrden(e.target.value)} ></input></div>

                            <div >Inscripcion</div>
                            <div ><input type="number" onChange={e => setInscripcion(e.target.value)} ></input></div>


                            <div id='BotonActualizar'><Boton_Direccion  nombre="Guardar" /></div>
                        </form>
                    </div>

                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
      
}            


export default Usuario_Apuesta_Inscripcion;