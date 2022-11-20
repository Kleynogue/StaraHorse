import React from 'react';


import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Boton_Direccion from '../../Componentes/Boton_Direccion';


import '../../StyleSheets/Usuario/Usuario_Menu_General.css';
import { useState } from 'react';


function Usuario_Cuenta_Privilegios(){

    
    const [estado, setEstado] = useState()
    
    const handleSubmit= (e) => {
        e.preventDefault();
        console.log("You have submitted:"+estado);
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
                            
                            <label onClick={() => {setEstado("propietario");}} htmlFor="i1"  className="LabelRadio" >Propietario</label>
                            
                        </div>
                        <div className="DivRadio" >
                            
                            <input 
                                id="i2"
                                type="radio"
                                name="privilegios"
                                value={"entrenador"}
                                checked={estado=="entrenador" }
                                onChange={e => setEstado(e.target.value)}/>

                            <label onClick={() => {setEstado("entrenador");}} htmlFor="i2" className="LabelRadio" >Entrenador</label>

                        </div>
                        <div className="DivRadio"  >
                            
                            <input 
                                id="i3"
                                type="radio"
                                name="privilegios"
                                value={"jinete"}
                                checked={estado=="jinete" }
                                onChange={e => setEstado(e.target.value)}/>

                            <label onClick={() => {setEstado("jinete");}} htmlFor="i3" className="LabelRadio" >Jinete</label>

                        </div>
                        
                        
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