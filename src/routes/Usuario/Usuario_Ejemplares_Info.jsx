import React from 'react';
import { useNavigate,useLocation } from 'react-router';

 
import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Campo_Menu from '../../Componentes/Campo_Menu';
import Lista_Elementos_Reducida from '../../Componentes/Lista_Elementos_Reducida';
import Tabla from '../../Componentes/Tabla';

import '../../StyleSheets/Usuario/Usuario_Menu_General.css';

function Usuario_Ejemplares_Info(props){

        const location = useLocation();
        console.log("El nombre del ejemplar es: "+location.state.Elemento);

        let header = ["Lugar de llegada", "Distancia", "Jinete", "Fecha","Peso del ejemplar","Tiempo"];
        let record = [
            {Col1: "1", Col2: "1000", Col3: "Jinete",Col4: "00/00/00", Col5: "0", Col6: "00:00"},
            {Col1: "2", Col2: "1000", Col3: "Jinete",Col4: "00/00/00", Col5: "0", Col6: "00:00"},
            {Col1: "3", Col2: "1000", Col3: "Jinete",Col4: "00/00/00", Col5: "0", Col6: "00:00"},
            {Col1: "3", Col2: "1000", Col3: "Jinete",Col4: "00/00/00", Col5: "0", Col6: "00:00"}
        ]
        
        const elementos = ["Propietario_1", "Propietario_2", "Propietario_3", "Propietario_4"
                     ,"Propietario_5", "Propietario_6", "Propietario_7", "Propietario_8"
                     ,"Propietario_9", "Propietario_10", "Propietario_11" , "Propietario_12"];

        
        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='MenuInfo'>
                    <h2 className='subtitulo'>EJEMPLARES</h2>
                    <Campo_Menu titulo="Nombre"/>
                    <Campo_Menu titulo="Pelaje"/>
                    <Campo_Menu titulo="Sexo"/>
                    <Campo_Menu titulo="Fecha de Nacimiento"/>
                    <Campo_Menu titulo="Numero de Tatuaje"/>
                    <Campo_Menu titulo="Ingreso al Hipodromo"/>
                    <Campo_Menu titulo="Madre"/>
                    <Campo_Menu titulo="Padre"/>
                    <Campo_Menu titulo="Caballeriza"/>
                    <Campo_Menu titulo="Stud"/>
                    <Campo_Menu titulo="Entrenador"/>
                    <Campo_Menu titulo="Horas de Procedencia"/>
                    <div className='AtributoPropietarios'>Propietarios</div>
                    <Lista_Elementos_Reducida elementos={elementos} dir="/usuario_propietarios_info"/>
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