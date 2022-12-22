import { useState } from 'react';

import '../StyleSheets/Componentes/Barra_Busqueda.css';

function Barra_Busqueda(props){
    
    const [busqueda, setBusqueda] = useState();
    
    return(

        <form className="BarraBusqueda" onSubmit={(e) => {props.fun(e,busqueda)}}>

            <input type="text"placeholder="Buscar" required className="textField"name="busqueda" onChange={e => setBusqueda(e.target.value)}/>   

            <button type='submit' className='btnBuscar'></button>
            
        </form>
    );
    
}

export default Barra_Busqueda;