import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';

 
import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Campo_Menu from '../../Componentes/Campo_Menu';
import Lista_Elementos_Reducida from '../../Componentes/Lista_Elementos_Reducida';
import Tabla from '../../Componentes/Tabla';

import '../../StyleSheets/Usuario/Usuario_Menu_General.css';

function Usuario_Ejemplares_Info(props){

        const location = useLocation();
        console.log("El nombre del ejemplar es: "+location.state.nombre+" de clave "+location.state.clave);

        //Columnas del record del ejemplar
        let header = ["Lugar de llegada", "Distancia", "Jinete", "Fecha","Peso del ejemplar","Tiempo"];
        
        //Estados de los valores del ejemplar
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [nombre, setNombre] = useState();
        const [pelaje, setPelaje] = useState();
        const [sexo, setSexo] = useState();
        const [nacimiento, setNacimiento] = useState();
        const [tatuaje, setTatuaje] = useState();
        const [ingreso, setIngreso] = useState();
        const [madre, setMadre] = useState();
        const [padre, setPadre] = useState();
        const [caballeriza, setCaballeriza] = useState();
        const [stud, setStud] = useState();
        const [entrenador, setEntrenador] = useState();
        const [procedencia, setProcedencia] = useState();
        const [propietarios, setPropietarios] = useState();
        const [record, setRecord] = useState();

        //Se establecen los valores de los estados 
        const EstablecerEjemplar = () => {
            if(cargado=="false"){
                setNombre("Nombre");
                setPelaje("Pelaje");
                setSexo("Sexo");
                setNacimiento("Nacimiento");
                setTatuaje("Tatuaje");
                setIngreso("Ingreso");
                setMadre("Madre");
                setPadre("Padre");
                setCaballeriza("Caballeriza");
                setStud("Stud");
                setEntrenador("Entrenador");
                setProcedencia("Procedencia");
                

                //Datos del record del ejemplar
                let reco = [
                    {Col1: "1", Col2: "1000", Col3: "Jinete",Col4: "00/00/00", Col5: "0", Col6: "00:00"},
                    {Col1: "2", Col2: "1000", Col3: "Jinete",Col4: "00/00/00", Col5: "0", Col6: "00:00"},
                    {Col1: "3", Col2: "1000", Col3: "Jinete",Col4: "00/00/00", Col5: "0", Col6: "00:00"},
                    {Col1: "4", Col2: "1000", Col3: "Jinete",Col4: "00/00/00", Col5: "0", Col6: "00:00"}
                ]
                setRecord(reco);

                //propietarios del jinete
                let prop = [
                    {key: "99", Col2: "Propietario_99"},
                    {key: "100", Col2: "Propietario_100"},
                    {key: "101", Col2: "Propietario_101"},
                    {key: "102", Col2: "Propietario_102"},
                    {key: "103", Col2: "Propietario_103"},
                    {key: "104", Col2: "Propietario_104"},
                    {key: "105", Col2: "Propietario_105"},
                    {key: "106", Col2: "Propietario_106"},
                ]
                setPropietarios(prop);

                setCargado("true");
            }
            
        }
        EstablecerEjemplar();
        
        return (
            

            <div className='bodyUsuario'>
                
                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='MenuInfo'>
                    <h2 className='subtitulo'>EJEMPLARES</h2>
                    
                    <Campo_Menu titulo="Nombre" valor={nombre}/>
                    <Campo_Menu titulo="Pelaje" valor={pelaje}/>
                    <Campo_Menu titulo="Sexo" valor={sexo}/>
                    <Campo_Menu titulo="Fecha de Nacimiento" valor={nacimiento}/>
                    <Campo_Menu titulo="Numero de Tatuaje" valor={tatuaje}/>
                    <Campo_Menu titulo="Ingreso al Hipodromo" valor={ingreso}/>
                    <Campo_Menu titulo="Madre" valor={madre}/>
                    <Campo_Menu titulo="Padre" valor={padre}/>
                    <Campo_Menu titulo="Caballeriza" valor={caballeriza}/>
                    <Campo_Menu titulo="Stud" valor={stud}/>
                    <Campo_Menu titulo="Entrenador" valor={entrenador}/>
                    <Campo_Menu titulo="Horas de Procedencia" valor={procedencia}/>
                    <div className='AtributoPropietarios'>Propietarios</div>
                    <Lista_Elementos_Reducida elementos={propietarios} dir="/usuario_propietarios_info"/>
                    <div className='AtributoPropietarios'>Record del Ejemplar</div>
                    
                </div>
                    
                <div className='TablaMenor'>
                        <Tabla datos={record} columnas={header} col={6}/>
                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
      
}            


export default Usuario_Ejemplares_Info;