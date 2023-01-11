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
                    
            fetch('http://starahorsebd.ddns.net/Admin/'+NombreTabla)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                console.log(arreglo(data,NombreTabla));
                console.log("El titulo es: "+titulo);
                toA(user,NombreTabla, arreglo(data,NombreTabla),NumCol,titulo,"/admin_reset");
            });
            
            
            //Borrar
            
            //let reco = [
                //{Col1: "111",Col2: "Ejemplar1", Col3: "1"/*, Col4: "Stud1",Col5: "Pelaje1", Col6: "10", Col7: "Sexo"*/},
                //{Col1: "222",Col2: "Ejemplar2", Col3: "2"/*, Col4: "Stud2",Col5: "Pelaje2", Col6: "20", Col7: "Sexo"*/},
                //{Col1: "333",Col2: "Ejemplar3", Col3: "3"/*, Col4: "Stud3",Col5: "Pelaje3", Col6: "30", Col7: "Sexo"*/},
                //{Col1: "444",Col2: "Ejemplar4", Col3: "4"/*, Col4: "Stud4",Col5: "Pelaje4", Col6: "40", Col7: "Sexo"*/}
            //]
            //toA(user,NombreTabla, reco,NumCol,titulo,"/admin_reset",Filtro);

            
            //Borrar


        }


        const realizarConsultaReports = async (Filtro,NombreTabla,NumCol,titulo) => {
                    
            fetch('http://starahorsebd.ddns.net/reports/'+NombreTabla)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                console.log(arreglo(data,NombreTabla));
                console.log("El titulo es: "+titulo);
                toA(user,NombreTabla, arreglo(data,NombreTabla),NumCol,titulo,"/admin_reset");
            });
            
            
           


        }


        const trueOfalse=(a)=>{
  
            if(a){
                return 'true';
            }
            else{return 'false'}
            
        }

        

        const arreglo = (info,NombreTabla) => {                
                return info.map( item => { 
                    switch(NombreTabla){
                        case "Carrera":{
                            /*["ID","Nombre", "Fecha", "Llamado", "Distancia","Descripcion","Edad Min","Edad Max","Sexo","Min Ganadas","Max Ganadas","Reclamo","Pista","Categoria"]*/
                            return { 
                                Col1: item.carr_id,
                                Col2 : item.carr_nombre,
                                Col3 : item.carr_fecha_hora,
                                Col4 : item.carr_numero_llamado,
                                Col5 : item.carr_distancia,
                                Col6 : item.carr_descripcion,
                                Col7 : item.carr_edad_min,
                                Col8 : item.carr_edad_max,
                                Col9 : item.carr_sexo,
                                Col10 : item.carr_min_carreras_ganadas,
                                Col11 : item.carr_max_carreras_ganadas,
                                Col12 : trueOfalse(item.carr_reclamo),
                                Col13 : item.carr_fk_pista,
                                Col14 : item.carr_fk_cat_car }; 
                                
                        }
                        case "Ejemplar":{
                            /*["ID","Nombre", "Tatuaje", "Pelaje", "Sexo","Fecha Nac","Fecha Ing","Padre","Madre","Hacienda"]*/
                            return { 
                                Col1 : item.ejem_id,
                                Col2 : item.ejem_nombre,
                                Col3 : item.ejem_num_tatuaje,
                                Col4 : item.ejem_pelaje,
                                Col5 : item.ejem_sexo,
                                Col6 : item.ejem_fecha_nacimiento,
                                Col7 : item.ejem_fecha_ingreso,
                                Col8 : item.ejem_fk_padre, 
                                Col9 : item.ejem_fk_madre,                           
                                Col10 : item.ejem_fk_hacienda }; 
                        }
                        case "Jinete":{
                            /*["ID","P Nombre", "S Nombre", "P Apeliido", "S Apellido","CI","Altura","Peso","Fecha Nac"]*/
                            return { 
                                Col1 : item.jine_pers_id,
                                Col2 : item.jine_pers_p_nombre,
                                Col3 : item.jine_pers_s_nombre,
                                Col4 : item.jine_pers_p_apellido,
                                Col5 : item.jine_pers_s_apellido,
                                Col6 : item.jine_pers_ci,
                                Col7 : item.jine_altura,
                                Col8 : item.jine_peso, 
                                Col9 : item.jine_fecha_nac }; 
                        }
                        case "Entrenador":{
                            /*["ID","P Nombre", "S Nombre", "P Apellido", "S Apellido","CI","Fecha Nac"]*/
                            return { 
                                Col1 : item.entr_pers_id,
                                Col2 : item.entr_pers_p_nombre,
                                Col3 : item.entr_pers_s_nombre,
                                Col4 : item.entr_pers_p_apellido,
                                Col5 : item.entr_pers_s_apellido,
                                Col6 : item.entr_pers_ci,
                                Col7 : item.entr_fecha_nac }; 
                        }
                        case "Veterinario":{
                            /*["ID","P Nombre", "S Nombre", "P Apellido", "S Apellido","CI","Titulo","Fecha Nac"]*/
                            return { 
                                Col1 : item.vete_pers_id,
                                Col2 : item.vete_pers_p_nombre,
                                Col3 : item.vete_pers_s_nombre,
                                Col4 : item.vete_pers_p_apellido,
                                Col5 : item.vete_pers_s_apellido,
                                Col6 : item.vete_pers_ci,
                                Col7 : item.vete_titulo,
                                Col8 : item.vete_fecha_nac }; 
                        }
                        case "Propietario":{
                            /*["1","P Nombre", "S Nombre", "P Apellido", "S Apellido","CI","Direccion","Correo","Fecha Nac","Lugar"]*/
                            return { 
                                Col1 : item.prop_pers_id,
                                Col2 : item.prop_pers_p_nombre,
                                Col3 : item.prop_pers_s_nombre,
                                Col4 : item.prop_pers_p_apellido,
                                Col5 : item.prop_pers_s_apellido,
                                Col6 : item.prop_pers_ci,
                                Col7 : item.prop_direccion,
                                Col8 : item.prop_correo, 
                                Col9 : item.prop_fecha_nac,                           
                                Col10 : item.prop_fk_lugar }; 
                        }
                        case "Stud":{
                            /*["ID","Fecha Cre", "Nombre"]*/
                            return { 
                                Col1 : item.stud_id,
                                Col2 : item.stud_fecha_creacion,                         
                                Col3 : item.stud_nombre }; 
                        }
                        case "Usuario":{
                            /*["ID","Nombre", "Contrasena", "Propietario", "Jinete","Entrenador","Veterinario","Visitante"]*/
                            return { 
                                Col1 : item.usua_id,
                                Col2 : item.usua_nombre,
                                Col3 : item.usua_contrasena,
                                Col4 : item.usua_fk_propietario,
                                Col5 : item.usua_fk_jinete,
                                Col6 : item.usua_fk_entrenador,
                                Col7 : item.usua_fk_veterinario,
                                Col8 : item.usua_fk_visitante }; 
                        }
                        case "Rol":{
                            /*["ID","Nombre", "Descripcion"]*/
                            return { 
                                Col1 : item.rol_id,
                                Col2 : item.rol_nombre,                         
                                Col3 : item.rol_descripcion };
                        }
                        case "Permiso":{
                            /*["ID","Nombre", "Descripcion"]*/
                            return { 
                                Col1 : item.perm_id,
                                Col2 : item.perm_nombre,                         
                                Col3 : item.perm_descripcion };
                        }
                        case "Restaurante":{
                            /*["ID","Nombre", "Capacidad", "Horario", "Area"]*/
                            return { 
                                Col1 : item.rest_id,
                                Col2 : item.rest_nombre,
                                Col3 : item.rest_capacidad,
                                Col4 : item.rest_fk_horario,
                                Col5 : item.rest_fk_area };
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
                                Col1 : item.unif_id,
                                Col2 : item.unif_tipo,
                                Col3 : item.unif_descripcion,
                                Col4 : item.unif_estatus,
                                Col5 : item.unif_fk_stud };
                        }
                        case "Pista":{
                            /*["ID","Longitud", "Capacidad"]*/
                            return { 
                                Col1 : item.pist_id,
                                Col2 : item.pist_longitud,                         
                                Col3 : item.pist_capacidad };
                        }
                        case "Grada":{
                            
                        }
                        case "Caballeriza":{
                            /*["ID","Capacidad", "Funcional", "Area"] */
                            return { 
                                Col1 : item.caba_id,
                                Col2 : item.caba_capacidad,
                                Col3 : trueOfalse(item.caba_funcional),
                                Col4 : item.caba_fk_area};
                        }
                        case "Resultado":{
                            /*["ID","Hora Par", "Tiempo", "Posicion", "Cuerpos","Ins 1","Ins 2"]*/
                            return { 
                                Col1 : item.resu_id,
                                Col2 : item.resu_hora_partida,
                                Col3 : item.resu_tiempo_carrera,
                                Col4 : item.resu_posicion_ejemplar,
                                Col5 : item.resu_fk_cuerpos,
                                Col6 : item.resu_fk_inscripcion_1,
                                Col7 : item.resu_fk_inscripcion_2 };
                        }
                        case "Hacienda":{
                            /*["ID","Nombre", "Direccion", "Lugar"]*/
                            return { 
                                Col1 : item.haci_id,
                                Col2 : item.haci_nombre,
                                Col3 : item.haci_direccion,
                                Col4 : item.haci_fk_lugar };
                        }
                        case "Uni_Col":{
                            /*["Nombre", "Descripcion"]*/
                            return { 
                                Col1 : item.uni_col_fk_uniforme,
                                Col2 : item.uni_col_fk_color};
                        }
                        case "Inscripcion":{
                            /*["ID","Nombre", "Fecha", "Llamado", "Distancia","Descripcion","Edad Min","Edad Max","Sexo","Min Ganadas","Max Ganadas","Reclamo","Pista","Categoria"]*/
                            return { 
                                Col1: item.insc_precio,
                                Col2 : item.insc_puesto_partida,
                                Col3 : trueOfalse(item.insc_favorito),
                                Col4 : item.insc_num_favorito,
                                Col5 : item.insc_premio_jinete,
                                Col6 : item.insc_premio_entrenador,
                                Col7 : item.insc_premio_propietario,
                                Col8 : item.insc_premio_stud,
                                Col9 : item.insc_fk_carrera,
                                Col10 : item.insc_fk_ejemplar,
                                Col11 : item.insc_fk_jinete,
                                Col12 : item.insc_num_gualdrapa,
                                Col13 : item.insc_fk_comentario}; 
                                
                        }





                        case "users":{
                            return { 
                                Col1 : item.usuario,
                                Col2 : item.rol};
                        }
                        case "horses":{
                            return { 
                                Col1 : item.edad,
                                Col2 : item.nombre,
                                Col3 : item.sexo,
                                Col4 : item.pelaje,};
                        }
                        case "implements":{
                            return { 
                                Col1 : item.nombre,
                                Col2 : item.abreviacion};
                        }
                        case "trainers":{
                            return { 
                                Col1 : item.entrenador,
                                Col2 : item.cuadra};
                        }
                        case "jockey":{
                            return { 
                                Col1 : item.nombre};
                        }
                        case "restaurants":{
                            return { 
                                Col1 : item.nombre,
                                Col2 : item.abre,
                                Col3 : item.cierra};
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
                <div onClick={()=>realizarConsulta(studFiltrar,"Uni_Col",2,["Uniforme", "Color"])}>Uni_Col</div>

                

                <div onClick={()=>realizarConsulta(usuarioFiltrar,"Usuario",8,["ID","Nombre", "Contrasena", "Propietario", "Jinete","Entrenador","Veterinario","Visitante"])}>Usuarios</div>
                <div onClick={()=>realizarConsulta(rolFiltrar,"Rol",3,["ID","Nombre", "Descripcion"])}>Roles</div>
                <div onClick={()=>realizarConsulta(permisoFiltrar,"Permiso",3,["ID","Nombre", "Descripcion"])}>Permisos</div>
                <div onClick={()=>realizarConsulta(restauranteFiltrar,"Restaurante",5,["ID","Nombre", "Capacidad", "Horario", "Area"])}>Restaurantes</div>
                <div onClick={()=>realizarConsulta(implementoFiltrar,"Implemento",3,["ID","Nombre", "Abreviacion"])}>Implementos</div>
                <div onClick={()=>realizarConsulta(uniformeFiltrar,"Uniforme",5,["ID", "Tipo", "Descripcion", "Estatus", "Stud"])}>Uniformes</div>
                <div onClick={()=>realizarConsulta(pistaFiltrar,"Pista",3,["ID","Longitud", "Capacidad"])}>Pistas</div>
                <div onClick={()=>realizarConsulta(pistaFiltrar,"Inscripcion",13,["Precio","PP", "Fav", "#Fav", "Prem Jine", "Prem Entr","Prem Prop","Prem Stud", "Carrera", "Eje Ent", "Jinete", "Gualdrapa", "Comentario"])}>Inscripciones</div>

                

                <div onClick={()=>realizarConsulta(ejemplarFiltrar,"Grada",7)}>Gradas</div>
                <div onClick={()=>realizarConsulta(cuadraFiltrar,"Caballeriza",4,["ID","Capacidad", "Funcional", "Area"])}>Cuadras</div>
                <div onClick={()=>realizarConsulta(resultadoFiltrar,"Resultado",7,["ID","Hora Par", "Tiempo", "Posicion", "Cuerpos","Carrera","Ejemplar"])}>Resultados</div>
                <div onClick={()=>realizarConsulta(haciendaFiltrar,"Hacienda",4,["ID","Nombre", "Direccion", "Lugar"])}>Haciendas</div>
                <div onClick={()=>toA("Usuario",null,null,null,null,'/admin_cuenta',null)}>Cuenta</div>

                <div onClick={()=>realizarConsultaReports(cuadraFiltrar,"users",2,["Usuario","Rol"])}>R Users</div>
                <div onClick={()=>realizarConsultaReports(cuadraFiltrar,"horses",4,["Edad","Nombre","Sexo","Pelaje"])}>R Horses</div>
                <div onClick={()=>realizarConsultaReports(cuadraFiltrar,"implements",2,["Nombre","Abreviacion"])}>R Implements</div>
                <div onClick={()=>realizarConsultaReports(cuadraFiltrar,"trainers",2,["Entrenador","Cuadra"])}>R Trainer</div>
                <div onClick={()=>realizarConsultaReports(cuadraFiltrar,"jockey",1,["Nombre"])}>R Jockey</div>
                <div onClick={()=>realizarConsultaReports(cuadraFiltrar,"restaurants",3,["Nombre", "Abre", "Cierra"])}>R Res</div>

                
            </nav>); 

}

export default Nav_Admin2;