import '../StyleSheets/Componentes/Boton_Direccion.css';


function Boton_Direccion(props){

    return(
        
        <div className='boton'>

            <button type="submit"
            onClick={props.fun}
            >{props.nombre}</button>

        </div>
    );
    
}

export default Boton_Direccion;