import { Link} from "react-router-dom";
import React from "react";
import { useNavigate,useLocation } from 'react-router';

import '../StyleSheets/Componentes/Nav_Usuario.css';

export function Nav_Admin2(props){

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
                <div onClick={()=>toA(user,"/Reportes")}>Reportes</div>
                <div onClick={()=>toA(user,"/Crud")}>Cruds</div>
                <div onClick={()=>toA(user,"/admin_cuenta")}>Cuenta</div>
            </nav>); 

}

export default Nav_Admin2;