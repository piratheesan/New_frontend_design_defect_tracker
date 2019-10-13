import React, { Component } from 'react'
import './Style.css'
import Head from './Header.jsx'
import Footer from './Footer.jsx'
import Axios from 'axios';

export default class Employee extends Component {

    state = {
        defects: []
      }

      componentDidMount() {
        Axios.get(`http://localhost:8080/dt/api/v1/defect`)
          .then(res => {
            console.log(res);
             this.setState({ defects:res.data });
             console.log( this.setState);
          })
          this.refreshDefect();
    }
    refreshDefect() {
        Axios.get("http://localhost:8080/dt/api/v1/defect")
        .then(res => {
        //   console.warn("Refresh Service is working");
          this.setState({ defects:res.data });
        });
      }

      handleDelete = (id) => {
        Axios.delete("http://localhost:8080/dt/api/v1/defect/" + id)
        .then(res => {
        //   console.warn("Delete Service is working");
          this.refreshDefect(res);  
          window.alert(" defects deleted successfully");
        });
      }
     

    render() {
        console.log(this.state.defects)
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
            { this.state.defects.map(d=>{
            return( 
            <tr>
                <td>{d.defectId}</td>
                <td>{d.defectDescription}</td>
                <td>{d.defectName}</td>
                <td>{d.empId}</td> 
                <td>{d.priorityChoices}</td>
                <td>{d.projectId}</td>
                <td>{d.severityChoices}</td>
                <td>{d.status}</td>
                              
                <td>&nbsp;&nbsp;<button className="editdef">
                <i className="fa fa-edit" >
                &nbsp;Edit</i></button>
                &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;<button className="deldef" onClick={()=>this.handleDelete(d.defectId)}>
                <i className="fa fa-trash">                        
                &nbsp;Delete
                </i>
                </button></td>
                </tr>) 
                }) }
            </table>                                        
            <br></br><br></br><br></br><br></br>
            </div>
            <br></br><br></br><br></br><br></br>
            <Footer />
            </div>
        )
    }
}
