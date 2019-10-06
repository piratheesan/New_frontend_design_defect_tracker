import React, { Component } from 'react'
import './Style.css'
import Head from './Header.jsx'


export default class Employee extends Component {
    render() {
        return (
            <div>
            <Head />
            <div className="LeftNav">
            <h2>Add Defect</h2>
            <form>
                <label>Name</label><br></br>
                <input type="text" name="name" className="txtid"></input><br></br><br></br>
                <label>Description</label><br></br>
                <input type="text" name="description" className="txtid"></input><br></br><br></br>      
                <label>Employee ID</label> <br></br>                 
                <input type="text" name="empid" className="txtid"></input><br></br><br></br>
                <label>Priority </label><br></br>          
                <select className="txtid" name="priority"> 
                    <option>---Please Select---</option>
                    <option >Low</option>
                    <option>High</option>
                </select><br></br><br></br> 
                <label>Project Id</label> <br></br>
                <input type="text" name="proid" className="txtid"></input><br></br><br></br>
                <label>Severity</label><br></br>
                <select className="txtid" name="severity">
                    <option>---Please Select---</option>
                    <option>Low</option>
                    <option>High</option>
                </select><br></br><br></br>
                <label>Status</label> <br></br> 
                <input type="text" name="status" className="txtid"></input><br></br><br></br>                      
                <button className="save_but" type="submit"><i className="fa fa-save" >
                &nbsp;Save</i></button>                                          
                &emsp;<input type="reset" Value="Reset" className="reset_but"/> 
            </form>                             
            </div>
            
            <div className="RightNavdef">
            <h2>View Defect</h2>
            
            <table border="2" className="tbl1 form_style">
            <tr>
                <th>ID</th>
                <th>Description</th>
                <th>Name</th>
                <th>Employee Id</th>
                <th>Priority</th>
                <th>Project Id</th>
                <th>Severity</th>
                <th>Status</th>                       
                <th>Action</th>
                             
            </tr>
            <tr>
                <td>ID</td>
                <td>Description</td>
                <td>Name</td>
                <td>Employee Id</td>
                <td>Priority</td>
                <td>Project Id</td>
                <td>Severity</td>
                <td>Status</td>               
                <td>&nbsp;&nbsp;<button className="editdef">
                <i className="fa fa-edit" >
                &nbsp;Edit</i></button>
                &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;<button className="deldef">
                <i className="fa fa-trash">                        
                &nbsp;Delete
                </i>
                </button></td>
            </tr>
            
        </table>                                        
            
            </div>
            </div>
        )
    }
}
