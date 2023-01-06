import { Link} from "react-router-dom";
import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate,useLocation } from 'react-router';

import '../StyleSheets/Componentes/Nav_Usuario.css';

export function Nav_Admin2(props){


        const navigate = useNavigate();
        const toA=(Elemento,Nombre,Query,NumCol,titulo,dir,Filtro)=>{
  
            navigate(dir,{
                state:{
                    Elemento,
                    Nombre,
                    Query,
                    NumCol,
                    titulo,
                    Filtro
            }});
            console.log("El usuario es: "+Elemento);
            
        }

        //Opciones para filtrar
        const carreraFiltrar = [
            { value: 'ID', label: 'ID' },
            { value: 'Nombre', label: 'Nombre' },
            { value: 'Fecha', label: 'Fecha' },
            { value: 'Llamado', label: 'Llamado' },
            { value: 'Distancia', label: 'Distancia' },
            { value: 'Descripcion', label: 'Descripcion' },
            { value: 'Edad Min', label: 'Edad Min' },
            { value: 'Edad Max', label: 'Edad Max' },
            { value: 'Sexo', label: 'Sexo' },
            { value: 'Min Ganadas', label: 'Min Ganadas' },
            { value: 'Max Ganadas', label: 'Max Ganadas' },
            { value: 'Reclamo', label: 'Reclamo' },
            { value: 'Pista', label: 'Pista' },
            { value: 'Categoria', label: 'Categoria' },
        ]

        const ejemplarFiltrar = [
            { value: 'ID', label: 'ID' },
            { value: 'Nombre', label: 'Nombre' },
            { value: 'Tatuaje', label: 'Tatuaje' },
            { value: 'Pelaje', label: 'Pelaje' },
            { value: 'Sexo', label: 'Sexo' },
            { value: 'Fecha Nac', label: 'Fecha Nac' },
            { value: 'Fecha Ing', label: 'Stud' },
            { value: 'Padre', label: 'Padre' },
            { value: 'Madre', label: 'Madre' },
        ]

        const jineteFiltrar = [
            { value: 'ID', label: 'ID' },
            { value: 'P Nombre', label: 'P Nombre' },
            { value: 'S Nombre', label: 'S Nombre' },
            { value: 'P Apeliido', label: 'P Apeliido' },
            { value: 'S Apellido', label: 'S Apellido' },
            { value: 'CI', label: 'CI' },
            { value: 'Altura', label: 'Altura' },
            { value: 'Peso', label: 'Peso' },
            { value: 'Fecha Nac', label: 'Fecha Nac' },
        ]

        const entrenadorFiltrar = [
            { value: 'ID', label: 'ID' },
            { value: 'P Nombre', label: 'P Nombre' },
            { value: 'S Nombre', label: 'S Nombre' },
            { value: 'P Apeliido', label: 'P Apeliido' },
            { value: 'S Apellido', label: 'S Apellido' },
            { value: 'CI', label: 'CI' },
            { value: 'Fecha Nac', label: 'Fecha Nac' },
        ]

        const veterinarioFiltrar = [
            { value: 'ID', label: 'ID' },
            { value: 'P Nombre', label: 'P Nombre' },
            { value: 'S Nombre', label: 'S Nombre' },
            { value: 'P Apeliido', label: 'P Apeliido' },
            { value: 'S Apellido', label: 'S Apellido' },
            { value: 'CI', label: 'CI' },
            { value: 'Titulo', label: 'Titulo' },
            { value: 'Fecha Nac', label: 'Fecha Nac' },
        ]

        const propietarioFiltrar = [
            { value: 'ID', label: 'ID' },
            { value: 'P Nombre', label: 'P Nombre' },
            { value: 'S Nombre', label: 'S Nombre' },
            { value: 'P Apeliido', label: 'P Apeliido' },
            { value: 'S Apellido', label: 'S Apellido' },
            { value: 'CI', label: 'CI' },
            { value: 'Direccion', label: 'Direccion' },
            { value: 'Correo', label: 'Correo' },
            { value: 'Fecha Nac', label: 'Fecha Nac' },
            { value: 'Reside', label: 'Reside' },
        ]

        const studFiltrar = [
            { value: 'ID', label: 'ID' },
            { value: 'Fecha Cre', label: 'Fecha Cre' },    
            { value: 'Nombre', label: 'Nombre' },                           
        ]

        const usuarioFiltrar = [
            { value: 'ID', label: 'ID' },    
            { value: 'Nombre', label: 'Nombre' },    
            { value: 'Contrasena', label: 'Contrasena' },
            { value: 'Propietario', label: 'Propietario' },
            { value: 'Jinete', label: 'Jinete' },
            { value: 'Entrenador', label: 'Entrenador' },
            { value: 'Veterinario', label: 'Veterinario' },
            { value: 'Visitante', label: 'Visitante' },                       
        ]

        const permisoFiltrar = [
            { value: 'ID', label: 'ID' },
            { value: 'Nombre', label: 'Nombre' },  
            { value: 'Descripcion', label: 'Descripcion' },                             
        ]

        const rolFiltrar = [
            { value: 'ID', label: 'ID' },
            { value: 'Nombre', label: 'Nombre' },  
            { value: 'Descripcion', label: 'Descripcion' },                             
        ]

        const restauranteFiltrar = [
            { value: 'ID', label: 'ID' },
            { value: 'Nombre', label: 'Nombre' },  
            { value: 'Capacidad', label: 'Capacidad' },     
            { value: 'Horario', label: 'Horario' },    
            { value: 'Area', label: 'Area' },    
        ]

        const implementoFiltrar = [
            { value: 'ID', label: 'ID' },
            { value: 'Nombre', label: 'Nombre' },  
            { value: 'Abreviacion', label: 'Abreviacion' },                             
        ]

        const uniformeFiltrar = [
            { value: 'ID', label: 'ID' },
            { value: 'Tipo', label: 'Tipo' },  
            { value: 'Descripcion', label: 'Descripcion' },  
            { value: 'Estatus', label: 'Estatus' },  
            { value: 'Stud', label: 'Stud' },  
        ]

        const pistaFiltrar = [
            { value: 'ID', label: 'ID' },
            { value: 'Longitud', label: 'Longitud' },  
            { value: 'Capacidad', label: 'Capacidad' }, 
            
        ]

        const cuadraFiltrar = [
            { value: 'ID', label: 'ID' },  
            { value: 'Capacidad', label: 'Capacidad' }, 
            { value: 'Funcional', label: 'Funcional' },
            { value: 'Area', label: 'Area' },
        ]

        const resultadoFiltrar = [
            { value: 'ID', label: 'ID' },  
            { value: 'Hora Par', label: 'Hora Par' }, 
            { value: 'Tiempo', label: 'Tiempo' },
            { value: 'Posicion', label: 'Posicion' },
            { value: 'Cuerpos', label: 'Cuerpos' },
            { value: 'Carrera', label: 'Carrera' },
            { value: 'Ejemplar', label: 'Ejemplar' },
            
        ]

        const haciendaFiltrar = [
            { value: 'ID', label: 'ID' },  
            { value: 'Nombre', label: 'Nombre' }, 
            { value: 'Direccion', label: 'Direccion' },
            { value: 'Lugar', label: 'Lugar' },
        ]
        //
        

        const realizarConsulta = async (Filtro,NombreTabla,NumCol,titulo) => {
            /*        
            fetch('http://starahorse.ddns.net/Admin/'+NombreTabla)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                console.log(arreglo(data,NombreTabla));
                console.log("El titulo es: "+titulo);
                toA(user,NombreTabla, arreglo(data,NombreTabla),NumCol,titulo,"/admin_reset");
            });*/
            
            //Borrar
            let reco = [
                {Col1: "111",Col2: "Ejemplar1", Col3: "1"/*, Col4: "Stud1",Col5: "Pelaje1", Col6: "10", Col7: "Sexo"*/},
                {Col1: "222",Col2: "Ejemplar2", Col3: "2"/*, Col4: "Stud2",Col5: "Pelaje2", Col6: "20", Col7: "Sexo"*/},
                {Col1: "333",Col2: "Ejemplar3", Col3: "3"/*, Col4: "Stud3",Col5: "Pelaje3", Col6: "30", Col7: "Sexo"*/},
                {Col1: "444",Col2: "Ejemplar4", Col3: "4"/*, Col4: "Stud4",Col5: "Pelaje4", Col6: "40", Col7: "Sexo"*/}
            ]
            toA(user,NombreTabla, reco,NumCol,titulo,"/admin_reset",Filtro);
            //Borrar
        }

        const arreglo = (info,NombreTabla) => {                
                return info.map( item => { 
                    switch(NombreTabla){
                        case "Carrera":{
                            /*["ID","Nombre", "Fecha", "Llamado", "Distancia","Descripcion","Edad Min","Edad Max","Sexo","Min Ganadas","Max Ganadas","Reclamo","Pista","Categoria"]*/
                            return { 
                                Col1: item.Carr_ID,
                                Col2 : item.Carr_Nombre,
                                Col3 : item.Carr_Fecha,
                                Col4 : item.Carr_Numero_Llamado,
                                Col5 : item.Carr_Distancia,
                                Col6 : item.Carr_Descripcion,
                                Col7 : item.Carr_Edad_Min,
                                Col8 : item.Carr_Edad_Max,
                                Col9 : item.Carr_Sexo,
                                Col10 : item.Carr_Min_Carreras_Ganadas,
                                Col11 : item.Carr_Max_Carreras_Ganadas,
                                Col12 : item.Carr_Reclamo,
                                Col13 : item.Carr_FK_Pista,
                                Col14 : item.Carr_FK_Cat_Car }; 
                                
                        }
                        case "Ejemplar":{
                            /*["ID","Nombre", "Tatuaje", "Pelaje", "Sexo","Fecha Nac","Fecha Ing","Padre","Madre","Hacienda"]*/
                            return { 
                                Col1 : item.Ejem_ID,
                                Col2 : item.Ejem_Nombre,
                                Col3 : item.Ejem_Num_Tatuaje,
                                Col4 : item.Ejem_Pelaje,
                                Col5 : item.Ejem_Sexo,
                                Col6 : item.Ejem_Fecha_Nacimiento,
                                Col7 : item.Ejem_Fecha_Ingreso,
                                Col8 : item.Ejem_FK_Padre, 
                                Col9 : item.Ejem_FK_Madre,                           
                                Col10 : item.Ejem_FK_Hacienda }; 
                        }
                        case "Jinete":{
                            /*["ID","P Nombre", "S Nombre", "P Apeliido", "S Apellido","CI","Altura","Peso","Fecha Nac"]*/
                            return { 
                                Col1 : item.Jine_Pers_ID,
                                Col2 : item.Jine_Pers_p_Nombre,
                                Col3 : item.Jine_Pers_s_Nombre,
                                Col4 : item.Jine_Pers_p_Apellido,
                                Col5 : item.Jine_Pers_s_Apellido,
                                Col6 : item.Jine_Pers_CI,
                                Col7 : item.Jine_Altura,
                                Col8 : item.Jine_Peso, 
                                Col9 : item.Jine_Fecha_Nac }; 
                        }
                        case "Entrenador":{
                            /*["ID","P Nombre", "S Nombre", "P Apellido", "S Apellido","CI","Fecha Nac"]*/
                            return { 
                                Col1 : item.Entr_Pers_ID,
                                Col2 : item.Entr_Pers_p_Nombre,
                                Col3 : item.Entr_Pers_s_Nombre,
                                Col4 : item.Entr_Pers_p_Apellido,
                                Col5 : item.Entr_Pers_s_Apellido,
                                Col6 : item.Entr_Pers_CI,
                                Col7 : item.Entr_Fecha_Nac }; 
                        }
                        case "Veterinario":{
                            /*["ID","P Nombre", "S Nombre", "P Apellido", "S Apellido","CI","Titulo","Fecha Nac"]*/
                            return { 
                                Col1 : item.Vete_Pers_ID,
                                Col2 : item.Vete_Pers_p_Nombre,
                                Col3 : item.Vete_Pers_s_Nombre,
                                Col4 : item.Vete_Pers_p_Apellido,
                                Col5 : item.Vete_Pers_s_Apellido,
                                Col6 : item.Vete_Pers_CI,
                                Col7 : item.Vete_Titulo,
                                Col8 : item.Vete_Fecha_Nac }; 
                        }
                        case "Propietario":{
                            /*["1","P Nombre", "S Nombre", "P Apellido", "S Apellido","CI","Direccion","Correo","Fecha Nac","Lugar"]*/
                            return { 
                                Col1 : item.Prop_Pers_ID,
                                Col2 : item.Prop_Pers_p_Nombre,
                                Col3 : item.Prop_Pers_s_Nombre,
                                Col4 : item.Prop_Pers_p_Apellido,
                                Col5 : item.Prop_Pers_s_Apellido,
                                Col6 : item.Prop_Pers_CI,
                                Col7 : item.Prop_Direccion,
                                Col8 : item.Prop_Correo, 
                                Col9 : item.Prop_Fecha_Nac,                           
                                Col10 : item.Prop_FK_Lugar }; 
                        }
                        case "Stud":{
                            /*["ID","Fecha Cre", "Nombre"]*/
                            return { 
                                Col1 : item.Stud_ID,
                                Col2 : item.Stud_Fecha_Creacion,                         
                                Col3 : item.Stud_Nombre }; 
                        }
                        case "Usuario":{
                            /*["ID","Nombre", "Contrasena", "Propietario", "Jinete","Entrenador","Veterinario","Visitante"]*/
                            return { 
                                Col1 : item.Usua_ID,
                                Col2 : item.Usua_Nombre,
                                Col3 : item.Usua_Contrasena,
                                Col4 : item.Usua_FK_Propietario,
                                Col5 : item.Usua_FK_Jinete,
                                Col6 : item.Usua_FK_Entrenador,
                                Col7 : item.Usua_FK_Veterinario,
                                Col8 : item.Usua_FK_Visitante }; 
                        }
                        case "Rol":{
                            /*["ID","Nombre", "Descripcion"]*/
                            return { 
                                Col1 : item.Rol_ID,
                                Col2 : item.Rol_Nombre,                         
                                Col3 : item.Rol_Descripcion };
                        }
                        case "Permiso":{
                            /*["ID","Nombre", "Descripcion"]*/
                            return { 
                                Col1 : item.Perm_ID,
                                Col2 : item.Perm_Nombre,                         
                                Col3 : item.Perm_Descripcion };
                        }
                        case "Restaurante":{
                            /*["ID","Nombre", "Capacidad", "Horario", "Area"]*/
                            return { 
                                Col1 : item.Rest_ID,
                                Col2 : item.Rest_Nombre,
                                Col3 : item.Rest_Capacidad,
                                Col4 : item.Rest_FK_Horario,
                                Col5 : item.Rest_FK_Area };
                        }
                        case "Implemento":{
                            /*["ID","Nombre", "Abreviacion"]*/
                            return { 
                                Col1 : item.impl_id,
                                Col2 : item.impl_nombre,                         
                                Col3 : item.impl_abreviacion };
                        }
                        case "Uniforme":{
                            /*["ID", "Tipo", "Descripcion", "Estatus", "Stud"]*/
                            return { 
                                Col1 : item.Unif_ID,
                                Col2 : item.Unif_Tipo,
                                Col3 : item.Unif_Descripcion,
                                Col4 : item.Unif_Estatus,
                                Col5 : item.Unif_FK_Stud };
                        }
                        case "Pista":{
                            /*["ID","Longitud", "Capacidad"]*/
                            return { 
                                Col1 : item.Pist_ID,
                                Col2 : item.Pist_Longitud,                         
                                Col3 : item.Pist_Capacidad };
                        }
                        case "Grada":{
                            
                        }
                        case "Cuadra":{
                            /*["ID","Capacidad", "Funcional", "Area"] */
                            return { 
                                Col1 : item.Caba_ID,
                                Col2 : item.Caba_Capacidad,
                                Col3 : item.Caba_Funcional,
                                Col4 : item.Caba_FK_Area};
                        }
                        case "Resultado":{
                            /*["ID","Hora Par", "Tiempo", "Posicion", "Cuerpos","Ins 1","Ins 2"]*/
                            return { 
                                Col1 : item.Resu_ID,
                                Col2 : item.Resu_Hora_Partida,
                                Col3 : item.Resu_Tiempo_Carrera,
                                Col4 : item.Resu_Posicion_Ejemplar,
                                Col5 : item.Resu_FK_Cuerpos,
                                Col6 : item.Resu_FK_Inscripcion_1,
                                Col7 : item.Resu_FK_Inscripcion_2 };
                        }
                        case "Hacienda":{
                            /*["ID","Nombre", "Direccion", "Lugar"]*/
                            return { 
                                Col1 : item.Haci_ID,
                                Col2 : item.Haci_Nombre,
                                Col3 : item.Haci_Direccion,
                                Col4 : item.Haci_FK_Lugar };
                        }
                    }
                })
        }

        let user="UserName";

        return(
            <nav className="NavUsuario">
                
                <div onClick={()=>realizarConsulta(carreraFiltrar,"Carrera",14,["ID","Nombre", "Fecha", "Llamado", "Distancia","Descripcion","Edad Min","Edad Max","Sexo","Min Ganadas","Max Ganadas","Reclamo","Pista","Categoria"])}>Carreras</div>
                <div onClick={()=>realizarConsulta(ejemplarFiltrar,"Ejemplar",10,["ID","Nombre", "Tatuaje", "Pelaje", "Sexo","Fecha Nac","Fecha Ing","Padre","Madre","Hacienda"])}>Ejemplares</div>
                <div onClick={()=>realizarConsulta(jineteFiltrar,"Jinete",9,["ID","P Nombre", "S Nombre", "P Apeliido", "S Apellido","CI","Altura","Peso","Fecha Nac"])}>Jinetes</div>
                <div onClick={()=>realizarConsulta(entrenadorFiltrar,"Entrenador",7,["ID","P Nombre", "S Nombre", "P Apellido", "S Apellido","CI","Fecha Nac"])}>Entrenadores</div>
                <div onClick={()=>realizarConsulta(veterinarioFiltrar,"Veterinario",8,["ID","P Nombre", "S Nombre", "P Apellido", "S Apellido","CI","Titulo","Fecha Nac"])}>Veterinario</div>
                <div onClick={()=>realizarConsulta(propietarioFiltrar,"Propietario",10,["ID","P Nombre", "S Nombre", "P Apellido", "S Apellido","CI","Direccion","Correo","Fecha Nac","Reside"])}>Propietarios</div>      
                <div onClick={()=>realizarConsulta(studFiltrar,"Stud",3,["ID","Fecha Cre", "Nombre"])}>Studs</div>

                <div></div>

                <div onClick={()=>realizarConsulta(usuarioFiltrar,"Usuario",8,["ID","Nombre", "Contrasena", "Propietario", "Jinete","Entrenador","Veterinario","Visitante"])}>Usuarios</div>
                <div onClick={()=>realizarConsulta(rolFiltrar,"Rol",3,["ID","Nombre", "Descripcion"])}>Roles</div>
                <div onClick={()=>realizarConsulta(permisoFiltrar,"Permiso",3,["ID","Nombre", "Descripcion"])}>Permisos</div>
                <div onClick={()=>realizarConsulta(restauranteFiltrar,"Restaurante",5,["ID","Nombre", "Capacidad", "Horario", "Area"])}>Restaurantes</div>
                <div onClick={()=>realizarConsulta(implementoFiltrar,"Implemento",3,["ID","Nombre", "Abreviacion"])}>Implementos</div>
                <div onClick={()=>realizarConsulta(uniformeFiltrar,"Uniforme",5,["ID", "Tipo", "Descripcion", "Estatus", "Stud"])}>Uniformes</div>
                <div onClick={()=>realizarConsulta(pistaFiltrar,"Pista",3,["ID","Longitud", "Capacidad"])}>Pistas</div>

                <div></div>
                <div></div>

                <div onClick={()=>realizarConsulta(ejemplarFiltrar,"Grada",7)}>Gradas</div>
                <div onClick={()=>realizarConsulta(cuadraFiltrar,"Cuadra",4,["ID","Capacidad", "Funcional", "Area"])}>Cuadras</div>
                <div onClick={()=>realizarConsulta(resultadoFiltrar,"Resultado",7,["ID","Hora Par", "Tiempo", "Posicion", "Cuerpos","Carrera","Ejemplar"])}>Resultados</div>
                <div onClick={()=>realizarConsulta(haciendaFiltrar,"Hacienda",4,["ID","Nombre", "Direccion", "Lugar"])}>Haciendas</div>
                <div onClick={()=>toA("Usuario",null,null,null,null,'/admin_cuenta',null)}>Cuenta</div>
                <div></div>
            </nav>); 

}

export default Nav_Admin2;