import '../StyleSheets/Componentes/Campo_Menu_Ampliado.css';

function Campo_Menu_Ampliado(props){
    return(

        <div className="Contenedor">

            <div className="NombreAtributo">{props.titulo}</div>
            
            <div className="ValorAtributoAmpliado">
                <p>{props.valor}</p>
            </div>

        </div>

    );
    
}

export default Campo_Menu_Ampliado;