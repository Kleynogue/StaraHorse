import '../StyleSheets/Componentes/Resumen_Compra.css';

function Resumen_Compra(props){

    

    return(
        <div className="ContenedorResumen">
            <div className='NumeroEntradasResumen'><div>{props.entradas}</div></div>
            <div className='DescripcionEntradaResumen'>{props.descripcion}</div>
            <div className="TotalEntrada">{props.total}</div>     
        </div>
    );
    
}

export default Resumen_Compra;