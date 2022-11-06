import { Link} from "react-router-dom";

import '../StyleSheets/Componentes/Nav_Iniciar_Registrarse.css';

export function Nav_Iniciar_Registrarse(){

    return(
        <nav>
            <div className='BotonIzq'><Link to="/iniciar_sesion">Iniciar sesión</Link></div>
            <div className='BotonDer'><Link to="/registrarse">Registrarse</Link></div>
        </nav>
    );

}

export default Nav_Iniciar_Registrarse;