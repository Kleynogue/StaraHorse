
import { useNavigate } from 'react-router-dom';


import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import  Nav_Iniciar_Registrarse  from '../../Componentes/Nav_Iniciar_Registrarse';
import Boton_Direccion from '../../Componentes/Boton_Direccion';

import '../../StyleSheets/Usuario/Iniciar_Sesion.css';


function Iniciar_Sesion(){

      
    const navigate = useNavigate();
    const toUsuarioCarreras=()=>{
        navigate('/usuario_carreras',{
            state:{
            //Variables
            }});
    }

    
        return (

            <div className='bodyIniciar'>
        
                <div>
                    <Cabecera/>
                    <Nav_Iniciar_Registrarse />  
                </div>

                <div>
                    <form className='FormIniciar'>
                        <div className='DUsuario'>Usuario</div>
                        <div className='IUsuario'><input type="text" required=""></input></div>
                                
                        <div className='Password'>Contraseña</div>
                        <div className='Password'><input  type="password" required=""></input></div>
                            
                        <div className='BotonIniciar'><Boton_Direccion fun={toUsuarioCarreras} nombre="Iniciar Sesion" /></div>
                    </form>
                </div>

                <div>
                    <Footer/>
                </div>
                
            </div>

        );
    

}

export default Iniciar_Sesion;