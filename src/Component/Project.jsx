import React, { Component } from 'react'
import './Style.css'
import Head from './Header.jsx'
import Footer from './Footer.jsx'
import Axios from 'axios';

export default class Project extends Component {

    state  = {
        projects: []
      }
    
    componentDidMount() {
      Axios.get("http://localhost:8080/dt/api/v1/project")
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
      handleEdit(id){
        Axios.get("http://localhost:8080/dt/api/v1/project/update/{pid}")
        .then(res => {
            console.log(res)
          //   console.warn("Refresh Service is working");
            this.setState({ data:res.data });
          });
    }
    
    handleDelete = (id) => {
      Axios.delete("http://localhost:8080/dt/api/v1/project/" + id)
      .then(res => {
      //   console.warn("Delete Service is working");
        this.refreshProject(res);  
        window.alert(" Project deleted successfully");
      });
    }
   
    // constructor(props) {
    //   super(props);
  
    //   this.state.data = {
    //     projectName: '',
    //     projectDescription: '',        
    //   };
    // }
    // handleSubmit = e => {
    //   e.preventDefault();
  
    //   const { projectName, projectDescription } = this.state;  
    //   const Project = {
    //     projectName,
    //     projectDescription,
    //   };
  
    //   Axios
    //     .post('http://localhost:8080/dt/api/v1/project', Project)
    //     .then(() => console.log('Project  Added'))
    //     .catch(err => {
    //       console.error(err);
    //     });
    // };
    
    
    handleChange = event => {
      this.setState({ projectName: event.target.value });
      this.setState({ projectDescription: event.target.value });
    }
  
    handleSubmit = event => {
      event.preventDefault();
  
      const Project = {
        projectName: this.state.projectName,
        projectDescription: this.state.projectDescription,

      };
  
      Axios.post("http://localhost:8080/dt/api/v1/project", { Project })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
     
  }
  
    render() {
        console.log(this.state.projects)
        return (
            <div>
            <Head />
                <div className="LeftNav">           

                <h2>Add Project</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label><br></br>
                    <input type="text" name="projectName" className="txtid" onChange={this.handleChange}></input><br></br><br></br>     
                    <label>Description</label> <br></br>                 
                    <input type="text" name="projectDescription" className="txtid"  onChange={this.handleChange}></input><br></br><br></br>
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
                    &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;
                    <button className="del" onClick={()=>this.handleDelete(p.projectId)}>
                    <i className="fa fa-trash">                        
                    &nbsp;Delete
                    </i>
                    </button>
                    </td>
                </tr>) 
                }) }
                 </table>                                               
                
                </div>
                <Footer />
            </div>
        );
    }
}
