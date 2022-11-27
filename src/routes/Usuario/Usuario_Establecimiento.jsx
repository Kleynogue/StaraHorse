import React from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Boton_Direccion from '../../Componentes/Boton_Direccion';
import '../../StyleSheets/Usuario/Usuario_Menu_Principal.css';
import Entrada from '../../Componentes/Entrada';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const useCounter = () => {
    const [counter, setCounter] = useState(0);

    const suma = () => {
        if(counter<99){
            return setCounter(counter+1) 
        }
    }

    const resta = () => {
        if(counter>0){
            return setCounter(counter-1) 
        }   
    }

    return {
        counter,
        suma,
        resta
    }
}


function Usuario_Establecimiento(){

        const counter1 = useCounter();
        const counter2 = useCounter();
        const counter3 = useCounter();

        //Inicio Direcciones
        const navigate = useNavigate();
        const toUsuarioConfirmarCompra=(direccion)=>{
            navigate(direccion,{
                state:{
                    counter1: counter1.counter,
                    counter2: counter2.counter,
                    counter3: counter3.counter
                }});
        }
        //Fin Direcciones


        return (
            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='ContenedorEstablecimiento'>
                    <h2 className='subtitulo'>ESTABLECIMIENTO Y ENTRADAS</h2>

                    <div className='InfoRestaurante'>
                        <h3 className='H3Rest' >Informacion de Restaurantes y Horarios</h3>
                        <p className='PRest'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        </p>
                    </div>

                    <div className='DEntrada'><Entrada numero={counter1.counter} sumar={counter1.suma} restar={counter1.resta} descripcion={"Grada Central, Butacas, Playa y Pasillos"} precio={"80 Bs."}/></div>
                    <div className='DEntrada'><Entrada numero={counter2.counter}  sumar={counter2.suma} restar={counter2.resta} descripcion={"Zona de Mezzanina"} precio={"200 Bs."}/></div>
                    <div className='DEntrada'><Entrada numero={counter3.counter} sumar={counter3.suma} restar={counter3.resta} descripcion={"VIP"} precio={"1500 Bs."}/></div>

                    <div className='BotonCompra'><Boton_Direccion fun={()=>toUsuarioConfirmarCompra('/usuario_confirmar')} nombre="Proceder" /></div>

                </div>

                <div>
                    <Footer/>
                </div>

            </div>
        );
      
    
}



export default Usuario_Establecimiento;