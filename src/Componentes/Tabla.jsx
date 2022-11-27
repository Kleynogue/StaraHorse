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