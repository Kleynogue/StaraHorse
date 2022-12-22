import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Jinete from '../../Componentes/Nav_Jinete';
import Tabla from '../../Componentes/Tabla';
import Boton_Direccion_Ampliado from '../../Componentes/Boton_Direccion_Ampliado';
import Combobox_Roles from '../../Componentes/Combobox_Roles';

import '../../StyleSheets/Jinete/Jinete_Menu_Principal.css';


function Jinete_Carreras_Informacion(){

        const location = useLocation();
        console.log("El nombre de la carrera es: "+location.state.nombre+" de clave "+location.state.clave);


        const ComboBoxHandleSubmit= (e,elemento,valor) => {
            e.preventDefault();
            console.log("El usuario selecciona la opcion: "+elemento);
            if(1==1){ //Todo ocurre correctamente
                console.log("Solicitud del "+elemento+" procesada con exito.");     
            }
            else{   //Algun error con la solicitud
            }
        }


       

        //Columnas del record del ejemplar
        let COLprin = ["Fecha", "Hora", "Distancia", "N Llamado","Tipo de Carrera","N Carrera", "Nombre", "Categoria"];
        let COLprem = ["Lugar de Llegada","Bs. a Repartir"];
        let COLfavo = ["Favoritos","Ejemplar"];
        let COLreco = ["Ejemplar","Jinete","Peso del Jinete","Fecha"];
        let COLejem = ["Ejemplar","Edad","Peso (Kg)","Estado", "Jinete", "Peso Jinete (Kg)", "Implementos", "Puesto de Partida", "Precio", "Comentarios"];


        //Estados de los valores del ejemplar
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [principal, setPrincipal] = useState();
        const [premio, setPremio] = useState();
        const [favoritos, setFavoritos] = useState();
        const [record, setRecord] = useState();
        const [ejemplares, setEjemplares] = useState();

        const [solicitud, setSolicitud] = useState();

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
                let ejem = [
                    {Col1: "Ejemplar_1", Col2: "00", Col3: "00",Col4: "Estado", Col5: "Jinete_1", Col6: "00", Col7: "Implemento", Col8: "00", Col9: "0000", Col10: "Comentarios"},
                    {Col1: "Ejemplar_2", Col2: "00", Col3: "00",Col4: "Estado", Col5: "Jinete_2", Col6: "00", Col7: "Implemento", Col8: "00", Col9: "0000", Col10: "Comentarios"},
                    {Col1: "Ejemplar_3", Col2: "00", Col3: "00",Col4: "Estado", Col5: "Jinete_3", Col6: "00", Col7: "Implemento", Col8: "00", Col9: "0000", Col10: "Comentarios"},
                    {Col1: "Ejemplar_4", Col2: "00", Col3: "00",Col4: "Estado", Col5: "Jinete_4", Col6: "00", Col7: "Implemento", Col8: "00", Col9: "0000", Col10: "Comentarios"},
                    {Col1: "Ejemplar_5", Col2: "00", Col3: "00",Col4: "Estado", Col5: "Jinete_5", Col6: "00", Col7: "Implemento", Col8: "00", Col9: "0000", Col10: "Comentarios"},
                    {Col1: "Ejemplar_6", Col2: "00", Col3: "00",Col4: "Estado", Col5: "Jinete_6", Col6: "00", Col7: "Implemento", Col8: "00", Col9: "0000", Col10: "Comentarios"},
                    {Col1: "Ejemplar_7", Col2: "00", Col3: "00",Col4: "Estado", Col5: "Jinete_7", Col6: "00", Col7: "Implemento", Col8: "00", Col9: "0000", Col10: "Comentarios"}
                ]
                setEjemplares(ejem);

                let soli = [
                    { value: "1", label: "Ejemplar_1"},
                    { value: "2", label: "Ejemplar_2"},
                    { value: "3", label: "Ejemplar_3"},
                    { value: "4", label: "Ejemplar_4"},
                    { value: "5", label: "Ejemplar_5"},
                    { value: "6", label: "Ejemplar_6"},
                    { value: "7", label: "Ejemplar_7"},       
                ]
                setSolicitud(soli);


                setCargado("true");
            }
            
        }
        EstablecerCarrera();




        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Jinete />
                </div>

                <div className='DLista'>
                    <h2 className='subtitulo'>INFORMACION DE CARRERA</h2>
                    <div id='Tprincipal'><Tabla datos={principal} columnas={COLprin} col={8}/></div>
                    <div id='Tpremio'><Tabla datos={premio} columnas={COLprem} col={2}/></div>
                    <div id='Tfavoritos'><Tabla datos={favoritos} columnas={COLfavo} col={2}/></div>
                    <div id='Trecord'><div id='TituloRecord'>Record</div><Tabla datos={record} columnas={COLreco} col={4}/></div>
                    <div id='Tejemplares'><Tabla datos={ejemplares} columnas={COLejem} col={10}/></div>
                    
                    <div id='ComboboxSolicitudJinete'><Combobox_Roles opciones={solicitud} fun={ComboBoxHandleSubmit} textoBoton="Solicitar"/></div>

                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
      
}            


export default Jinete_Carreras_Informacion;