import '../StyleSheets/Componentes/Barra_Busqueda.css';

function Barra_Busqueda(){
    return(

        <div className="BarraBusqueda">

            <input type="text"placeholder="Buscar"className="textField"name="busqueda"/>   

            <button className='btnBuscar'></button>
            
        </div>
    );
    
}

export default Barra_Busqueda;