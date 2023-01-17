import React, { Component } from 'react'
import { useNavigate,useLocation } from 'react-router';

import Boton_Direccion from './Boton_Direccion';


import '../StyleSheets/Componentes/Tabla.css';

function Tabla_Crud(props){
   
      const navigate = useNavigate();
        const toA=(Elemento,dir)=>{
            navigate(dir,{
                state:{
                    Elemento,
                    Nombre: props.nombreTabla,
                    estado: "Update",
                    token:props.tok
            }});
            console.log("El usuario es: "+Elemento);
        }


      const renderTableData=()=> {
      
      return props.datos.map((Elementos) => {
         
       
         for (var i in Elementos) {  
            //console.log("Elemento: "+i)      
         }

         switch (props.col) {
            case 1:{
               const { Col1} = Elementos 
               
               return (
                  <tr key={Col1}>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col1}</td>
                  </tr>
               )
            }
            case 2:{
               const { Col1, Col2} = Elementos 
               
               return (
                  <tr key={Col1}>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col1}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col2}</td>
                  </tr>
               )
            }
            case 3:{
               const { Col1, Col2, Col3} = Elementos 
               return (
                  <tr key={Col1}>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col1}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col2}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col3}</td>
                  </tr>
               )
            }
            case 4:{
               const { Col1, Col2, Col3, Col4} = Elementos 
               return (
                  <tr key={Col1}>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col1}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col2}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col3}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col4}</td>
                  </tr>
               )
            }
            case 5:{
               const { Col1, Col2, Col3, Col4, Col5 } = Elementos 
               return (
                  <tr key={Col1}>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col1}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col2}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col3}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col4}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col5}</td>
                  </tr>
               )
            }
            case 6:{
               const { Col1, Col2, Col3, Col4, Col5, Col6 } = Elementos 
               return (
                  <tr key={Col1}>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col1}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col2}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col3}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col4}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col5}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col6}</td>
                     
                  </tr>
               )
            }
            case 7:{
               const { Col1, Col2, Col3, Col4, Col5, Col6, Col7 } = Elementos 
               return (
                  <tr key={Col1}>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col1}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col2}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col3}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col4}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col5}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col6}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col7}</td>
                  </tr>
               )
            }
            case 8:{
               const { Col1, Col2, Col3, Col4, Col5, Col6, Col7, Col8 } = Elementos 
               return (
                  <tr key={Col1}>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col1}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col2}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col3}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col4}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col5}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col6}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col7}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col8}</td>
                  </tr>
               )
            }
            case 9:{
               const { Col1, Col2, Col3, Col4, Col5, Col6, Col7, Col8, Col9} = Elementos 
               return (
                  <tr key={Col1}>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col1}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col2}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col3}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col4}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col5}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col6}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col7}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col8}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col9}</td>
                  </tr>
               )
            }
            case 10:{
               const { Col1, Col2, Col3, Col4, Col5, Col6, Col7, Col8, Col9, Col10 } = Elementos 
               return (
                  <tr key={Col1}>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col1}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col2}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col3}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col4}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col5}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col6}</td>
                     <td>{Col7}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col8}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col9}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col10}</td>
                  </tr>
               )
            }
            case 13:{
               const { Col1, Col2, Col3, Col4, Col5, Col6, Col7, Col8, Col9, Col10, Col11, Col12, Col13 } = Elementos 
               return (
                  <tr key={Col1}>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col1}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col2}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col3}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col4}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col5}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col6}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col7}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col8}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col9}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col10}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col11}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col12}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col13}</td>
                  </tr>
               )
            }
            case 14:{
               const { Col1, Col2, Col3, Col4, Col5, Col6, Col7, Col8, Col9, Col10, Col11, Col12, Col13, Col14 } = Elementos 
               return (
                  <tr key={Col1}>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col1}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col2}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col3}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col4}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col5}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col6}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col7}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col8}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col9}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col10}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col11}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col12}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col13}</td>
                     <td onClick={()=>toA(Col1,"/admin_cruds_"+props.nombreTabla)}>{Col14}</td>
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

export default Tabla_Crud 