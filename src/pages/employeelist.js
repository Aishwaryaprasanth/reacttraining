import logo from '../components/logo.png'
//  import './App.css';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
// import ''
import Subhead from '../components/subhead';
import Button from '../components/button';
import TableData from '../components/stocks';


function EmployeeList() {
    return(
        <div >
            <Header   />        
            <Sidebar/>
            <div style={{}}>
                <Subhead name = "Employee List" />
                {/* <Button /> */}
            </div> 
            <div >
                <TableData />
            </div>
      </div>
    );
}
export default EmployeeList;