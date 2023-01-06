import { useNavigate,useLocation } from 'react-router';


import '../StyleSheets/Componentes/Lista_Elementos_Reducida.css';

function Lista_Elementos_Reducida_Crud(props) {

    const navigate = useNavigate();
    const toA=(Nombre,estado,Elemento)=>{
        navigate(props.dir,{
            state:{
                Nombre,
                estado,
                Elemento
        }});
        console.log("- El elemento se llama: "+nombre+" de clave "+clave);
    }

    const renderListado=()=> {
      
        return props.elementos.map((Elementos) => {      
                 const { key, Col2} = Elementos 
                 return (
                    <li key={key} onClick={()=>toA(props.nombre,"Actualizar",key)}>{Col2}</li>           
                 )   
        })
    }

    return (
        <div className="ContenedorListaReducida">
            <ol className='ElementoCarrera'> 
                {renderListado()}   
            </ol>
        </div>
    );
}

export default Lista_Elementos_Reducida_Crud;