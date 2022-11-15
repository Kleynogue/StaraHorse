import '../StyleSheets/Componentes/Campo_Menu_Ampliado.css';

function Campo_Menu_Ampliado(props){
    return(

        <div className="Contenedor">

            <div className="NombreAtributo">{props.titulo}</div>
            
            <div className="ValorAtributoAmpliado">
                <p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm
				</p>
            </div>

        </div>

    );
    
}

export default Campo_Menu_Ampliado;