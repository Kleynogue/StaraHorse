import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Campo_Menu from '../../Componentes/Campo_Menu';


import '../../StyleSheets/Usuario/Usuario_Menu_General.css';
import Lista_Elementos_Reducida from '../../Componentes/Lista_Elementos_Reducida';


function Usuario_Studs_Info(){

        const location = useLocation();
        console.log("El nombre del stud es: "+location.state.nombre+" de clave "+location.state.clave);

        //Estados de los valores del stud
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [nombre, setNombre] = useState();
        const [creacion, setCreacion] = useState();
        const [chaqueta, setChaqueta] = useState();
        const [gorra, setGorra] = useState();
        const [propietarios, setPropietarios] = useState();

        //Se establecen los valores de los estados 
        const EstablecerStud = () => {
            if(cargado=="false"){
                setNombre("Nombre");
                setCreacion("Creacion");
                setChaqueta("Chaqueta");
                setGorra("Gorra");


                let prop = [
                    {key: "107", Col2: "Propietario_107"},
                    {key: "108", Col2: "Propietario_108"},
                    {key: "109", Col2: "Propietario_109"},
                    {key: "110", Col2: "Propietario_110"},
                    {key: "111", Col2: "Propietario_111"},
                    {key: "112", Col2: "Propietario_112"},
                    {key: "113", Col2: "Propietario_113"},
                    {key: "114", Col2: "Propietario_114"},
                ]
                setPropietarios(prop);
                
                setCargado("true");
            }
            
        }
        EstablecerStud();




        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='MenuInfo'>
                    <h2 className='subtitulo'>STUDS</h2>
                    <Campo_Menu titulo="Nombre" valor={nombre}/>
                    <Campo_Menu titulo="Fecha de Creacion" valor={creacion}/>
                    <Campo_Menu titulo="Descripcion chaqueta" valor={chaqueta}/>
                    <Campo_Menu titulo="Descripcion gorra" valor={gorra}/>  
                    <div></div>
                    <div></div>
                    <div className='AtributoPropietarios'>Propietarios</div>
                    <Lista_Elementos_Reducida elementos={propietarios} dir="/usuario_propietarios_info"/> 
                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
      
}            


export default Usuario_Studs_Info;