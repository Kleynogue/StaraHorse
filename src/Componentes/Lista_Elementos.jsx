import { useNavigate,useLocation } from 'react-router';

import '../StyleSheets/Componentes/Lista_Elementos.css';

function Lista_Elementos(props) {

    const navigate = useNavigate();
    const toA=(Elemento)=>{
        navigate(props.dir,{
            state:{
                Elemento
        }});
        console.log("El caballo se llamaaaaaa: "+Elemento);
    }

    const elementos = props.elementos;
    const renderListado = () =>{
        return elementos.map((String,index) =>    
            <li key={index} onClick={()=>toA(String)}>{String}</li>     
        );
    }
    

    return (
        <div className="ContenedorLista">
            <ol className='ElementoCarrera'>    
                {renderListado()}
            </ol>
        </div>
    );
}

export default Lista_Elementos;