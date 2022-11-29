import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Lista_Elementos from '../../Componentes/Lista_Elementos';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Barra_Busqueda from '../../Componentes/Barra_Busqueda';

import '../../StyleSheets/Usuario/Usuario_Menu_Principal.css';


function Usuario_Jinetes(){

        let jine = [
            {key: "1", Col2: "Jinete_1"},
            {key: "2", Col2: "Jinete_2"},
            {key: "3", Col2: "Jinete_3"},
            {key: "4", Col2: "Jinete_4"},
            {key: "5", Col2: "Jinete_5"},
            {key: "6", Col2: "Jinete_6"},
            {key: "7", Col2: "Jinete_7"},
            {key: "8", Col2: "Jinete_8"},
            {key: "9", Col2: "Jinete_9"},
            {key: "10", Col2: "Jinete_10"},
            {key: "11", Col2: "Jinete_11"},
            {key: "12", Col2: "Jinete_12"}
        ]

        const [jinetes, setJinetes] = useState(jine);

        const actualizarJinetes = (e,busqueda) => {
            e.preventDefault();
            console.log("Busqueda: "+busqueda);
            //Se realiza la busqueda

            if(1==1){ //De haber resultados se arman y se actualiza lo que se muestra
                let jine2 = [
                    {key: "13", Col2: "Jinete_13"},
                    {key: "14", Col2: "Jinete_14"},
                    {key: "15", Col2: "Jinete_15"},
                    {key: "16", Col2: "Jinete_16"},
                    {key: "17", Col2: "Jinete_17"},
                    {key: "18", Col2: "Jinete_18"},
                    {key: "19", Col2: "Jinete_19"},
                    {key: "20", Col2: "Jinete_20"},
                    {key: "21", Col2: "Jinete_21"},
                    {key: "22", Col2: "Jinete_22"},
                    {key: "23", Col2: "Jinete_23"},
                    {key: "24", Col2: "Jinete_24"}
                ]
                setJinetes(jine2);
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
                    <h2 className='subtitulo'>JINETES</h2>
                    <Barra_Busqueda fun={actualizarJinetes}/>
                    <Lista_Elementos elementos={jinetes} dir="/usuario_jinetes_info"/>
                </div>

                <div>
                    <Footer/>
                </div>

            </div>
        );
      
}       

export default Usuario_Jinetes;