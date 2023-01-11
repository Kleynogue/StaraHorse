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



function AdminCrud_Inscripciones(){
        const location = useLocation();
        
        const [hidden, setHidden] = useState(true);
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        
        const [precio, setPrecio] = useState();
        const [pp, setPp] = useState();
        const [favorito, setFavorito] = useState();
        const [num_favorito, setNum_favorito] = useState();
        const [prem_jinete, setPrem_jinete] = useState();
        const [prem_entrenador, setPrem_entrenador] = useState();
        const [prem_propietario, setPrem_propietario] = useState();
        const [prem_stud, setPrem_stud] = useState();
        const [carrera, setCarrera] = useState();
        const [ejem_entr, setEjem_entr] = useState();
        const [jinete, setJinete] = useState();
        const [gualdrapa, setGualdrapa] = useState();
        const [comentario, setComentario] = useState();
        

        const [accion, setAccion] = useState();
        
        

        //Inicio Direcciones
        const navigate = useNavigate();
        const toUsuarioCuenta=(direccion)=>{
            navigate(direccion,{
                state:{
                //Variables
                }});
        }
        //Fin Direcciones

        

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
                
                        <div >Gualdrapa</div>
                        <div ><input  type="number" id="Insc_Num_Gualdrapa" name="Insc_Num_Gualdrapa"  onChange={e => setGualdrapa(e.target.value)}></input></div>

                        <div >PP</div>
                        <div ><input  type="number" id="Insc_Puesto_Partida" name="Insc_Puesto_Partida"  onChange={e => setPp(e.target.value)}></input></div>

                        <div >Favorito</div>
                        <div ><input  type="text" id="Insc_Favorito" name="Insc_Favorito"  onChange={e => setFavorito(e.target.value)}></input></div>

                        <div >Numero de Favorito</div>
                        <div ><input  type="number" id="Insc_Num_Favorito" name="Insc_Num_Favorito"  onChange={e => setNum_favorito(e.target.value)}></input></div>

                        <div >Carrera</div>
                        <div ><input  type="number" id="Insc_FK_Carrera" name="Insc_FK_Carrera"  onChange={e => setCarrera(e.target.value)}></input></div>

                        <div >Ejemplar Entrenador</div>
                        <div ><input  type="number" id="Insc_FK_Ejemplar" name="Insc_FK_Ejemplar"  onChange={e => setEjem_entr(e.target.value)}></input></div>

                        <div >Jinete</div>
                        <div ><input  type="number" id="Insc_FK_Jinete" name="Insc_FK_Jinete"  onChange={e => setJinete(e.target.value)}></input></div>

                        <div >Precio</div>
                        <div ><input  type="number" id="Insc_Precio" name="Insc_Precio"  onChange={e => setPrecio(e.target.value)}></input></div>

                        <div >Comentario</div>
                        <div ><input  type="number" id="Insc_FK_Comentario" name="Insc_FK_Comentario"  onChange={e => setcComentario(e.target.value)}></input></div>

                        <div >Prem Jinete</div>
                        <div ><input  type="number" id="Insc_Premio_Jinete" name="Insc_Premio_Jinete"  onChange={e => setPrem_jinete(e.target.value)}></input></div>

                        <div >Prem Entrenador</div>
                        <div ><input  type="number" id="Insc_Premio_Entrenador" name="Insc_Premio_Entrenador"  onChange={e => setPrem_entrenador(e.target.value)}></input></div>

                        <div >Prem Propietario</div>
                        <div ><input  type="number" id="Insc_Premio_Propietario" name="Insc_Premio_Propietario"  onChange={e => setPrem_propietario(e.target.value)}></input></div>

                        <div >Prem Stud</div>
                        <div ><input  type="number" id="Insc_Premio_Stud" name="Insc_Premio_Stud"  onChange={e => setPrem_stud(e.target.value)}></input></div>

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


export default AdminCrud_Inscripciones;