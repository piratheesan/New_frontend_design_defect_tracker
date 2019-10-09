import React, { Component } from 'react'
import './Style.css'
import Head from './Header.jsx'
import Footer from './Footer.jsx'
import Axios from 'axios';

export default class Project extends Component {

    state = {
        projects: []
      }
    
        componentDidMount() {
        Axios.get(`http://localhost:8080/dt/api/v1/project`)
          .then(res => {
            console.log(res);
             this.setState({ projects:res.data });
             console.log( this.setState);
          })
          this.refreshProject();
    }
    refreshProject() {
        Axios.get("http://localhost:8080/dt/api/v1/project")
        .then(res => {
        //   console.warn("Refresh Service is working");
          this.setState({ projects:res.data });
        });
      }
      
        

    render() {
        console.log('hhh'+this.state.projects)
        return (
            <div>
            <Head />
                <div className="LeftNav">           

                <h2>Add Project</h2>
                <form>
                    <label>Name</label><br></br>
                    <input type="text" name="projectName" className="txtid" ></input><br></br><br></br>     
                    <label>Description</label> <br></br>                 
                    <input type="text" name="projectDescription" className="txtid" ></input><br></br><br></br>
                    <button className="save_but" type="submit"><i className="fa fa-save" >
                    &nbsp;Save</i></button>                                         
                    &emsp;<input type="reset" Value="Reset" className="reset_but"/> 
                </form>                             
                </div>
                <div className="RightNav">
                <h2>View Project</h2>
                
                <table border="2" className="tbl1 form_style">
                <tr>
                    <th>ID</th>
                    <th>Description</th>
                    <th>Name</th>                        
                    <th>Action</th>                    
                </tr>
                { this.state.projects.map(p=>{
                 return(                
                   <tr>
                    <td>{p.projectId}</td>
                    <td>{p.projectDescription}</td>
                    <td>{p.projectName}</td>
                    <td>&nbsp;&nbsp;<button className="edit">
                    <i className="fa fa-edit" >
                    &nbsp;Edit</i></button>
                    &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;<button className="del">
                    <i className="fa fa-trash">                        
                    &nbsp;Delete
                    </i>
                    </button></td>
                </tr>) 
                }) }
                 </table>                                               
                
                </div>
                <Footer />
            </div>
        );
    }
}
