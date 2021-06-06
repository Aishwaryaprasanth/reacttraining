import React from 'react';
import Button from './button';


function Subhead(props) {
    
    return(
        
       <div className="sub-head" >         
           <div  >          
                {props.name}                             
            </div>
           
            <div>
                {/* <label for="filter">Filter By</label>
                    <select name="cars" id="cars">   
                        <option value="Status">Status</option>
                        <option value="role">Role</option>
                    </select>
                    </div >
                    <div style={{display:'block'}}> */}
                <Button />
                </div>
                
           
        </div>
        
    )
}
// function Subheadwithbutton() {
//     return(
//         <Subhead  />
//     )
// }



export default Subhead;