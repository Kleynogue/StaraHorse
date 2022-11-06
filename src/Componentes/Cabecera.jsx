import '../StyleSheets/Componentes/Cabecera.css';

function Cabecera(){
    return(

        <header>
            <div className='Cabecera'>
                <img
                    className='Cabecera_Logo'
                    src={require('../Imagenes/Hipodromo.png')}
                    alt='Logo' />
            </div>
            <h1>HIPÓDROMO LA RINCONADA</h1>
        </header>

    );
    
}

export default Cabecera;