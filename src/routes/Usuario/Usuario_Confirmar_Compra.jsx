import React from 'react';
import { useNavigate,useLocation } from 'react-router';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Boton_Direccion from '../../Componentes/Boton_Direccion';
import '../../StyleSheets/Usuario/Usuario_Menu_Principal.css';
import Resumen_Compra from '../../Componentes/Resumen_Compra';


function Usuario_Confirmar_Compra(){

    
        const location = useLocation();
        console.log("Numero de entradas(1): "+location.state.counter1);
        console.log("Numero de entradas(2): "+location.state.counter2);
        console.log("Numero de entradas(3): "+location.state.counter3);
        
        //generar espacios en blanco
        const tab = '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0';

        let totalEntradas1 = location.state.counter1*80;
        let totalEntradas2 = location.state.counter2*200;
        let totalEntradas3 = location.state.counter3*1500;
        let montoFinal = totalEntradas1+totalEntradas2+totalEntradas3

        //Inicio Direcciones
        const navigate = useNavigate();
        const toUsuarioPago=(direccion)=>{
            navigate(direccion,{
                state:{
                    monto: montoFinal,
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
                    <h2 className='subtitulo'>CONFIRMAR COMPRA</h2>

                    <div className='DResumen'><Resumen_Compra total={totalEntradas1} entradas={location.state.counter1} descripcion={"Grada Central, Butacas, Playa y Pasillos"}/></div>
                    <div className='DResumen'><Resumen_Compra total={totalEntradas2} entradas={location.state.counter2} descripcion={"Zona de Mezzanina"}/></div>
                    <div className='DResumen'><Resumen_Compra total={totalEntradas3} entradas={location.state.counter3} descripcion={"VIP"} /></div>
                    <div className='ppp'>{montoFinal+" Bs."+tab+"TOTAL"}</div>
                    <div className='BotonCompra'><Boton_Direccion fun={()=>toUsuarioPago("/usuario_pago")} nombre="Proceder" /></div>
                </div>

                <div>
                    <Footer/>
                </div>

            </div>
        );
      
}

export default Usuario_Confirmar_Compra;