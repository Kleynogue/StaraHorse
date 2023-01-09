import React, { Component } from 'react'

import '../StyleSheets/Componentes/Tabla.css';

function Tabla(props){
   

   const renderTableData=()=> {
      
      return props.datos.map((Elementos) => {
         

         switch (props.col) {
            case 2:{
               const { Col1, Col2} = Elementos 
               
               return (
                  <tr key={Col1}>
                     <td>{Col1}</td>
                     <td>{Col2}</td>
                  </tr>
               )
            }
            case 3:{
               const { Col1, Col2, Col3} = Elementos 
               return (
                  <tr key={Col1}>
                     <td>{Col1}</td>
                     <td>{Col2}</td>
                     <td>{Col3}</td>
                  </tr>
               )
            }
            case 4:{
               const { Col1, Col2, Col3, Col4} = Elementos 
               return (
                  <tr key={Col1}>
                     <td>{Col1}</td>
                     <td>{Col2}</td>
                     <td>{Col3}</td>
                     <td>{Col4}</td>
                  </tr>
               )
            }
            case 5:{
               const { Col1, Col2, Col3, Col4, Col5 } = Elementos 
               return (
                  <tr key={Col1}>
                     <td>{Col1}</td>
                     <td>{Col2}</td>
                     <td>{Col3}</td>
                     <td>{Col4}</td>
                     <td>{Col5}</td>
                  </tr>
               )
            }
            case 6:{
               const { Col1, Col2, Col3, Col4, Col5, Col6 } = Elementos 
               return (
                  <tr key={Col1}>
                     <td>{Col1}</td>
                     <td>{Col2}</td>
                     <td>{Col3}</td>
                     <td>{Col4}</td>
                     <td>{Col5}</td>
                     <td>{Col6}</td>
                  </tr>
               )
            }
            case 7:{
               const { Col1, Col2, Col3, Col4, Col5, Col6, Col7} = Elementos 
               return (
                  <tr key={Col1}>
                     <td>{Col1}</td>
                     <td>{Col2}</td>
                     <td>{Col3}</td>
                     <td>{Col4}</td>
                     <td>{Col5}</td>
                     <td>{Col6}</td>
                     <td>{Col7}</td>
                  </tr>
               )
            }
            case 8:{
               const { Col1, Col2, Col3, Col4, Col5, Col6, Col7, Col8 } = Elementos 
               return (
                  <tr key={Col1}>
                     <td onClick={()=>props.fun(Col1)}>{Col1}</td>
                     <td onClick={()=>props.fun(Col1)}>{Col2}</td>
                     <td onClick={()=>props.fun(Col1)}>{Col3}</td>
                     <td onClick={()=>props.fun(Col1)}>{Col4}</td>
                     <td onClick={()=>props.fun(Col1)}>{Col5}</td>
                     <td onClick={()=>props.fun(Col1)}>{Col6}</td>
                     <td onClick={()=>props.fun(Col1)}>{Col7}</td>
                     <td onClick={()=>props.fun(Col1)}>{Col8}</td>
                  </tr>
               )
            }
            case 10:{
               const { Col1, Col2, Col3, Col4, Col5, Col6, Col7, Col8, Col9, Col10 } = Elementos 
               return (
                  <tr key={Col1}>
                     <td>{Col1}</td>
                     <td>{Col2}</td>
                     <td>{Col3}</td>
                     <td>{Col4}</td>
                     <td>{Col5}</td>
                     <td>{Col6}</td>
                     <td>{Col7}</td>
                     <td>{Col8}</td>
                     <td>{Col9}</td>
                     <td>{Col10}</td>
                  </tr>
               )
            }
            case 14:{
               const { Col1, Col2, Col3, Col4, Col5, Col6, Col7, Col8, Col9, Col10, Col11, Col12, Col13, Col14 } = Elementos 
               return (
                  <tr key={Col1}>
                     <td>{Col1}</td>
                     <td>{Col2}</td>
                     <td>{Col3}</td>
                     <td>{Col4}</td>
                     <td>{Col5}</td>
                     <td>{Col6}</td>
                     <td>{Col7}</td>
                     <td>{Col8}</td>
                     <td>{Col9}</td>
                     <td>{Col10}</td>
                     <td>{Col11}</td>
                     <td>{Col12}</td>
                     <td>{Col13}</td>
                     <td>{Col14}</td>
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

export default Tabla //exporting a component make it reusable and this is the beauty of react