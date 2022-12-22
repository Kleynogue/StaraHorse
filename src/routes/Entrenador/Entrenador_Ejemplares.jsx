import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Entrenador from '../../Componentes/Nav_Entrenador';
import Lista_Elementos_Boton from '../../Componentes/Lista_Elementos_Boton';

import '../../StyleSheets/Entrenador/Entrenador_Menu_Principal.css';


function Entrenador_Ejemplares(){

        const location = useLocation();
        console.log("El nombre de la carrera es: "+location.state.nombre+" de clave "+location.state.clave);


        const ListaHandleSubmit= (e,elemento,clave) => {
            e.preventDefault();
            console.log("El usuario:"+elemento);
            console.log("El usuario:"+clave);
            if(1==1){ //Usuario corecto
                alert('Se renuncio al ejemplar '+elemento); 
            }
            else{   //Usuario incorecto

            }
        }



        //Estados de los valores del ejemplar
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [ejemplares, setEjemplares] = useState();


        //Se establecen los valores de los estados 
        const EstablecerEjemplares = () => {
            if(cargado=="false"){

                let ejem = [
                    {key: "1", Col2: "Ejemplar_1"},
                    {key: "2", Col2: "Ejemplar_2"},
                    {key: "3", Col2: "Ejemplar_3"},
                    {key: "4", Col2: "Ejemplar_4"},
                    {key: "5", Col2: "Ejemplar_5"},
                    {key: "6", Col2: "Ejemplar_6"},
                    {key: "7", Col2: "Ejemplar_7"},
                    {key: "8", Col2: "Ejemplar_8"},
                    {key: "9", Col2: "Ejemplar_9"},
                    {key: "10", Col2: "Ejemplar_10"},
                    {key: "11", Col2: "Ejemplar_11"},
                    {key: "12", Col2: "Ejemplar_12"}
                ]
                setEjemplares(ejem);

                setCargado("true");
            }
            
        }
        EstablecerEjemplares();




        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Entrenador />
                </div>

                <div className='DLista'>
                    <h2 className='subtitulo'>EJEMPLARES</h2>
                    <div id="EntrenadorListaEjemplares">
                        <Lista_Elementos_Boton elementos={ejemplares} titulo="" boton="Renunciar a este Ejemplar" fun={ListaHandleSubmit}/>
                    </div>
                    
                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
      
}            


export default Entrenador_Ejemplares;