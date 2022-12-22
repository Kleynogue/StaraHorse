import React from 'react';
import { useNavigate,useLocation } from 'react-router';
import { useState } from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Boton_Direccion_Ampliado from '../../Componentes/Boton_Direccion_Ampliado';

import '../../StyleSheets/Usuario/Usuario_Menu_Principal.css';


function Usuario_Pago(){


        const location = useLocation();
        console.log("El monto a pagar es de: "+location.state.monto);


        const tab = '\u00A0\u00A0\u00A0';    //3 espacios en blanco
        const tab2 = '\u00A0';               //1 espacio en blanco

        const [cardnumber, setCardnumber] = useState();
        const [cardname, setCardname] = useState()
        const [cardmonth, setCardmonth] = useState();
        const [cardyear, setCardyear] = useState()
        const [cardcvv, setCardcvv] = useState();

        const navigate = useNavigate();
        const toUsuarioEstableciminto=()=>{
            navigate("/usuario_establecimiento",{
                state:{
                //Variables
                }});
        }

        //Una vez presionado el boton del form
        const handleSubmitPayment = (event) =>{

            console.log("- "+cardnumber);
            console.log("- "+cardname);
            console.log("- "+cardmonth);
            console.log("- "+cardyear);
            console.log("- "+cardcvv);

            if(1==1){   //Pago procesado con exito
                alert('Pago procesado con exito');
                toUsuarioEstableciminto();
            }
            else{       //Fallo al procesar el pago
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
                        <div id='CardNumber'><input type="number" required placeholder='Card Number' onChange={e => setCardnumber(e.target.value)}></input></div>
                        <div id='CardName'><input  type="text" required placeholder='Card Name' onChange={e => setCardname(e.target.value)}></input></div>
                        <div id='CardMonth'><input  type="number" required placeholder='Month' onChange={e => setCardmonth(e.target.value)}></input></div>
                        <div id='CardYear'><input  type="number" required placeholder='Year' onChange={e => setCardyear(e.target.value)}></input></div>
                        <div id='CardCVV'><input  type="number" required placeholder='CVV' onChange={e => setCardcvv(e.target.value)}></input></div>
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