import React, { Component } from 'react'
import { useNavigate,useLocation } from 'react-router';

import '../StyleSheets/Componentes/Tabla.css';

function Tabla_Apuesta(props){

   //Inicio Direcciones
   const navigate = useNavigate();
   const toA=(id,direccion)=>{
       navigate(direccion,{
           state:{
            ID:id
           }});
   }
   //Fin Direcciones

   const renderTableData=()=> {
      
      return props.datos.map((Elementos) => {
         

         switch (props.col) {
            
            case 4:{
               const { Col1, Col2, Col3, Col4} = Elementos 
               return (
                  <tr key={Col1}>
                     <td onClick={()=>toA(Col1,"/usuario_apuestas_inscripcion")}>{Col1}</td>
                     <td onClick={()=>toA(Col1,"/usuario_apuestas_inscripcion")}>{Col2}</td>
                     <td onClick={()=>toA(Col1,"/usuario_apuestas_inscripcion")}>{Col3}</td>
                     <td onClick={()=>toA(Col1,"/usuario_apuestas_inscripcion")}>{Col4}</td>
                  </tr>
               )
            }

            case 7:{
               const { Col1, Col2, Col3, Col4, Col5, Col6, Col7} = Elementos 
               return (
                  <tr key={Col1}>
                     <td onClick={()=>toA(Col1,"/usuario_apuestas_detalle")}>{Col1}</td>
                     <td onClick={()=>toA(Col1,"/usuario_apuestas_detalle")}>{Col2}</td>
                     <td onClick={()=>toA(Col1,"/usuario_apuestas_detalle")}>{Col3}</td>
                     <td onClick={()=>toA(Col1,"/usuario_apuestas_detalle")}>{Col4}</td>
                     <td onClick={()=>toA(Col1,"/usuario_apuestas_detalle")}>{Col5}</td>
                     <td onClick={()=>toA(Col1,"/usuario_apuestas_detalle")}>{Col6}</td>
                     <td onClick={()=>toA(Col1,"/usuario_apuestas_detalle")}>{Col7}</td>
                  </tr>
               )
            }
            
         }  
         
         
      })
   }

 const renderTableHeader=()=> {
    return props.columnas.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

 
    return (
       <div>
          <table id='students'>
             <tbody>
                <tr>{renderTableHeader()}</tr>
                {renderTableData()}
             </tbody>
          </table>
       </div>
    )
 
}

export default Tabla_Apuesta //exporting a component make it reusable and this is the beauty of react