import '../StyleSheets/Componentes/Boton_Direccion.css';
import { useNavigate } from 'react-router-dom';


function Boton_Direccion(props){

    const navigate = useNavigate();
    

    

    return(
        <div className='boton'>

            <button type="submit"
            onClick={()=>{
                navigate(props.dir);
            }}
            >{props.nombre}</button>

        </div>
    );
    
}

export default Boton_Direccion;