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
import Entrenador_Solicitudes from './routes/Entrenador/Entrenador_Solicitudes';
import Admin_Cuenta from './routes/Admin/Admin_Cuenta';
import Admin_Cruds from './routes/Admin/AdminCruds';
import Admin_Reset from './routes/Admin/Admin_Reset';
import AdminCrud_Ejemplares from './routes/Admin/AdminCrud_Ejemplares';
import AdminCrud_Jinetes from './routes/Admin/AdminCrud_Jinetes';
import AdminCrud_Implementos from './routes/Admin/AdminCrud_Implementos';
import AdminCrud_Entrenadores from './routes/Admin/AdminCrud_Entrenadores';
import AdminCrud_Veterinarios from './routes/Admin/AdminCrud_Veterinarios';
import AdminCrud_Propietarios from './routes/Admin/AdminCrud_Propietarios';
import AdminCrud_Studs from './routes/Admin/AdminCrud_Studs';
import AdminCrud_Restaurantes from './routes/Admin/AdminCrud_Restaurantes';
import AdminCrud_Uniformes from './routes/Admin/AdminCrud_Uniformes';
import AdminCrud_Pistas from './routes/Admin/AdminCrud_Pistas';
import AdminCrud_Haciendas from './routes/Admin/AdminCrud_Haciendas';
import AdminCrud_Carreras from './routes/Admin/AdminCrud_Carreras';
import Admin_Cuenta_Datos from './routes/Admin/Admin_Cuenta_Datos';
import AdminCrud_Resultados from './routes/Admin/AdminCrud_Resultados';
import AdminCrud_Cuadras from './routes/Admin/AdminCrud_Cuadras';
import AdminCrud_Usuarios from './routes/Admin/AdminCrud_Usuarios';
import AdminCrud_Rol from './routes/Admin/AdminCrud_Rol';
import AdminCrud_Permisos from './routes/Admin/AdminCrud_Permisos';
import Propietario_Cuenta from './routes/Propietario/Propietario_Cuenta';
import Propietario_Cuenta_Datos from './routes/Propietario/Propietario_Cuenta_Datos';
import Propietario_Ejemplares from './routes/Propietario/Propietario_Ejemplares';
import Propietario_Ejemplares_Crud from './routes/Propietario/Propietario_Ejemplares_Crud';
import Propietario_Studs from './routes/Propietario/Propietario_Studs';
import Propietario_Studs_Crud from './routes/Propietario/Propietario_Studs_Crud';
import Usuario_Carreras_Informacion_Record from './routes/Usuario/Usuario_Carreras_Informacion_Record';
import AdminCrud_Uni_Col from './routes/Admin/AdminCrud_Uni_Col';
import AdminCrud_Inscripciones from './routes/Admin/AdminCrud_Inscripciones';
import AdminCrud_Rol_Per from './routes/Admin/AdminCrud_Rol_Per';
import AdminCrud_Motivo_Retiro from './routes/Admin/AdminCrud_Motivo_Retiro';
import AdminCrud_Retiro from './routes/Admin/AdminCrud_Retiro';
import AdminCrud_Apuesta from './routes/Admin/AdminCrud_Apuesta';
import AdminCrud_Detalle_Apuesta from './routes/Admin/AdminCrud_Detalle_Apuesta';
import AdminCrud_Tipo_Apuesta from './routes/Admin/AdminCrud_Tipo_Apuesta';
import Crud from './routes/Admin/Crud';
import Reporte from './routes/Admin/Reporte';
import Admin_Reportes from './routes/Admin/Admin_Reportes';
import Admin_Reset2 from './routes/Admin/Admin_Reset2';
import Usuario_Apuesta from './routes/Usuario/Usuario_Apuesta';
import Usuario_Apuesta_Detalle from './routes/Usuario/Usuario_Apuesta_Detalle';
import Usuario_Apuesta_Inscripcion from './routes/Usuario/Usuario_Apuesta_Inscripcion';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
                    
    <Routes>  
    
      <Route path='/' element={<Navigate to='/iniciar_sesion'/>} />

      <Route path='/iniciar_sesion' element={<Iniciar_Sesion/>}/>
      <Route path='/registrarse' element={<Registrarse/>}/>

      <Route path='/usuario_carreras' element={<Usuario_Carreras/>}/>
        <Route path='/usuario_carreras_info' element={<Usuario_Carreras_Informacion/>}/>
        <Route path='/usuario_carreras_info_record' element={<Usuario_Carreras_Informacion_Record/>}/>
        <Route path='/usuario_carreras_resultado' element={<Usuario_Carreras_Resultado/>}/>

      <Route path='/usuario_apuestas' element={<Usuario_Apuesta/>}/>
      <Route path='/usuario_apuestas_detalle' element={<Usuario_Apuesta_Detalle/>}/>
      <Route path='/usuario_apuestas_inscripcion' element={<Usuario_Apuesta_Inscripcion/>}/>


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



      <Route path='/propietario_cuenta' element={<Propietario_Cuenta/>}/>
      <Route path='/propietario_cuenta_datos' element={<Propietario_Cuenta_Datos/>}/>
      <Route path='/propietario_ejemplares' element={<Propietario_Ejemplares/>}/>
        <Route path='/propietario_ejemplares_crud' element={<Propietario_Ejemplares_Crud/>}/>
      <Route path='/propietario_studs' element={<Propietario_Studs/>}/>
        <Route path='/propietario_studs_crud' element={<Propietario_Studs_Crud/>}/>



      <Route path='/entrenador_cuenta' element={<Entrenador_Cuenta/>}/>
        <Route path='/entrenador_cuenta_datos' element={<Entrenador_Cuenta_Datos/>}/>
      <Route path='/entrenador_perfil' element={<Entrenador_Perfil/>}/>
      <Route path='/entrenador_ejemplares' element={<Entrenador_Ejemplares/>}/>
      <Route path='/entrenador_carreras' element={<Entrenador_Carreras/>}/>
        <Route path='/entrenador_carreras_info' element={<Entrenador_Carreras_Informacion/>}/>
      <Route path='/entrenador_solicitudes' element={<Entrenador_Solicitudes/>}/>


      <Route path='/admin_cuenta' element={<Admin_Cuenta/>}/>
        <Route path='/admin_cuenta_datos' element={<Admin_Cuenta_Datos/>}/>
      <Route path='/admin_cruds' element={<Admin_Cruds/>}/>
        <Route path='/admin_cruds_ejemplar' element={<AdminCrud_Ejemplares/>}/>
        <Route path='/admin_cruds_jinete' element={<AdminCrud_Jinetes/>}/>
        <Route path='/admin_cruds_implemento' element={<AdminCrud_Implementos/>}/>
        <Route path='/admin_cruds_entrenador' element={<AdminCrud_Entrenadores/>}/>
        <Route path='/admin_cruds_veterinario' element={<AdminCrud_Veterinarios/>}/>
        <Route path='/admin_cruds_propietario' element={<AdminCrud_Propietarios/>}/>
        <Route path='/admin_cruds_stud' element={<AdminCrud_Studs/>}/>
        <Route path='/admin_cruds_restaurante' element={<AdminCrud_Restaurantes/>}/>
        <Route path='/admin_cruds_uniforme' element={<AdminCrud_Uniformes/>}/>
        <Route path='/admin_cruds_pista' element={<AdminCrud_Pistas/>}/>
        <Route path='/admin_cruds_hacienda' element={<AdminCrud_Haciendas/>}/>
        <Route path='/admin_cruds_carrera' element={<AdminCrud_Carreras/>}/>
        <Route path='/admin_cruds_resultado' element={<AdminCrud_Resultados/>}/>
        <Route path='/admin_cruds_caballeriza' element={<AdminCrud_Cuadras/>}/>
        <Route path='/admin_cruds_usuario' element={<AdminCrud_Usuarios/>}/>
        <Route path='/admin_cruds_rol' element={<AdminCrud_Rol/>}/>
        <Route path='/admin_cruds_permiso' element={<AdminCrud_Permisos/>}/>
        <Route path='/admin_cruds_uni_col' element={<AdminCrud_Uni_Col/>}/>
        <Route path='/admin_cruds_inscripcion' element={<AdminCrud_Inscripciones/>}/>
        <Route path='/admin_cruds_per_rol' element={<AdminCrud_Rol_Per/>}/>
        <Route path='/admin_cruds_motivo_retiro' element={<AdminCrud_Motivo_Retiro/>}/>
        <Route path='/admin_cruds_retiro' element={<AdminCrud_Retiro/>}/>
        <Route path='/admin_cruds_apuesta' element={<AdminCrud_Apuesta/>}/>
        <Route path='/admin_cruds_detalle_apuesta' element={<AdminCrud_Detalle_Apuesta/>}/>
        <Route path='/admin_reportes' element={<Admin_Reportes/>}/>

        <Route path='/admin_cruds_tipo_apuesta' element={<AdminCrud_Tipo_Apuesta/>}/>


        <Route path='/crud' element={<Crud/>}/>
        <Route path='/reportes' element={<Reporte/>}/>

      <Route path='/admin_reset' element={<Admin_Reset/>}/>
      <Route path='/admin_reset2' element={<Admin_Reset2/>}/>


    </Routes> 
  </BrowserRouter>
  
);

