import '../StyleSheets/Componentes/Boton_Aceptar.css';
import { useNavigate } from 'react-router-dom';


function Boton_Aceptar(props){

    const navigate = useNavigate();
    

    

    return(
        <div className='boton'>

            <button
            onClick={()=>{
                navigate(props.dir);
            }}
            >{props.nombre}</button>

        </div>
    );
    
}

export default Boton_Aceptar;