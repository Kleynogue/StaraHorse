import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';
import Select from 'react-select'

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';

import '../../StyleSheets/Admin/Admin_Menu_Principal.css';
import Boton_Direccion_Ampliado from '../../Componentes/Boton_Direccion_Ampliado';
import NavAdmin2 from '../../Componentes/NavAdmin2';
import Boton_Direccion from '../../Componentes/Boton_Direccion';
import Combobox_Roles from '../../Componentes/Combobox_Roles';



function AdminCrud_Uniformes(){
        const location = useLocation();
        console.log("Token Cuenta Admin: "+location.state.token);

        const [hidden, setHidden] = useState(true);
        const [cargado, setCargado] = useState("false");    //Nos ayuda a asegurarnos que solo cargue una vez (evitar loops infinitos)
        const [tipo, setTipo] = useState();
        const [descripcion, setDescripcion] = useState();
        const [estatus, setEstatus] = useState();
        const [stud, setStud] = useState();
        const [colorSelecionado, setColorSelecionado] = useState();
        const [color, setColor] = useState();
 
        const [opcTipo, setOpcTipo] = useState();
        const [opcEstatus, setOpcEstatus] = useState();
        const [opcStud, setOpcStud] = useState();
        const [opcColorSelecionado, setOpcColorSelecionado] = useState();
        const [opcColor, setOpcColor] = useState();

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

                const OpTipo = [
                    { value: '0', label: 'No aplica' },
                    { value: '1', label: 'Gorra' },
                    { value: '2', label: 'Chaquetilla' },
                ]
                setOpcTipo(OpTipo);

                const OpEstatus = [
                    { value: '0', label: 'No aplica' },
                    { value: '1', label: 'Activo' },
                    { value: '2', label: 'Desuso' },
                ]
                setOpcEstatus(OpEstatus);

                const OpStud = [
                    { value: '0', label: 'No aplica' },
                    { value: '1', label: 'Stud1' },
                    { value: '2', label: 'Stud2' },
                    { value: '3', label: 'Stud3' },
                    { value: '4', label: 'Stud4' },
                    { value: '5', label: 'Stud5' },
                ]
                setOpcStud(OpStud);


                const OpColor = [
                    { value: '0', label: 'No aplica' },
                    { value: '1', label: 'Azul' },
                    { value: '2', label: 'Rojo' },
                    { value: '3', label: 'Amarillo' },
                    { value: '4', label: 'Verde' },
                    { value: '5', label: 'Morado' },
                ]
                setOpcColor(OpColor);

                const OpColorSeleccionado = [
                    { value: '0', label: 'No aplica' },
                    { value: '1', label: 'Azul' },
                    { value: '2', label: 'Rojo' },
                ]
                setOpcColorSelecionado(OpColorSeleccionado);

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
                //colorSelecionado puede ser null
                if(tipo && descripcion && estatus && stud && color){
                    alert("Se crea con exito el uniforme")
                }
                else{
                    alert("Todos los campos deben ser llenados")
                }
            }
            else{
                if(tipo){alert("Se actuliza tipo por: "+tipo.label)}
                if(descripcion){alert("Se actuliza descripcion por: "+descripcion)}
                if(estatus){alert("Se actuliza estatus por: "+estatus.label)}
                if(stud){alert("Se actuliza stud por: "+stud.label)}
                if(color){alert("Se incorpora el color: "+color.label)}
                if(colorSelecionado){alert("Se elimina el color: "+colorSelecionado.label)}
            }
            
        }



        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <NavAdmin2  tok={location.state.token}/>
                    <h2 className='subtitulo'>CRUD ({location.state.Nombre})</h2>

                </div>

                
                <div id='ContFormCrud' >

                    <form   method="POST" action={accion} id='FormCrud' className="FormRadioCrud">

                        <div >ID</div>
                        <div  className='IDcrud'>{location.state.Elemento}</div>

                        <div >Descripcion</div>
                        <div ><input id="Unif_Descripcion" name="Unif_Descripcion"   type="text" onChange={e => setDescripcion(e.target.value)} ></input></div>

                        <div >Tipo</div>
                        <div ><input id="Unif_Tipo" name="Unif_Tipo"  type="text" onChange={e => setTipo(e.target.value)} ></input></div>
                        
                        <div >Estatus</div>
                        <div ><input id="Unif_Estatus" name="Unif_Estatus"  type="text" onChange={e => setEstatus(e.target.value)} ></input></div>
                        
                        <div >Stud</div>
                        <div ><input id="Unif_FK_Stud" name="Unif_FK_Stud"  type="number" onChange={e => setStud(e.target.value)} ></input></div>

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


export default AdminCrud_Uniformes;