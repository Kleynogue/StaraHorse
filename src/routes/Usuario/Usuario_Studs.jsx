import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Lista_Elementos from '../../Componentes/Lista_Elementos';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Barra_Busqueda from '../../Componentes/Barra_Busqueda';

import '../../StyleSheets/Usuario/Usuario_Menu_Principal.css';


function Usuario_Studs(){


        //Estados de los studs
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [studs, setStuds] = useState();
        
        //Se establecen los valores de los estados 
        const EstablecerStuds = () => {
            if(cargado=="false"){
                
                let stu = [
                    {key: "1", Col2: "Stud_1"},
                    {key: "2", Col2: "Stud_2"},
                    {key: "3", Col2: "Stud_3"},
                    {key: "4", Col2: "Stud_4"},
                    {key: "5", Col2: "Stud_5"},
                    {key: "6", Col2: "Stud_6"},
                    {key: "7", Col2: "Stud_7"},
                    {key: "8", Col2: "Stud_8"},
                    {key: "9", Col2: "Stud_9"},
                    {key: "10", Col2: "Stud_10"},
                    {key: "11", Col2: "Stud_11"},
                    {key: "12", Col2: "Stud_12"}
                ]
                setStuds(stu);

                setCargado("true");
            }
            
        }
        EstablecerStuds();


        //Se actualizan los resultados al hacer una busqueda
        const actualizarStuds = (e,busqueda) => {
            e.preventDefault();
            console.log("Busqueda: "+busqueda);
            //Se realiza la busqueda

            if(1==1){ //De haber resultados se arman y se actualiza lo que se muestra
                let stu2 = [
                    {key: "13", Col2: "Stud_13"},
                    {key: "14", Col2: "Stud_14"},
                    {key: "15", Col2: "Stud_15"},
                    {key: "16", Col2: "Stud_16"},
                    {key: "17", Col2: "Stud_17"},
                    {key: "18", Col2: "Stud_18"},
                    {key: "19", Col2: "Stud_19"},
                    {key: "20", Col2: "Stud_20"},
                    {key: "21", Col2: "Stud_21"},
                    {key: "22", Col2: "Stud_22"},
                    {key: "23", Col2: "Stud_23"},
                    {key: "24", Col2: "Stud_24"}
                ]
                setStuds(stu2);
            }
            else{   //La busqueda no encontro resultados
                alert('No se encontraron resultados'); 
            }
        }


        return (
            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='DLista'>
                    <h2 className='subtitulo'>STUDS</h2>
                    <Barra_Busqueda fun={actualizarStuds}/>
                    <Lista_Elementos elementos={studs} dir="/usuario_studs_info" />
                </div>

                <div>
                    <Footer/>
                </div>

            </div>
        );
      
}

export default Usuario_Studs;