import { useNavigate,useLocation } from 'react-router';

import '../StyleSheets/Componentes/Lista_Elementos.css';

function Lista_Reportes(props) {

    const navigate = useNavigate();
    const toA=(Elemento,Nombre,Query,NumCol,titulo,dir,Filtro)=>{
  
        navigate(dir,{
            state:{
                Elemento,
                Nombre,
                Query,
                NumCol,
                titulo,
                Filtro,
                token:props.tok
        }});
        console.log("El usuario es: "+Elemento);
        
    }

    const elementos = [
        {Col1: "users", Col2: "Usuarios y roles", Col3:2, Col4:["Usuario","Rol"]},
        {Col1: "stud-1", Col2: "Descripcion de uniformes", Col3:3, Col4:["Stud","Uniforme", "Tipo"]},
        {Col1: "stud-2", Col2: "Propietarios de stud (%)", Col3:3, Col4:["Stud","Propietario","Porcentaje"]},
        {Col1: "stud-3", Col2: "Stud/Propietario/Ejemplares", Col3:3, Col4:["Stud","Ejemplar","Propietario"]},
        {Col1: "horses", Col2: "Ejemplares", Col3:4, Col4:["Edad","Nombre","Sexo","Pelaje"]},
        {Col1: "implements", Col2: "Implementos", Col3:2, Col4:["Nombre","Abreviacion"]},
        {Col1: "trainers", Col2: "Entrenadores/Cuadras", Col3:2, Col4:["Entrenador","Cuadra"]},
        {Col1: "jockey", Col2: "Jinetes", Col3:1, Col4:["Nombre"]},
        {Col1: "restaurants", Col2: "Restaurantes", Col3:3, Col4:["Nombre","Abre","Cierra"]},
        //{Col1: "classic_winners", Col2: "Restaurantes", Col3:3, Col4:["Nombre","Abre","Cierra"]},
        {Col1: "winners_15", Col2: "Ejemplares/Tipo de carrera", Col3:2, Col4:["Ejemplar","Tipo"]},
        //{Col1: "jockey_history", Col2: "Ejemplares/Tipo de carrera", Col3:2, Col4:["Ejemplar","Tipo"]},
        {Col1: "jockey_stat", Col2: "Estadisticas Jinetes", Col3:2, Col4:["Jinete","Participaciones"]},
        {Col1: "horse_stat", Col2: "Estadisticas Ejemplares", Col3:2, Col4:["Ejemplares","Participaciones"]},
        {Col1: "mix_stat", Col2: "Estadisticas Ejemplar/Jinete/Entrenador", Col3:4, Col4:["Ejemplares","Jinetes","Entrenadores","Participaciones"]},
        {Col1: "betTotal-1", Col2: "Apuestas/Taquillas", Col3:2, Col4:["Total","Taquilla"]},
        {Col1: "betTotal-2", Col2: "Apuestas/Taquillas/Tipos", Col3:3, Col4:["Total","Taquilla","Tipo"]},
        //{Col1: "betTotal-3", Col2: "Apuestas/Taquillas/Tipos", Col3:3, Col4:["Total","Taquilla","Tipo"]},
        {Col1: "ticketTotal", Col2: "Total de Tickets", Col3:1, Col4:["Total"]},
        //{Col1: "AVG_Implement-1", Col2: "Total de Tickets", Col3:1, Col4:["Total"]},
        {Col1: "AVG_Implement-2", Col2: "Porcentaje de Implementos II", Col3:2, Col4:["Porcentaje","Implemento"]},
        {Col1: "frequency", Col2: "Frecuencia", Col3:2, Col4:["Frecuencia","Tipo"]},
        {Col1: "avg_weight", Col2: "Media del Peso", Col3:2, Col4:["AVG","Nombre"]},
        {Col1: "avg_horse", Col2: "Media de Ejemplares(Pelaje)", Col3:2, Col4:["Promedio","Pelaje"]},
        {Col1: "avg_horse1", Col2: "Media de Ejemplares(Sexo)", Col3:2, Col4:["Promedio","Sexo"]},
        {Col1: "parents", Col2: "Parentesco", Col3:3, Col4:["Ejemplar","Sexo","Hijos"]},


    ]

    const arreglo = (info,NombreTabla) => {                
        return info.map( item => { 
            switch(NombreTabla){
            
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
                case "stud-1":{
                    return { 
                        Col1 : item.stud,
                        Col2 : item.uniforme,
                        Col3 : item.tipo};
                }
                case "stud-2":{
                    return { 
                        Col1 : item.stud,
                        Col2 : item.propietario,
                        Col3 : item.porcentaje};
                }
                case "stud-3":{
                    return { 
                        Col1 : item.stud,
                        Col2 : item.ejemplar,
                        Col3 : item.propietario};
                }
                /*case "classic_winners":{
                    return { 
                        Col1 : item.,
                        Col2 : item.,
                        Col3 : item.};
                }*/
                case "winners_15":{
                    return { 
                        Col1 : item.ejemplar,
                        Col2 : item.tipo};
                }
                /*case "jockey_history":{
                    return { 
                        Col1 : item.,
                        Col2 : item.,
                        Col3 : item.};
                }*/
                case "jockey_stat":{
                    return { 
                        Col1 : item.jinete,
                        Col2 : item.participaciones};
                }
                case "horse_stat":{
                    return { 
                        Col1 : item.ejemplar,
                        Col2 : item.participaciones};
                }
                case "mix_stat":{
                    return { 
                        Col1 : item.ejemplar,
                        Col2 : item.jinete,
                        Col3 : item.entrenador,
                        Col4 : item.participaciones};
                }
                case "betTotal-1":{
                    return { 
                        Col1 : item.total,
                        Col2 : item.taquilla};
                }
                case "betTotal-2":{
                    return { 
                        Col1 : item.total,
                        Col2 : item.taquilla,
                        Col3 : item.tipo};
                }
                /*case "betTotal-3":{
                    return { 
                        Col1 : item.,
                        Col2 : item.,
                        Col3 : item.};
                }*/
                case "ticketTotal":{
                    return { 
                        Col1 : item.total};
                }
                case "AVG_Implement-2":{
                    return { 
                        Col1 : item.porcentaje,
                        Col2 : item.implemento};
                }
                case "frequency":{
                    return { 
                        Col1 : item.frecuencia,
                        Col2 : item.tipo};
                }
                case "avg_weight":{
                    return { 
                        Col1 : item.avg,
                        Col2 : item.carr_nombre};
                }
                case "avg_horse":{
                    return { 
                        Col1 : item.promedio,
                        Col2 : item.pelaje};
                }
                case "avg_horse1":{
                    return { 
                        Col1 : item.promedio,
                        Col2 : item.sexo};
                }
                case "parents":{
                    return { 
                        Col1 : item.ejemplar,
                        Col2 : item.sexo,
                        Col3 : item.hijos};
                }
                
                
            }
        })
    }
    let user="UserName";

    
    const realizarConsultaReports = async (Filtro,NombreTabla,NumCol,titulo) => {
                    
        fetch('http://starahorsebd.ddns.net/reports/'+NombreTabla)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            console.log(arreglo(data,NombreTabla));
            console.log("El titulo es: "+titulo);
            toA(user,NombreTabla, arreglo(data,NombreTabla),NumCol,titulo,"/admin_reset2");
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

export default Lista_Reportes;