import React from 'react';


import Footer from '../../Componentes/Footer';
import Cabecera from '../../Componentes/Cabecera';
import Nav_Usuario from '../../Componentes/Nav_Usuario';
import Boton_Direccion from '../../Componentes/Boton_Direccion';


import '../../StyleSheets/Usuario/Usuario_Menu_General.css';


class Usuario_Cuenta_Privilegios extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          
        };
    }

    handleOptionChange = changeEvent => {
        
        this.setState({  
            selectedOption: changeEvent.target.value,
        });
  
    };

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        console.log("You have submitted:", this.state.selectedOption);
    };



    
    render() {

        return (

            <div className='bodyUsuario'>

                <div>
                    <Cabecera/>
                    <Nav_Usuario />
                </div>

                <div className='MenuInfo'>
                    <h2 className='subtitulo'>PRIVILEGIOS</h2>
                           
                    <form onSubmit={this.handleFormSubmit} className="FormRadio">
                        <div className="DivRadio">
                            
                            <input
                                id="i1"
                                type="radio"
                                name="privilegios"
                                value="Propietario"
                                checked={this.state.selectedOption === "Propietario"}
                                onChange={this.handleOptionChange}/>
                            
                            <label for="i1" className="LabelRadio" >Propietario</label>
                            
                        </div>
                        <div className="DivRadio" >
                            
                            <input 
                                id="i2"
                                type="radio"
                                name="privilegios"
                                value="Entrenador"
                                checked={this.state.selectedOption === "Entrenador"}
                                onChange={this.handleOptionChange}/>

                            <label for="i2" className="LabelRadio" >Entrenador</label>

                        </div>
                        <div className="DivRadio"  >
                            
                            <input 
                                id="i3"
                                type="radio"
                                name="privilegios"
                                value="Jinete"
                                checked={this.state.selectedOption === "Jinete"}
                                onChange={this.handleOptionChange}/>

                            <label for="i3" className="LabelRadio" >Jinete</label>

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
}            


export default Usuario_Cuenta_Privilegios;