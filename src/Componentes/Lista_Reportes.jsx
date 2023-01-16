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
                Filtro
        }});
        console.log("El usuario es: "+Elemento);
        
    }

    const elementos = [
        {Col1: "users", Col2: "Usuarios y roles", Col3:2, Col4:["Usuario","Rol"]},
        {Col1: "stud-1", Col2: "Stud 1", Col3:2, Col4:["Usuario","Rol"]},
        {Col1: "stud-2", Col2: "Stud 2", Col3:2, Col4:["Usuario","Rol"]},
        {Col1: "stud-3", Col2: "Stud 3", Col3:2, Col4:["Usuario","Rol"]},
        {Col1: "horses", Col2: "Ejemplares", Col3:2, Col4:["Usuario","Rol"]},
        {Col1: "implements", Col2: "Implementos", Col3:2, Col4:["Usuario","Rol"]},
        {Col1: "trainers", Col2: "Entrenadores", Col3:2, Col4:["Usuario","Rol"]},
        {Col1: "jockey", Col2: "Jinetes", Col3:2, Col4:["Usuario","Rol"]},
        {Col1: "restaurants", Col2: "Restaurantes", Col3:2, Col4:["Usuario","Rol"]},
        

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