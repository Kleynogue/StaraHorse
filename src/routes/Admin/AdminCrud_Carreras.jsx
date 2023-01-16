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
import Lista_Reportes from '../../Componentes/Lista_Reportes';



function AdminCrud_Carreras(){

        const [hidden, setHidden] = useState(true);
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [nombre, setNombre] = useState();
        const [fecha, setFecha] = useState();
        const [hora, setHora] = useState();
        const [numLlamado, setNumLlamado] = useState();
        const [distancia, setDistancia] = useState();
        const [descripcion, setDescripcion] = useState();
        const [edadMin, setEdadMin] = useState();
        const [edadMax, setEdadMax] = useState();
        const [sexo, setSexo] = useState();
        const [minGanadas, setMinGanadas] = useState();
        const [maxGanadas, setMaxGanadas] = useState();
        const [reclamo, setReclamo] = useState();
        const [pista, setPista] = useState();
        const [pistaVariante, setPistaVariante] = useState();
        const [categoria, setCategoria] = useState();
        const [premioPosicion, setPremioPosicion] = useState();
        const [premioTipo, setPremioTipo] = useState();
        const [premioMonto, setPremioMonto] = useState();
        const [premioSeleccionado, setPremioSeleccionado] = useState();
        const [insertarEjemplar, setInsertarEjemplar] = useState();
        const [eliminarEjemplar, setEliminarEjemplar] = useState();
        const [datosEjemplar, setDatosEjemplar] = useState();
        const [puesto, setPuesto] = useState();
        const [comentario, setComentario] = useState();
        const [favorito, setFavorito] = useState();
        const [jinete, setJinete] = useState();
        const [precio, setPrecio] = useState();
        const [gualdrapa, setGualdrapa] = useState();


        const [opcPista, setOpcPista] = useState();
        const [opcCategoria, setOpcCategoria] = useState();
        const [opcSexo, setOpcSexo] = useState();
        const [opcReclamo, setOpcReclamo] = useState();
        const [opcPremioPosicion, setOpcPremioPosicion] = useState();
        const [opcPremioTipo, setOpcPremioTipo] = useState();
        const [opcPremioSeleccionado, setOpcPremioSeleccionado] = useState();
        const [opcEjemplares, setOpcEjemplares] = useState();
        const [opcEjemplaresCarrera, setOpcEjemplaresCarrera] = useState();
        const [opcComentario, setOpcComentario] = useState();
        const [opcFavorito, setOpcFavorito] = useState();
        const [opcJinete, setOpcJinete] = useState();

        const [insJinete, setInsJinete] = useState("NULL");
        const [insFavorito, setInsFavorito] = useState("NULL");
        const [insComentario, setInsComentario] = useState("NULL");
        const [insPP, setInsPP] = useState("NULL");
        const [insPrecio, setInsPrecio] = useState("NULL");
        const [insGualdrapa, setInsGualdrapa] = useState("NULL");

        const [accion, setAccion] = useState();


        const customerStyles = { 
            control: (styles, {isFocused}) => ({ 
                ...styles, 
                
                backgroundColor: "#FFFFFF",
                border: "5px 5px 0 0", 
                borderColor: "#F37021",
                boxShadow: 'none' }), 
                color: "#817A72",
    
            option: (styles, {isFocused}) => { 
                return { 
                    ...styles, 
                    backgroundColor: isFocused ? "#F37021" : "#FFFFFF",
                    color: isFocused ? "#FFFFFF" : "#817A72",
                    }
            }, input: styles => ({ ...styles, color: "#817A72" }), 
        
        
        };

        const location = useLocation();
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

                const OpNoAplica = [
                    { value: 'N', label: 'No Aplica' },
                ]

                const OpPista = [
                    { value: '1', label: 'Pista 1' },
                    { value: '2', label: 'Pista 2' },
                    { value: '3', label: 'Pista 3' },
                    { value: '4', label: 'Pista 4' },
                    { value: '5', label: 'Pista 5' },
                ]
                setOpcPista(OpNoAplica.concat(OpPista));

                const OpCategoria = [
                    { value: '1', label: 'Categoria 1' },
                    { value: '2', label: 'Categoria 2' },
                    { value: '3', label: 'Categoria 3' },
                    { value: '4', label: 'Categoria 4' },
                    { value: '5', label: 'Categoria 5' },
                ]
                setOpcCategoria(OpNoAplica.concat(OpCategoria));

                const OpSexo = [
                    { value: '1', label: 'Caballo' },
                    { value: '2', label: 'Yegua' },
                ]
                setOpcSexo(OpNoAplica.concat(OpSexo));

                const OpReclamo = [
                    { value: '1', label: 'Si' },
                    { value: '2', label: 'No' },
                ]
                setOpcReclamo(OpNoAplica.concat(OpReclamo));

                const OpPremioPosicion = [
                    { value: '1', label: 'Puesto 1' },
                    { value: '2', label: 'Puesto 2' },
                    { value: '3', label: 'Puesto 3' },
                    { value: '4', label: 'Puesto 4' },
                    { value: '5', label: 'Puesto 5' },
                ]
                setOpcPremioPosicion(OpNoAplica.concat(OpPremioPosicion));

                const OpPremioTipo = [
                    { value: '1', label: 'Normal' },
                    { value: '2', label: 'Especial' },
                ]
                setOpcPremioTipo(OpNoAplica.concat(OpPremioTipo));

                const OpPremioSeleccionado = [
                    { value: '1', label: 'Puesto 1 Normal 5000' },
                    { value: '2', label: 'Puesto 2 Normal 2500' },
                ]
                setOpcPremioSeleccionado(OpNoAplica.concat(OpPremioSeleccionado));

                const OpEjemplares = [
                    { value: '1', label: 'Ejemplar 1' },
                    { value: '2', label: 'Ejemplar 2' },
                    { value: '3', label: 'Ejemplar 3' },
                    { value: '4', label: 'Ejemplar 4' },
                    { value: '5', label: 'Ejemplar 5' },
                    { value: '6', label: 'Ejemplar 6' },
                    { value: '7', label: 'Ejemplar 7' },
                    { value: '8', label: 'Ejemplar 8' },
                ]
                setOpcEjemplares(OpNoAplica.concat(OpEjemplares));

                const OpEjemplaresCarrera = [
                    { value: '1', label: 'Ejemplar 1' },
                    { value: '2', label: 'Ejemplar 2' },
                    { value: '3', label: 'Ejemplar 3' },
                    { value: '4', label: 'Ejemplar 4' },
                ]
                setOpcEjemplaresCarrera(OpNoAplica.concat(OpEjemplaresCarrera));

                const OpComentario = [
                    { value: '1', label: 'Comentario 1' },
                    { value: '2', label: 'Comentario 2' },
                    { value: '3', label: 'Comentario 3' },
                    { value: '4', label: 'Comentario 4' },
                ]
                setOpcComentario(OpNoAplica.concat(OpComentario));

                const OpFavorito = [
                    { value: '1', label: 'Primer Favorito' },
                    { value: '2', label: 'Segundo Favorito' },
                    { value: '3', label: 'Tercer Favorito' },
                ]
                setOpcFavorito(OpNoAplica.concat(OpFavorito));

                const OpJinete = [
                    { value: '1', label: 'Jinete 1' },
                    { value: '2', label: 'Jinete 2' },
                    { value: '3', label: 'Jinete 3' },
                    { value: '4', label: 'Jinete 4' },
                ]
                setOpcJinete(OpNoAplica.concat(OpJinete));

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

        const handleSubmit= (e) => {
            e.preventDefault();
            

            if(location.state.estado=="Create"){

                
                //edadMax y maxGanadas pueden ser null
                if(nombre  && fecha && numLlamado && distancia && descripcion && edadMin && sexo && minGanadas && reclamo && pista && categoria){
                    alert("Se crea con exito la carrera")
                }
                else{
                    alert("Debe llenar los campos solicitados")
                }
            }
            else{
                alert("Se actualizan los datos");

                if(nombre  ){alert("Se actuliza nombre por: "+nombre)}
                if(fecha){alert("Se actuliza fecha por: "+fecha)}
                if(numLlamado){alert("Se actuliza numLlamado por: "+numLlamado)}
                if(distancia ){alert("Se actuliza distancia por: "+distancia)}
                if(descripcion){alert("Se actuliza descripcion por: "+descripcion)}
                if(edadMin){alert("Se actuliza edadMin por: "+edadMin)}
                if(edadMax){alert("Se actuliza edadMax por: "+edadMax)}
                if( sexo && sexo.value!="N"){alert("Se actuliza sexo por: "+sexo.label)}
                if( minGanadas){alert("Se actuliza minGanadas por: "+minGanadas)}
                if( maxGanadas){alert("Se actuliza maxGanadas por: "+maxGanadas)}
                if( reclamo && reclamo.value!="N"){alert("Se actuliza reclamo por: "+reclamo.label)}
                if( pista && pista.value!="N"){alert("Se actuliza pista por: "+pista.label)}
                if(categoria && categoria.value!="N"){alert("Se actuliza categoria por: "+categoria.label)}
                if(premioPosicion && premioPosicion.value!="N" && premioMonto && premioTipo && premioTipo.value!="N"){alert("Se incorpora el premio con posicion "+premioPosicion.label+ " de tipo "+premioTipo.label+" con un monto de "+premioMonto)}
                if(premioSeleccionado && premioSeleccionado.value!="N"){alert("Se elimina el premio: "+premioSeleccionado.label)}
                if(insertarEjemplar && insertarEjemplar.value!="N"){alert("Se incorpora el ejemplar: "+insertarEjemplar.label)}
                if(eliminarEjemplar && eliminarEjemplar.value!="N"){alert("Se elimina el ejemplar: "+eliminarEjemplar.label)}
                if(datosEjemplar && datosEjemplar.value!="N" && comentario && comentario.value!="N"){alert("Se actualiza el comentario "+comentario.label+" al ejemplar "+datosEjemplar.label)}
                if(datosEjemplar && datosEjemplar.value!="N" && puesto && puesto.value!="N"){alert("Se actualiza al puesto de partida "+puesto+" del ejemplar "+datosEjemplar.label)}

                if(datosEjemplar && datosEjemplar.value!="N" && favorito && favorito.value!="N"){alert("El ejemplar "+datosEjemplar.label+" es el favorito "+favorito.label)}
                if(datosEjemplar && datosEjemplar.value!="N" && jinete && jinete.value!="N"){alert("El ejemplar "+datosEjemplar.label+" tiene de jinete a  "+jinete.label)}
                if(datosEjemplar && datosEjemplar.value!="N" && precio){alert("El ejemplar "+datosEjemplar.label+" tiene un precio de "+precio)}
                if(datosEjemplar && datosEjemplar.value!="N" && gualdrapa){alert("El ejemplar "+datosEjemplar.label+" tiene la gualdrapa "+gualdrapa)}
                
            }
            
        }

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

                        <div >Nombre</div>
                        <div ><input id="Carr_Nombre" name="Carr_Nombre"  type="text" onChange={e => setNombre(e.target.value)}></input></div>

                        <div >Fecha</div>
                        <div ><input  id="Carr_Fecha_Hora" name="Carr_Fecha_Hora"   type="datetime-local"  onChange={e => setFecha(e.target.value)}></input></div>

                        <div >Numero de Llamado</div>
                        <div ><input  id="Carr_Numero_Llamado" name="Carr_Numero_Llamado"  type="number" onChange={e => setNumLlamado(e.target.value)}></input></div>

                        <div >Distancia</div>
                        <div ><input  id="Carr_Distancia" name="Carr_Distancia"  type="number" onChange={e => setDistancia(e.target.value)}></input></div>

                        <div >Descripcion</div>
                        <div ><input  id="Carr_Descripcion" name="Carr_Descripcion"  type="text" onChange={e => setDescripcion(e.target.value)}></input></div>

                        <div >Edad Minima</div>
                        <div ><input  id="Carr_Edad_Min" name="Carr_Edad_Min"  type="number" onChange={e => setEdadMin(e.target.value)}></input></div>

                        <div >Edad Maxima</div>
                        <div ><input  id="Carr_Edad_Max" name="Carr_Edad_Max"  type="number" onChange={e => setEdadMax(e.target.value)}></input></div>

                        <div >Minimo de Ganadas</div>
                        <div ><input  id="Carr_Min_Carreras_Ganadas" name="Carr_Min_Carreras_Ganadas"  type="number" onChange={e => setMinGanadas(e.target.value)}></input></div>

                        <div >Maximo de Ganadas</div>
                        <div ><input  id="Carr_Max_Carreras_Ganadas" name="Carr_Max_Carreras_Ganadas"  type="number" onChange={e => setMaxGanadas(e.target.value)}></input></div>

                        <div >Sexo</div>
                        <div ><input  id="Carr_Sexo" name="Carr_Sexo"  type="text" onChange={e => setSexo(e.target.value)}></input></div>

                        <div >Reclamo</div>
                        <div ><input  id="Carr_Reclamo" name="Carr_Reclamo"  type="text" onChange={e => setReclamo(e.target.value)}></input></div>

                        <div >Pista</div>
                        <div ><input  id="Carr_FK_Pista" name="Carr_FK_Pista"  type="number" onChange={e => setPista(e.target.value)}></input></div>

                        <div >Categoria</div>
                        <div ><input  id="Carr_FK_Cat_Car" name="Carr_FK_Cat_Car"  type="number" onChange={e => setCategoria(e.target.value)}></input></div>

                        
                        
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


export default AdminCrud_Carreras;