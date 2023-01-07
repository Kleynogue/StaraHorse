import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Tabla from '../../Componentes/Tabla';
import Boton_Direccion_Ampliado from '../../Componentes/Boton_Direccion_Ampliado';

import '../../StyleSheets/Usuario/Usuario_Menu_Principal.css';


function Usuario_Carreras_Informacion(){

        const location = useLocation();
        console.log("El nombre de la carrera es: "+location.state.nombre+" de clave "+location.state.clave);

        //Inicio Direcciones
        const navigate = useNavigate();
        const toUsuarioCarreraResultado=(direccion)=>{
            navigate(direccion,{
                state:{
                nombre:location.state.nombre,
                clave:location.state.clave,
                }});
        }

        const toRecordEjemplar=(clave)=>{
            navigate('/usuario_carreras_info_record',{
                state:{
                    clave,
                }});
        }
        //Fin Direcciones

        //Columnas del record del ejemplar
        let COLprin = ["Fecha", "Hora", "Distancia", "N Llamado","Tipo de Carrera","N Carrera", "Nombre", "Categoria"];
        let COLprem = ["Llegada","Bs. a Repartir"];
        let COLfavo = ["Favoritos","Ejemplar"];
        let COLreco = ["Ejemplar","Jinete","Peso del Jinete","Fecha"];
        let COLejem = ["N","Ejemplar, Sexo, Pelaje, Edad, Peso","Padres, Origen", "Jinete, Ks, Entrenador","Propietario, Uniforme", "Implementos", "PP", "Comentarios"];


        //Estados de los valores del ejemplar
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [principal, setPrincipal] = useState();
        const [premio, setPremio] = useState();
        const [favoritos, setFavoritos] = useState();
        const [record, setRecord] = useState();
        const [ejemplares, setEjemplares] = useState();
        //const [, set] = useState();


        //Se establecen los valores de los estados 
        const EstablecerCarrera = () => {
            if(cargado=="false"){
                
                //Datos de la carrera
                let prin = [
                    {Col1: "00/00/00", Col2: "00:00", Col3: "0000",Col4: "0", Col5: "Tipo", Col6: "0", Col7: "Nombre", Col8: "Categoria"},
                ]
                setPrincipal(prin);

                //Datos del premio
                let prem = [
                    {Col1: "1", Col2: "0000"},
                    {Col1: "2", Col2: "0000"},
                    {Col1: "3", Col2: "0000"},  
                ]
                setPremio(prem);

                //Datos de los favoritos
                let favo = [
                    {Col1: "1", Col2: "Ejemplar_1"},
                    {Col1: "2", Col2: "Ejemplar_2"},
                    {Col1: "3", Col2: "Ejemplar_3"},  
                ]
                setFavoritos(favo);

                //Datos del record
                let reco = [
                    {Col1: "Ejemplar", Col2: "Jinete", Col3: "00",Col4: "00/00/00"},
                ]
                setRecord(reco);

                //Datos de los ejemplares
                const ejem = [
                    {Col1: "1", Col2: "Ejemplar_1, C, C, 5a, 100", Col3: "Padres_1, Hacienda_1", Col4: "Jinete_1, 51, Entrenador_1",Col5: "Stud_1, Descripcion_1",Col6: "Implemento", Col7: "1", Col8: "Comentario"},
                    {Col1: "2", Col2: "Ejemplar_2, C, C, 5a, 200", Col3: "Padres_2, Hacienda_2", Col4: "Jinete_2, 52, Entrenador_2",Col5: "Stud_2, Descripcion_2",Col6: "Implemento", Col7: "2", Col8: "Comentario"},
                    {Col1: "3", Col2: "Ejemplar_3, C, C, 5a, 300", Col3: "Padres_3, Hacienda_3", Col4: "Jinete_3, 53, Entrenador_3",Col5: "Stud_3, Descripcion_3",Col6: "Implemento", Col7: "3", Col8: "Comentario"},

                ]
                setEjemplares(ejem);
                


                setCargado("true");
            }
            
        }
        EstablecerCarrera();




        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='DLista'>
                    <h2 className='subtitulo'>INFORMACION DE CARRERA</h2>
                    <div id='Tprincipal'><Tabla datos={principal} columnas={COLprin} col={8}/></div>
                    <div id='Tpremio'><Tabla datos={premio} columnas={COLprem} col={2}/></div>
                    <div id='Tfavoritos'><Tabla datos={favoritos} columnas={COLfavo} col={2}/></div>
                    <div id='Trecord'><div id='TituloRecord'>Record</div><Tabla datos={record} columnas={COLreco} col={4}/></div>
                    <div id='Tejemplares'><Tabla datos={ejemplares} columnas={COLejem} col={8} fun={toRecordEjemplar}/></div>
                    
                    <div id='BotonResultados' ><Boton_Direccion_Ampliado fun={()=>toUsuarioCarreraResultado('/usuario_carreras_resultado')} nombre="Resultado"  /></div>      

                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
      
}            


export default Usuario_Carreras_Informacion;