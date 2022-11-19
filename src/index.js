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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
                    
    <Routes>  
    
      <Route path='/' element={<Navigate to='/iniciar_sesion'/>} />

      <Route path='/iniciar_sesion' element={<Iniciar_Sesion/>}/>
      <Route path='/registrarse' element={<Registrarse/>}/>

      <Route path='/usuario_carreras' element={<Usuario_Carreras/>}/>
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

      <Route path='/usuario_propietarios' element={<Usuario_Propietarios/>}/>
        <Route path='/usuario_propietarios_info' element={<Usuario_Propietarios_Info/>}/>
    
      <Route path='/usuario_cuenta' element={<Usuario_Cuenta/>}/>
        <Route path='/usuario_cuenta_datos' element={<Usuario_Cuenta_Datos/>}/>
        <Route path='/usuario_cuenta_solicitud' element={<Usuario_Cuenta_Privilegios/>}/>
    
    
    </Routes> 
  </BrowserRouter>
  
);

