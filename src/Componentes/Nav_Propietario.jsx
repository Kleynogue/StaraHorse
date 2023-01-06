import { Link} from "react-router-dom";
import React from "react";
import { useNavigate,useLocation } from 'react-router';

import '../StyleSheets/Componentes/Nav_Usuario.css';

export function Nav_Propietario(props){

        const navigate = useNavigate();
        const toA=(Elemento,dir)=>{
            navigate(dir,{
                state:{
                    Elemento
            }});
            console.log("El usuario es: "+Elemento);
        }

        let user="UserName";
  
        return(
            <nav className="NavUsuario">
                <div onClick={()=>toA(user,"/propietario_ejemplares")}>Ejemplares</div>
                <div onClick={()=>toA(user,"/propietario_studs")}>Studs</div>
                <div onClick={()=>toA(user,"/propietario_perfil")}>Mi Perfil</div>
                <div onClick={()=>toA(user,"/propietario_cuenta")}>Cuenta</div>
            </nav>); 

}

export default Nav_Propietario;