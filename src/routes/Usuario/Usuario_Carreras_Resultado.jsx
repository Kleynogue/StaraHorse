import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Tabla from '../../Componentes/Tabla';
import Boton_Direccion_Ampliado from '../../Componentes/Boton_Direccion_Ampliado';

import '../../StyleSheets/Usuario/Usuario_Menu_Principal.css';


function Usuario_Carreras_Resultado(){

        const location = useLocation();
        console.log("El nombre de la carrera es: "+location.state.nombre+" de clave "+location.state.clave);

        //Columnas del record del ejemplar
        let COLtiem = ["Fecha", "Hora de Salida", "Hora Real", "Tiempo de Carrera"];
        let COLresu = ["ejemplar","Estado","Posicion de Llegada","Diferencia con el ganador", "Dividendo Pagado"];
        


        //Estados de los valores del ejemplar
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [tiempo, setTiempo] = useState();
        const [resultado, setResultado] = useState();



        //Se establecen los valores de los estados 
        const EstablecerResultado = () => {
            if(cargado=="false"){
                
                //Datos de la carrera
                let tiem = [
                    {Col1: "00/00/00", Col2: "00:00", Col3: "00:00",Col4: "00:00"},
                ]
                setTiempo(tiem);

                //Datos de los ejemplares
                let resu = [
                    {Col1: "Ejemplar_1", Col2: "Estado", Col3: "00",Col4: "Diferencia", Col5: "000"},
                    {Col1: "Ejemplar_2", Col2: "Estado", Col3: "00",Col4: "Diferencia", Col5: "000"},
                    {Col1: "Ejemplar_3", Col2: "Estado", Col3: "00",Col4: "Diferencia", Col5: "000"},
                    {Col1: "Ejemplar_4", Col2: "Estado", Col3: "00",Col4: "Diferencia", Col5: "000"}
                ]
                setResultado(resu);

                setCargado("true");
            }
            
        }
        EstablecerResultado();




        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='DLista'>
                    <h2 className='subtitulo'>RESULTADO</h2>
                    <div id='Ttiempo'><Tabla datos={tiempo} columnas={COLtiem} col={4}/></div>
                    <div id='Tresultado'><Tabla datos={resultado} columnas={COLresu} col={5}/></div>
                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
      
}            


export default Usuario_Carreras_Resultado;