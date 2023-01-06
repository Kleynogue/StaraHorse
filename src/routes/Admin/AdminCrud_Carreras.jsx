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



function AdminCrud_Carreras(){

        const [hidden, setHidden] = useState(true);
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [nombre, setNombre] = useState();
        const [fecha, setFecha] = useState();
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

                    <form onSubmit={e => {handleSubmit(e)}} id='FormCrud' className="FormRadioCrud">
                        
                        <div >ID</div>
                        <div  className='IDcrud'>{location.state.Elemento}</div>

                        <div >Nombre</div>
                        <div ><input  type="text" onChange={e => setNombre(e.target.value)}></input></div>

                        <div >Fecha</div>
                        <div ><input  type="date" onChange={e => setFecha(e.target.value)}></input></div>

                        <div >Numero de Llamado</div>
                        <div ><input  type="number" onChange={e => setNumLlamado(e.target.value)}></input></div>

                        <div >Distancia</div>
                        <div ><input  type="number" onChange={e => setDistancia(e.target.value)}></input></div>

                        <div >Descripcion</div>
                        <div ><input  type="text" onChange={e => setDescripcion(e.target.value)}></input></div>

                        <div >Edad Minima</div>
                        <div ><input  type="number" onChange={e => setEdadMin(e.target.value)}></input></div>

                        <div >* Edad Maxima</div>
                        <div ><input  type="number" onChange={e => setEdadMax(e.target.value)}></input></div>

                        <div >Minimo de Ganadas</div>
                        <div ><input  type="number" onChange={e => setMinGanadas(e.target.value)}></input></div>

                        <div >* Maximo de Ganadas</div>
                        <div ><input  type="number" onChange={e => setMaxGanadas(e.target.value)}></input></div>

                        <div >Sexo</div>
                        <div id='ComboboxCrud'><Select styles={customerStyles} options={opcSexo} defaultValue={sexo}  onChange={setSexo}  /></div>

                        <div >Reclamo</div>
                        <div id='ComboboxCrud'><Select styles={customerStyles} options={opcReclamo} defaultValue={reclamo}  onChange={setReclamo}  /></div>

                        <div >Pista</div>
                        <div id='ComboboxCrud'><Select styles={customerStyles} options={opcPista} defaultValue={pista}  onChange={setPista}  /></div>

                        <div >Categoria</div>
                        <div id='ComboboxCrud'><Select styles={customerStyles} options={opcCategoria} defaultValue={categoria}  onChange={setCategoria}  /></div>

                        <div id='mensaje'>----------------------------------------------------------</div>

                        <div >Premio:</div>
                        <div></div>
                        
                        <div >Posicion</div>
                        <div id='ComboboxCrud'><Select styles={customerStyles} options={opcPremioPosicion} defaultValue={premioPosicion}  onChange={setPremioPosicion}  /></div>
                        
                        <div >Tipo</div>
                        <div id='ComboboxCrud'><Select styles={customerStyles} options={opcPremioTipo} defaultValue={premioTipo}  onChange={setPremioTipo}  /></div>
                        
                        <div >Monto</div>
                        <div ><input  type="number" onChange={e => setPremioMonto(e.target.value)}></input></div>
                        
                        <div id='mensaje'>EL ELEMENTO SELECCIONADO SERA ELIMINADO</div>
                        <div >Premio</div>
                        <div id='ComboboxCrud'><Select styles={customerStyles} options={opcPremioSeleccionado} defaultValue={premioSeleccionado}  onChange={setPremioSeleccionado}  /></div>
                        
                        <div id='mensaje'>----------------------------------------------------------</div>

                        <div >Ejemplares:</div>
                        <div id='ComboboxCrud'><Select styles={customerStyles} options={opcEjemplares} defaultValue={insertarEjemplar}  onChange={setInsertarEjemplar}  /></div>
                        
                        <div id='mensaje'>EL ELEMENTO SELECCIONADO SERA ELIMINADO</div>
                        <div >Ejemplar</div>
                        <div id='ComboboxCrud'><Select styles={customerStyles} options={opcEjemplaresCarrera} defaultValue={eliminarEjemplar}  onChange={setEliminarEjemplar}  /></div>
                        
                        <div id='mensaje'>----------------------------------------------------------</div>

                        <div >Ejemplares Inscripcion:</div>
                        <div id='ComboboxCrud'><Select styles={customerStyles} options={opcEjemplaresCarrera} defaultValue={datosEjemplar}  onChange={setDatosEjemplar}  /></div>
                        
                        <div >Jinete</div>
                        <div id='ComboboxCrud'><Select styles={customerStyles} options={opcJinete} defaultValue={jinete}  onChange={setJinete}  /></div>
                        
                        <div >Favorito</div>
                        <div id='ComboboxCrud'><Select styles={customerStyles} options={opcFavorito} defaultValue={favorito}  onChange={setFavorito}  /></div>
                        
                        <div >Comentario</div>
                        <div id='ComboboxCrud'><Select styles={customerStyles} options={opcComentario} defaultValue={comentario}  onChange={setComentario}  /></div>
                        
                        <div >Puesto en Pista</div>
                        <div ><input  type="number" onChange={e => setPuesto(e.target.value)}></input></div>
                        
                        <div >Precio</div>
                        <div ><input  type="number" onChange={e => setPrecio(e.target.value)}></input></div>

                        <div >Gualdrapa</div>
                        <div ><input  type="number" onChange={e => setGualdrapa(e.target.value)}></input></div>

                        <div id='BotonActualizar'><Boton_Direccion  nombre={location.state.estado} /></div>
                    
                    </form>
                    
                    {!hidden ? 
                        <div id='BotonEliminar'><Boton_Direccion  nombre="Delete" /></div>
                    : null}
                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
      
}            


export default AdminCrud_Carreras;