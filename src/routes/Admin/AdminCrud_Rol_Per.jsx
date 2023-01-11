import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';
import Select from 'react-select'

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';

import '../../StyleSheets/Admin/Admin_Menu_Principal.css';
import Boton_Direccion_Ampliado from '../../Componentes/Boton_Direccion_Ampliado';
import Nav_Admin from '../../Componentes/Nav_Admin';
import Boton_Direccion from '../../Componentes/Boton_Direccion';
import Combobox_Roles from '../../Componentes/Combobox_Roles';



function AdminCrud_Rol_Per(){
        const location = useLocation();
        
        const [hidden, setHidden] = useState(true);
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [rol, setRol] = useState();
        const [permiso, setPermiso] = useState();
        const [fecha_ini, setFecha_ini] = useState();
        const [fecha_fin, setFecha_fin] = useState();

        const [accion, setAccion] = useState();
        

        

        const EstablecerCrud = () => {
            if(cargado=="false"){    
                
                

                if(location.state.estado=="Update"){
                    setHidden(s => !s);
                    setAccion('http://starahorsebd.ddns.net/admin/'+location.state.Nombre+'/edit/'+location.state.Elemento);
                }
                else{
                    setAccion('http://starahorsebd.ddns.net/admin/'+location.state.Nombre+'/create');
                }

                setCargado("true");
            }
            
        }
        EstablecerCrud();



        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Admin />
                    <h2 className='subtitulo'>CRUD ({location.state.Nombre})</h2>

                </div>

                
                <div id='ContFormCrud' >

                    <form   method="POST" action={accion} id='FormCrud' className="FormRadioCrud">

                        <div >ID</div>
                        <div  className='IDcrud'>{location.state.Elemento}</div>

                        <div >Fecha Inicial</div>
                        <div ><input  type="date" id="Per_Rol_Fecha_Ini" name="Per_Rol_Fecha_Ini"  onChange={e => setFecha_ini(e.target.value)}></input></div>

                        <div >Fecha Final</div>
                        <div ><input  type="date" id="Per_Rol_Fecha_Fin" name="Per_Rol_Fecha_Fin"  onChange={e => setFecha_fin(e.target.value)}></input></div>

                        <div >Rol</div>
                        <div ><input  type="number" id="Per_Rol_FK_Rol" name="Per_Rol_FK_Rol"  onChange={e => setRol(e.target.value)}></input></div>

                        <div >Permiso</div>
                        <div ><input  type="number" id="Per_Rol_FK_Permiso" name="Per_Rol_FK_Permiso"  onChange={e => setPermiso(e.target.value)}></input></div>

                        <div id='BotonActualizar'><Boton_Direccion  nombre={location.state.estado} /></div>
                    
                    </form>

                    {!hidden ? 
                        <form  id='BotonEliminar'  method="POST" action={'http://starahorsebd.ddns.net/admin/'+location.state.Nombre+'/'+location.state.Elemento}>
                            <div ><Boton_Direccion  nombre="Delete" /></div>
                        </form>
                    : null}
                </div>


                <div>
                    <Footer/>
                </div>

            </div>

        );
      
}            


export default AdminCrud_Rol_Per;