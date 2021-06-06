import React, { Component } from 'react';
import {StockData} from './data';

function TableData() {
    return(
        <div className="stock-container">
          <table>
            <tr>
              <th>Employee Name</th>
              <th>Employee Id</th>
              <th> Joining Date</th>
              <th>Rule</th>
              <th>Status</th>
              <th>Experience</th> 
              <th>Action</th>
            </tr>       
        { StockData.map((data, key) => {
          return (
            <div key={key}>             
            <tr> 
             {/* key={key} */} 
              <td>{data.first_name +" "+data.last_name}</td>
              <td>{data.empid}</td>
              <td>{data.jdate}</td>
              <td>{data.role}</td>
              <td>{data.status}</td>
              <td>{data.Experience}</td>   
              <td>
                _ _
                </td>         
              
              </tr> 
            </div>
          );
        }) }
            </table>
      </div>   
    
        );
    
}
// const TableData = ({ name, eid,jdate,role,status,expr }) => {
//     // if (!company) return <div />;
//     return (
//       <table>
//         <tbody>
//           {/* <tr>
//             <th>Employee Name</th>
//             <th>Employee ID</th>
//             <th>Joining Date</th>
//             <th>Role</th>
//             <th>Status</th>
//             <th>Experience</th>
//             <th>Active</th>
//           </tr>   */}
          
//           <tr>
//             <td>
//               {name}
//             </td>
//             <td>
//               {eid}
//             </td>
//             <td>
//               {jdate}
//             </td>
//             <td>
//               {role}
//             </td>
//             <td>
//               {status}
//             </td>
//             <td>
//               {expr}
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     );
//   };


export default TableData;