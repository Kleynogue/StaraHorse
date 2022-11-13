import { Link} from "react-router-dom";

import '../StyleSheets/Componentes/Lista_Elementos_Reducida.css';

function Lista_Elementos_Reducida(props) {
    const elementos = props.elementos;
    const listItems = elementos.map((String) =>
        <li key={elementos}>
            {String}
        </li>
    );
    return (
        <div className="ContenedorListaReducida">
            
            <ol className='ElementoCarrera'>
               
               <Link className="EnlaceElemento" to={props.dir}>{listItems}</Link>
                
                </ol>
        </div>
    );
}

export default Lista_Elementos_Reducida;