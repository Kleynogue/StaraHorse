import { useNavigate,useLocation } from 'react-router';

import '../StyleSheets/Componentes/Lista_Elementos.css';

function Lista_Crud(props) {

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

             

                


    const elementos = [
        {Col1: "Carrera", Col2: "Carrera", Col3:14, Col4:["ID","Nombre", "Fecha", "Llamado", "Distancia","Descripcion","Edad Min","Edad Max","Sexo","Min Ganadas","Max Ganadas","Reclamo","Pista","Categoria"]},
        {Col1: "Ejemplar", Col2: "Ejemplar", Col3:10, Col4:["ID","Nombre", "Tatuaje", "Pelaje", "Sexo","Fecha Nac","Fecha Ing","Padre","Madre","Hacienda"]},
        {Col1: "Jinete", Col2: "Jinete", Col3:9, Col4:["ID","P Nombre", "S Nombre", "P Apeliido", "S Apellido","CI","Altura","Peso","Fecha Nac"]},
        {Col1: "Entrenador", Col2: "Entrenador", Col3:7, Col4:["ID","P Nombre", "S Nombre", "P Apellido", "S Apellido","CI","Fecha Nac"]},
        {Col1: "Veterinario", Col2: "Veterinario", Col3:8, Col4:["ID","P Nombre", "S Nombre", "P Apellido", "S Apellido","CI","Titulo","Fecha Nac"]},
        {Col1: "Propietario", Col2: "Propietario", Col3:10, Col4:["ID","P Nombre", "S Nombre", "P Apellido", "S Apellido","CI","Direccion","Correo","Fecha Nac","Reside"]},
        {Col1: "Stud", Col2: "Stud", Col3:3, Col4:["ID","Fecha Cre", "Nombre"]},
        {Col1: "Uni_Col", Col2: "Uniforme y Color", Col3:3, Col4:["ID","Uniforme", "Color"]},
        {Col1: "Usuario", Col2: "Usuario", Col3:8, Col4:["ID","Nombre", "Contrasena", "Propietario", "Jinete","Entrenador","Veterinario","Visitante"]},
        {Col1: "Rol", Col2: "Rol", Col3:3, Col4:["ID","Nombre", "Descripcion"]},
        {Col1: "Permiso", Col2: "Permiso", Col3:3, Col4:["ID","Nombre", "Descripcion"]},
        {Col1: "Per_Rol", Col2: "Permiso y Rol", Col3:5, Col4:["ID","Fecha Inicial","Fecha Final", "Rol", "Permiso"]},
        {Col1: "Restaurante", Col2: "Restaurante", Col3:5, Col4:["ID","Nombre", "Capacidad", "Horario", "Area"]},
        {Col1: "Implemento", Col2: "Implemento", Col3:3, Col4:["ID","Nombre", "Abreviacion"]},
        {Col1: "Uniforme", Col2: "Uniforme", Col3:5, Col4:["ID", "Tipo", "Descripcion", "Estatus", "Stud"]},
        {Col1: "Pista", Col2: "Pista", Col3:3, Col4:["ID","Longitud", "Capacidad"]},
        {Col1: "Inscripcion", Col2: "Inscripcion", Col3:14, Col4:["ID","Precio","PP", "Fav", "#Fav", "Prem Jine", "Prem Entr","Prem Prop","Prem Stud", "Carrera", "Eje Ent", "Jinete", "Gualdrapa", "Comentario"]},
        {Col1: "Retiro", Col2: "Retiro", Col3:4, Col4:["ID","Fecha","Motivo","Inscripcion"]},
        {Col1: "Motivo_Retiro", Col2: "Motivo retiro", Col3:2, Col4:["ID","Descripcion"]},
        {Col1: "Caballeriza", Col2: "Caballeriza", Col3:4, Col4:["ID","Capacidad", "Funcional", "Area"]},
        {Col1: "Resultado", Col2: "Resultado", Col3:7, Col4:["ID","Hora Par", "Tiempo", "Posicion", "Cuerpos","Carrera","Ejemplar"]},
        {Col1: "Hacienda", Col2: "Hacienda", Col3:4, Col4:["ID","Nombre", "Direccion", "Lugar"]},
        {Col1: "Apuesta", Col2: "Apuesta", Col3:13, Col4:["ID","Descripcion", "Monto", "Cobrada","Fecha","Dividendo","Usuario","Propietario","Entrenador","Veterinario","Visitante","Taquilla", "Tipo"]},
        {Col1: "Tipo_Apuesta", Col2: "Tipo Apuesta", Col3:7, Col4:["ID","Nombre", "Descripcion", "Max Ejemplares","Min Ejemplares","Min Apuesta","Carr Validas"]},
        {Col1: "Detalle_Apuesta", Col2: "Detalle Apuesta", Col3:5, Col4:["ID","Posicion", "Orden", "Apuesta","Inscripcion"]},

    ]

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
                    return { 
                        Col1 : item.uni_col_id,
                        Col2 : item.uni_col_fk_uniforme,
                        Col3 : item.uni_col_fk_color};
                }
                case "Per_Rol":{
                    return { 
                        Col1 : item.per_rol_id,
                        Col2 : item.per_rol_fecha_ini,
                        Col3 : item.per_rol_fecha_fin,
                        Col4 : item.per_rol_fk_rol,
                        Col5 : item.per_rol_fk_permiso};
                }
                case "Retiro":{
                    return { 
                        Col1 : item.reti_id,
                        Col2 : item.reti_fecha,
                        Col3 : item.reti_fk_motivo_retiro,
                        Col4 : item.reti_fk_inscripcion};
                }
                case "Motivo_Retiro":{
                    return { 
                        Col1 : item.mot_ret_id,
                        Col2 : item.mot_ret_descripcion};
                }
                case "Inscripcion":{
                    return { 
                        Col1: item.insc_id,
                        Col2: item.insc_precio,
                        Col3 : item.insc_puesto_partida,
                        Col4 : trueOfalse(item.insc_favorito),
                        Col5 : item.insc_num_favorito,
                        Col6 : item.insc_premio_jinete,
                        Col7 : item.insc_premio_entrenador,
                        Col8 : item.insc_premio_propietario,
                        Col9 : item.insc_premio_stud,
                        Col10 : item.insc_fk_carrera,
                        Col11 : item.insc_fk_ejemplar,
                        Col12 : item.insc_fk_jinete,
                        Col13 : item.insc_num_gualdrapa,
                        Col14 : item.insc_fk_comentario}; 
                        
                }
                case "Apuesta":{
                    return { 
                        Col1: item.apue_id,
                        Col2: item.apue_descripcion,
                        Col3 : item.apue_monto,
                        Col4 : trueOfalse(item.apue_cobrada),
                        Col5 : item.apue_fecha,
                        Col6 : item.apue_dividendo,
                        Col7 : item.apue_fk_usuario,
                        Col8 : item.apue_fk_propietario,
                        Col9 : item.apue_fk_entrenador,
                        Col10 : item.apue_fk_veterinario,
                        Col11 : item.apue_fk_visitante,
                        Col12 : item.apue_fk_taquilla,
                        Col13 : item.apue_fk_tipo_apuesta};  
                }
                case "Tipo_Apuesta":{
                    return { 
                        Col1: item.tip_apu_id,
                        Col2: item.tip_apu_nombre,
                        Col3 : item.tip_apu_descripcion,
                        Col4 : item.tip_apu_max_ejemplares,
                        Col5 : item.tip_apu_min_ejemplares_carr,
                        Col6 : item.tip_apu_min_apuesta,
                        Col7 : item.tip_apu_ultimas_car_validas};  
                }
                case "Detalle_Apuesta":{
                    return { 
                        Col1: item.det_apu_id,
                        Col2: item.det_apu_posicion,
                        Col3: item.det_apu_orden,
                        Col4 : item.det_apu_fk_apuesta,
                        Col5 : item.det_apu_fk_inscripcion};  
                }
            }
        })
    }
    let user="UserName";

    
    const realizarConsultaReports = async (Filtro,NombreTabla,NumCol,titulo) => {
                    
        fetch('http://starahorsebd.ddns.net/admin/'+NombreTabla)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            console.log(arreglo(data,NombreTabla));
            console.log("El titulo es: "+titulo);
            toA(user,NombreTabla, arreglo(data,NombreTabla),NumCol,titulo,"/admin_reset");
        });
        

    }

    const renderListado=()=> {
      
        return elementos.map((Elementos) => {      
                 const { Col1, Col2, Col3, Col4} = Elementos 
                 return (
                    <li key={Col1} onClick={()=>realizarConsultaReports(null,Col1,Col3,Col4)}>{Col2}</li>           
                 )   
        })
    }

    
    return (
        <div className="ContenedorLista">
            <ol className='ElementoCarrera'>    
                {renderListado()}  
            </ol>
        </div>
    );
}

export default Lista_Crud;