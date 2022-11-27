import { Link} from "react-router-dom";
import React from "react";
import { useNavigate,useLocation } from 'react-router';

import '../StyleSheets/Componentes/Nav_Usuario.css';

export function Nav_Usuario(props){

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
                <div onClick={()=>toA(user,"/usuario_carreras")}> Carreras </div>
                <div onClick={()=>toA(user,"/usuario_ejemplares")}> Ejemplares</div>
                <div onClick={()=>toA(user,"/usuario_jinetes")}>Jinetes</div>
                <div onClick={()=>toA(user,"/usuario_entrenadores")}>Entrenadores </div>
                <div onClick={()=>toA(user,"/usuario_studs")}> Studs </div>
                <div onClick={()=>toA(user,"/usuario_establecimiento")}>Establecimiento </div>
                <div onClick={()=>toA(user,"/usuario_propietarios")}>Propietarios</div>
                <div onClick={()=>toA(user,"/usuario_cuenta")}>Cuenta</div>
            </nav>); 

}

export default Nav_Usuario;