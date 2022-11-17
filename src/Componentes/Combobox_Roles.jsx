import '../StyleSheets/Componentes/Combobox_Roles.css';
import Select from 'react-select'



function Combobox_Roles(props){

    

    const customerStyles = { 
        control: (styles, {isFocused}) => ({ 
            ...styles, 
            
            backgroundColor: "#FFFFFF",
            border: "5px 5px 0 0", 
            borderColor: "#F37021",
            boxShadow: 'none' }), 
            color: "#817A72",

        option: (styles, {isFocused}) => { 
            return { 
                ...styles, 
                backgroundColor: isFocused ? "#F37021" : "#FFFFFF",
                color: isFocused ? "#FFFFFF" : "#817A72",
                }
        }, input: styles => ({ ...styles, color: "#817A72" }), 
    
    
    };

    return(

        <div className='Select'>
            <Select styles={customerStyles} options={props.opciones} />
        </div>
    );
    
}

export default Combobox_Roles;