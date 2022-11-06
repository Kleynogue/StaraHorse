import { Link} from "react-router-dom";
import React from "react";
import '../StyleSheets/Componentes/Nav_Usuario.css';

export function Nav_Usuario(props){

    

   
  
        return(
            <nav className="NavUsuario">
                <div> <Link to="/usuario_carreras">Carreras</Link> </div>
                <div> <Link to="/usuario_ejemplares">Ejemplares</Link> </div>
                <div> <Link to="/usuario_jinetes">Jinetes</Link> </div>
                <div> <Link to="/usuario_entrenadores">Entrenadores</Link> </div>
                <div> <Link to="/usuario_studs">Studs</Link> </div>
                <div> <Link to="/usuario_establecimiento">Establecimiento</Link> </div>
                <div> <Link to="/usuario_propietarios">Propietarios</Link> </div>
                <div> <Link to="/usuario_cuenta">Cuenta</Link> </div>
            </nav>); 
    


}

export default Nav_Usuario;