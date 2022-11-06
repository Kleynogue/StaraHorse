import React, { Component } from 'react'

import '../StyleSheets/Componentes/Tabla.css';

class Tabla extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = props.datos;
   }

   

renderTableData() {
   
   return this.state.students.map((student, index) => {
      
       
      switch (this.props.col) {
         case 2:{
            const { Col1, Col2} = student 
            return (
               <tr key={Col1}>
                  <td>{Col1}</td>
                  <td>{Col2}</td>
               </tr>
            )
         }
         case 3:{
            const { Col1, Col2, Col3} = student 
            return (
               <tr key={Col1}>
                  <td>{Col1}</td>
                  <td>{Col2}</td>
                  <td>{Col3}</td>
               </tr>
            )
         }
         case 4:{
            const { Col1, Col2, Col3, Col4} = student 
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
            const { Col1, Col2, Col3, Col4, Col5 } = student 
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
            const { Col1, Col2, Col3, Col4, Col5, Col6 } = student 
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

 renderTableHeader() {
    


    let header = ["Lugar de llegada", "Distancia", "Jinete", "Fecha","Peso del ejemplar","Tiempo"];
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }

 render() {
    return (
       <div>
          
          <table id='students'>
             <tbody>
                <tr>{this.renderTableHeader()}</tr>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 }
}

export default Tabla //exporting a component make it reusable and this is the beauty of react