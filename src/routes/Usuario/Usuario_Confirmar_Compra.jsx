import React from 'react';

import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Boton_Direccion from '../../Componentes/Boton_Direccion';
import '../../StyleSheets/Usuario/Usuario_Menu_Principal.css';
import Resumen_Compra from '../../Componentes/Resumen_Compra';


class Usuario_Confirmar_Compra extends React.Component{

    


    render() {

        console.log("You hasssssssssssssss:"+this.props.aaa);


        return (
            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='ContenedorEstablecimiento'>
                    <h2 className='subtitulo'>CONFIRMAR COMPRA</h2>

                    <div className='DResumen'><Resumen_Compra descripcion={"Grada Central, Butacas, Playa y Pasillos"}/></div>
                    <div className='DResumen'><Resumen_Compra descripcion={"Zona de Mezzanina"}/></div>
                    <div className='DResumen'><Resumen_Compra descripcion={"VIP"}/></div>
                    
                    

                      
                    <div className='BotonCompra'><Boton_Direccion nombre="Proceder" /></div>
                </div>

                <div>
                    <Footer/>
                </div>

            </div>
        );
    }  
}

export default Usuario_Confirmar_Compra;