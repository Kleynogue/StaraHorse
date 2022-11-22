import React from 'react';


import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Boton_Direccion from '../../Componentes/Boton_Direccion';


import '../../StyleSheets/Usuario/Usuario_Menu_General.css';
import { useState } from 'react';


function Usuario_Cuenta_Privilegios(){

        const [peso, setPeso] = useState(0);
        const [altura, setAltura] = useState(0);
        
        const [estado, setEstado] = useState()
        const [hidden, setHidden] = useState(true);

        
        const handleSubmit= (e) => {
            e.preventDefault();
            console.log("You have submitted:"+estado);
            if(estado!="jinete"){
                /*De ser necesario aqui se pueden hacer comprobaciones respecto a la solicitud de entrenador y propietario */
                alert('Privilegio '+estado+' solicitado con exito');
            }
            else{
                /*De ser necesario aqui se pueden hacer comprobaciones respecto al peso y altura del jinete */
                alert('Privilegio '+estado+' solicitado con exito Peso: '+peso+' Altura: '+altura);
            }   
        }


        const jinete= () => {
            setEstado("jinete");
            if(hidden){
                setHidden(s => !s);
            }   
        }
        const otro= (est) => {
            setEstado(est);
            if(!hidden){
                setHidden(s => !s);
            }   
        }


        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='MenuInfo'>
                    <h2 className='subtitulo'>PRIVILEGIOS</h2>
                           
                    <form onSubmit={e => {handleSubmit(e)}} className="FormRadio">
                        <div className="DivRadio">
                            
                            <input
                                id="i1"
                                type="radio"
                                name="privilegios"
                                value={"propietario"}
                                checked={estado=="propietario"}
                                onChange={e => setEstado(e.target.value)}/>
                            
                            <label onClick={()=>otro("propietario")} htmlFor="i1"  className="LabelRadio" >Propietario</label>
                            
                        </div>
                        <div className="DivRadio" >
                            
                            <input 
                                id="i2"
                                type="radio"
                                name="privilegios"
                                value={"entrenador"}
                                checked={estado=="entrenador" }
                                onChange={e => setEstado(e.target.value)}/>

                            <label onClick={()=>otro("entrenador")} htmlFor="i2" className="LabelRadio" >Entrenador</label>

                        </div>
                        <div className="DivRadio"  >
                            
                            <input 
                                id="i3"
                                type="radio"
                                name="privilegios"
                                value={"jinete"}
                                checked={estado=="jinete" }
                                onChange={e => setEstado(e.target.value)}/>

                            <label onClick={jinete} htmlFor="i3" className="LabelRadio" >Jinete</label>

                        </div>
                        
                        {!hidden ? 
                            <form id='FormJinete' >
                                <div id='PesoInput'><input type="number" required="" placeholder='Peso' onChange={e => setPeso(e.target.value)}></input></div>
                                <div id='AlturaInput'><input type="number" required="" placeholder='Altura' onChange={e => setAltura(e.target.value)}></input></div>
                            </form>  
                        : null}
                        
                        <div className='BotonSolicitar'><Boton_Direccion nombre="Solicitar" /></div>

                    </form>         
                                
                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
     
}            


export default Usuario_Cuenta_Privilegios;