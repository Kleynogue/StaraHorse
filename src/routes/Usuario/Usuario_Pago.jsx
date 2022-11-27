import React from 'react';
import { useNavigate,useLocation } from 'react-router';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Boton_Direccion_Ampliado from '../../Componentes/Boton_Direccion_Ampliado';

import '../../StyleSheets/Usuario/Usuario_Menu_Principal.css';


function Usuario_Pago(){
        const navigate = useNavigate();
        const location = useLocation();
        console.log("El monto a pagar es de: "+location.state.monto);
        const tab = '\u00A0\u00A0\u00A0';    
        const tab2 = '\u00A0';

        const handleSubmitPayment = (event) =>{
            if(1==1){
                alert('Pago procesado con exito');
                navigate("/usuario_establecimiento",{
                    state:{
                    //Variables
                }});
            }
            else{
                alert('Error al procesar el pago');
            }
            event.preventDefault();    
        }

        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='DLista'>
                    <h2 className='subtitulo'>PAGO</h2>
                    <form id='FormPago' onSubmit={(e) => handleSubmitPayment(e)}>
                        <div id='CardNumber'><input type="number" required="" placeholder='Card Number' ></input></div>
                        <div id='CardName'><input  type="text" required="" placeholder='Card Name'></input></div>
                        <div id='CardMonth'><input  type="number" required="" placeholder='Month'></input></div>
                        <div id='CardYear'><input  type="number" required="" placeholder='Year'></input></div>
                        <div id='CardCVV'><input  type="number" required="" placeholder='CVV'></input></div>
                        <div id='CardBoton'><Boton_Direccion_Ampliado  nombre={"Confirmar y Pagar: "+tab+location.state.monto+tab2+"Bs."} /></div>
                    </form> 
                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        );
      
}            


export default Usuario_Pago;