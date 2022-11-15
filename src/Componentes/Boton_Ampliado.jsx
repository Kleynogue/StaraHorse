import '../StyleSheets/Componentes/Boton_Ampliado.css';
import { useNavigate } from 'react-router-dom';


function Boton_Ampliado(props){

    const navigate = useNavigate();
    

    

    return(
        <div className='boton_A'>

            <button
            onClick={()=>{
                navigate(props.dir);
            }}
            >{props.nombre}</button>

        </div>
    );
    
}

export default Boton_Ampliado;