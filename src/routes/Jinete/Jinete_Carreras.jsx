import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Boton_Direccion from '../../Componentes/Boton_Direccion';
import Lista_Elementos from '../../Componentes/Lista_Elementos';
import Nav_Jinete from '../../Componentes/Nav_Jinete';

import '../../StyleSheets/Jinete/Jinete_Menu_Principal.css';


function Jinete_Carreras(props){


        //Estados de las carreras
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [carreras, setCarreras] = useState();
        const [fechacarrera, setFechacarrera] = useState();

        //Se establecen los valores de los estados 
        const EstablecerCarreras = () => {
            if(cargado=="false"){
                
                let carr = [
                    {key: "1", Col2: "Carrera_Numero_1"},
                    {key: "2", Col2: "Carrera_Numero_2"},
                    {key: "3", Col2: "Carrera_Numero_3"},
                    {key: "4", Col2: "Carrera_Numero_4"},
                    {key: "5", Col2: "Carrera_Numero_5"},
                    {key: "6", Col2: "Carrera_Numero_6"},
                    {key: "7", Col2: "Carrera_Numero_7"},
                    {key: "8", Col2: "Carrera_Numero_8"},
                    {key: "9", Col2: "Carrera_Numero_9"},
                    {key: "10", Col2: "Carrera_Numero_10"},
                    {key: "11", Col2: "Carrera_Numero_11"},
                    {key: "12", Col2: "Carrera_Numero_12"}
                ]
                setCarreras(carr);

                setCargado("true");
            }
            
        }
        EstablecerCarreras();
        

        //Se actualizan los resultados al hacer una busqueda
        const cargarCarreras= (e) => {
            e.preventDefault();
            console.log("Se solicitan las carreras de la fecha: "+fechacarrera);
            
            if(1==1){ //Las carreras de ese dia se pueden cargar correctamente
                let carr2 = [
                    {key: "13", Col2: "Carrera_Numero_13"},
                    {key: "14", Col2: "Carrera_Numero_14"},
                    {key: "15", Col2: "Carrera_Numero_15"},
                    {key: "16", Col2: "Carrera_Numero_16"},
                    {key: "17", Col2: "Carrera_Numero_17"},
                    {key: "18", Col2: "Carrera_Numero_18"},
                    {key: "19", Col2: "Carrera_Numero_19"},
                    {key: "20", Col2: "Carrera_Numero_20"},
                    {key: "21", Col2: "Carrera_Numero_21"},
                    {key: "22", Col2: "Carrera_Numero_22"},
                    {key: "23", Col2: "Carrera_Numero_23"},
                    {key: "24", Col2: "Carrera_Numero_24"}
                ]
                setCarreras(carr2);
            }
            else{   //Las carreras de ese dia NO se pueden cargar 
            }
        }

        return (

            <div className='bodyUsuario'>
                

                    <div>
                        <Cabecera/>
                        <Nav_Jinete />
                    </div>

                    <div className='DLista'>
                        <h2 className='subtitulo'>CARRERAS</h2>

                        <form id='FormFecha' onSubmit={e => {cargarCarreras(e)}} >
                            <div id='FechaInput'><input type="date" required onChange={e => setFechacarrera(e.target.value)}></input></div>
                            <div id='FechaBoton'><Boton_Direccion  nombre={"Seleccionar"} /></div>
                        </form> 

                        <div id="CarreraLista"><Lista_Elementos elementos={carreras} dir="/jinete_carreras_info" /></div>
                        
                        

                    </div>

                    <div>
                        <Footer/>
                    </div>   
                
            </div>

        );
      
}            


export default Jinete_Carreras;