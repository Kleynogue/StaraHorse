import '../StyleSheets/Componentes/Boton_Direccion_Ampliado.css';


function Boton_Direccion_Ampliado(props){

    return(
        <div className='boton_A'>

            <button type="submit"
            onClick={props.fun}
            >{props.nombre}</button>

        </div>
    );
    
}

export default Boton_Direccion_Ampliado;