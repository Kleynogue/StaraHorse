import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState, useEffect } from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Jinete from '../../Componentes/Nav_Jinete';

import Boton_Direccion_Ampliado from '../../Componentes/Boton_Direccion_Ampliado';
import Nav_Admin from '../../Componentes/Nav_Admin';

import Barra_Busqueda from '../../Componentes/Barra_Busqueda';
import Combobox_Roles from '../../Componentes/Combobox_Roles';
import Boton_Direccion from '../../Componentes/Boton_Direccion';


import '../../StyleSheets/Admin/Admin_Menu_Principal.css';
import Tabla from '../../Componentes/Tabla';
import Tabla_Crud from '../../Componentes/Tabla_Crud';


function Admin_Reset(){

        
        
        
        //Inicio Direcciones
        
        const location = useLocation();
        console.log("Token Cuenta Admin: "+location.state.token);
        const navigate = useNavigate();
        

        useEffect(() => {

            console.log("++> "+location.state.Nombre);
            console.log("++> "+location.state.Query);
            console.log("++> "+location.state.NumCol);
/*
            navigate("/admin_cruds",{
                state:{
                    Nombre : location.state.Nombre,
                    Query: location.state.Query,
                    NumCol:location.state.NumCol
                }});*/

            const toA= async (direccion,Nombre,Query,NumCol,titulo,Filtro)=>{
                navigate(direccion,{
                    state:{
                        Nombre,
                        Query,
                        NumCol,
                        titulo,
                        Filtro,
                        token:location.state.token
                    }});
            }
            
            
            toA("/admin_cruds",location.state.Nombre,location.state.Query,location.state.NumCol,location.state.titulo,location.state.Filtro);
            
        }, []);
        
        //Fin Direcciones

        return (
            <div></div>
        );
      
}            


export default Admin_Reset;