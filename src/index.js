import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate  } from 'react-router-dom';

import Iniciar_Sesion from './routes/Usuario/Iniciar_Sesion';
import Registrarse from './routes/Usuario/Registrarse';
import Usuario_Carreras from './routes/Usuario/Usuario_Carreras';
import Usuario_Cuenta from './routes/Usuario/Usuario_Cuenta';
import Usuario_Cuenta_Datos from './routes/Usuario/Usuario_Cuenta_Datos';
import Usuario_Cuenta_Privilegios from './routes/Usuario/Usuario_Cuenta_Privilegios';
import Usuario_Ejemplares from './routes/Usuario/Usuario_Ejemplares';
import Usuario_Ejemplares_Info from './routes/Usuario/Usuario_Ejemplares_Info';
import Usuario_Entrenadores from './routes/Usuario/Usuario_Entrenadores';
import Usuario_Entrenadores_Info from './routes/Usuario/Usuario_Entrenadores_Info';
import Usuario_Jinetes from './routes/Usuario/Usuario_Jinetes';
import Usuario_Jinetes_Estadisticas from './routes/Usuario/Usuario_Jinetes_Estadisticas';
import Usuario_Jinetes_Info from './routes/Usuario/Usuario_Jinetes_Info';
import Usuario_Propietarios from './routes/Usuario/Usuario_Propietarios';
import Usuario_Propietarios_Info from './routes/Usuario/Usuario_Propietarios_info';
import Usuario_Studs from './routes/Usuario/Usuario_Studs';
import Usuario_Studs_Info from './routes/Usuario/Usuario_Studs_Info';
import Usuario_Establecimiento from './routes/Usuario/Usuario_Establecimiento';
import Usuario_Confirmar_Compra from './routes/Usuario/Usuario_Confirmar_Compra';
import Usuario_Carreras_Informacion from './routes/Usuario/Usuario_Carreras_Informacion';
import Usuario_Pago from './routes/Usuario/Usuario_Pago';
import Jinete_Carreras from './routes/Jinete/Jinete_Carreras';
import Jinete_Perfil from './routes/Jinete/Jinete_Perfil';
import Jinete_Cuenta from './routes/Jinete/Jinete_Cuenta';
import Jinete_Cuenta_Datos from './routes/Jinete/Jinete_Cuenta_Datos';
import Usuario_Carreras_Resultado from './routes/Usuario/Usuario_Carreras_Resultado';
import Jinete_Carreras_Informacion from './routes/Jinete/Jinete_Carreras_Informacion';
import Entrenador_Cuenta from './routes/Entrenador/Entrenador_Cuenta';
import Entrenador_Cuenta_Datos from './routes/Entrenador/Entrenador_Cuenta_Datos';
import Entrenador_Perfil from './routes/Entrenador/Entrenador_Perfil';
import Entrenador_Ejemplares from './routes/Entrenador/Entrenador_Ejemplares';
import Entrenador_Carreras from './routes/Entrenador/Entrenador_Carreras';
import Entrenador_Carreras_Informacion from './routes/Entrenador/Entrenador_Carreras_Informacion';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
                    
    <Routes>  
    
      <Route path='/' element={<Navigate to='/iniciar_sesion'/>} />

      <Route path='/iniciar_sesion' element={<Iniciar_Sesion/>}/>
      <Route path='/registrarse' element={<Registrarse/>}/>

      <Route path='/usuario_carreras' element={<Usuario_Carreras/>}/>
        <Route path='/usuario_carreras_info' element={<Usuario_Carreras_Informacion/>}/>
        <Route path='/usuario_carreras_resultado' element={<Usuario_Carreras_Resultado/>}/>

      <Route path='/usuario_ejemplares' element={<Usuario_Ejemplares/>}/>
        <Route path='/usuario_ejemplares_info' element={<Usuario_Ejemplares_Info/>}/>

      <Route path='/usuario_jinetes' element={<Usuario_Jinetes/>}/>
        <Route path='/usuario_jinetes_info' element={<Usuario_Jinetes_Info/>}/>
        <Route path='/usuario_jinetes_estadisticas' element={<Usuario_Jinetes_Estadisticas/>}/>

      <Route path='/usuario_entrenadores' element={<Usuario_Entrenadores/>}/>
        <Route path='/usuario_entrenadores_info' element={<Usuario_Entrenadores_Info/>}/>

      <Route path='/usuario_studs' element={<Usuario_Studs/>}/>
        <Route path='/usuario_studs_info' element={<Usuario_Studs_Info/>}/>

      <Route path='/usuario_establecimiento' element={<Usuario_Establecimiento/>}/>
        <Route path='/usuario_confirmar' element={<Usuario_Confirmar_Compra/>}/>
        <Route path='/usuario_pago' element={<Usuario_Pago/>}/>

      <Route path='/usuario_propietarios' element={<Usuario_Propietarios/>}/>
        <Route path='/usuario_propietarios_info' element={<Usuario_Propietarios_Info/>}/>
    
      <Route path='/usuario_cuenta' element={<Usuario_Cuenta/>}/>
        <Route path='/usuario_cuenta_datos' element={<Usuario_Cuenta_Datos/>}/>
        <Route path='/usuario_cuenta_solicitud' element={<Usuario_Cuenta_Privilegios/>}/>
    
    

      <Route path='/jinete_carreras' element={<Jinete_Carreras/>}/>
        <Route path='/jinete_carreras_info' element={<Jinete_Carreras_Informacion/>}/>
      <Route path='/jinete_perfil' element={<Jinete_Perfil/>}/>
      <Route path='/jinete_cuenta' element={<Jinete_Cuenta/>}/>
        <Route path='/jinete_cuenta_datos' element={<Jinete_Cuenta_Datos/>}/>



      <Route path='/entrenador_cuenta' element={<Entrenador_Cuenta/>}/>
        <Route path='/entrenador_cuenta_datos' element={<Entrenador_Cuenta_Datos/>}/>
      <Route path='/entrenador_perfil' element={<Entrenador_Perfil/>}/>
      <Route path='/entrenador_ejemplares' element={<Entrenador_Ejemplares/>}/>
      <Route path='/entrenador_carreras' element={<Entrenador_Carreras/>}/>
        <Route path='/entrenador_carreras_info' element={<Entrenador_Carreras_Informacion/>}/>


    </Routes> 
  </BrowserRouter>
  
);

