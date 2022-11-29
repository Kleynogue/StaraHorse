
import '../StyleSheets/Componentes/Campo_Menu.css';

function Campo_Menu(props){
    return(

        <div className="Contenedor">

            <div className="NombreAtributo">{props.titulo}</div>
            <div className="ValorAtributo">{props.valor}</div>

        </div>

    );
    
}

export default Campo_Menu;