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
import Nav_Admin2 from '../../Componentes/NavAdmin2';
import Lista_Reportes from '../../Componentes/Lista_Reportes';


function Reporte(){

        const location = useLocation();
        console.log("El nombre de la carrera es: "+location.state.nombre+" de clave "+location.state.clave);


        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Admin2 />
                </div>

                <div className='DLista'>
                    <h2 className='subtitulo'>REPORTE</h2>
                    <Lista_Reportes />
                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
      
}            


export default Reporte;