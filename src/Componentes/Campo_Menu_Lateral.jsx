
import '../StyleSheets/Componentes/Campo_Menu_Lateral.css';

function Campo_Menu_Lateral(props){
    return(

        <div className="Contenedor_L grid">

            <div className="NombreAtributo_L">{props.titulo}</div>
            <div className="ValorAtributo_L">Pepe</div>

        </div>

    );
    
}

export default Campo_Menu_Lateral;