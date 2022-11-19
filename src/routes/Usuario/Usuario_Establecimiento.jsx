import React from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Boton_Direccion from '../../Componentes/Boton_Direccion';
import '../../StyleSheets/Usuario/Usuario_Menu_Principal.css';
import Entrada from '../../Componentes/Entrada';

import { BrowserRouter, Route, Routes, Navigate  } from 'react-router-dom';
import Usuario_Confirmar_Compra from './Usuario_Confirmar_Compra';
import { useNavigate } from 'react-router-dom';

class Usuario_Establecimiento extends React.Component{

    state = {
        counter: 0,
        counter2: 0,
        counter3: 0,
    };
    
    suma = (count) => {
        if(this.state.counter<100){
            
            if(count==1){
                this.setState(prevState => ({counter: prevState.counter + 1}));
            }
            else if(count==2){
                this.setState(prevState => ({counter2: prevState.counter2 + 1}));
            }
            else{
                this.setState(prevState => ({counter3: prevState.counter3 + 1}));
            }
            
        }
        
        console.log("You have submitted:"+count);
      };

    resta = (count) => {
        
            if(count==1 && this.state.counter>0){
                this.setState(prevState => ({counter: prevState.counter - 1}));
            }
            else if(count==2 && this.state.counter2>0){
                this.setState(prevState => ({counter2: prevState.counter2 - 1}));
            }
            else if(this.state.counter3>0){
                this.setState(prevState => ({counter3: prevState.counter3 - 1}));
            }
        
        
        console.log("You have submitted:"+this.state.counter);
    };

    
 

    
    render() {
        
        


        


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

                    <div className='DEntrada'><Entrada sum={this.state.counter} sumar={(evt) => this.suma(1)} restar={(evt) => this.resta(1)} descripcion={"Grada Central, Butacas, Playa y Pasillos"} precio={"80 Bs."}/></div>
                    <div className='DEntrada'><Entrada sum={this.state.counter2}  sumar={(evt) => this.suma(2)} restar={(evt) => this.resta(2)} descripcion={"Zona de Mezzanina"} precio={"200 Bs."}/></div>
                    <div className='DEntrada'><Entrada sum={this.state.counter3} sumar={(evt) => this.suma(3)} restar={(evt) => this.resta(3)} descripcion={"VIP"} precio={"1500 Bs."}/></div>

                    <div className='BotonCompra'><Boton_Direccion dir={'/usuario_confirmar'} nombre="Proceder" s={this.state}/></div>

                </div>

                <div>
                    <Footer/>
                </div>



                


            </div>
        );
    }  
    
}



export default Usuario_Establecimiento;