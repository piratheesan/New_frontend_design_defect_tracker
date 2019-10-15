import React, { Component } from 'react'
import './Style.css'
import Head from './Header.jsx'
import Footer from './Footer.jsx'
import Axios from 'axios';

export default class Project extends Component {

    state  = {
        projects: [], 
        projectId:"",
        projectName:'',
        projectDescription:'',
        
      }
     
     
    componentDidMount() {    

      Axios.get("http://localhost:8080/dt/api/v1/project")
          .then(res => {
            
             this.setState({ projects:res.data });
           
          })
          this.refreshProject();
    }
    handleAdd=(e)=>{ 
      e.preventDefault();
      Axios.post("http://localhost:8080/dt/api/v1/project/",{projectId:this.state.projectId,projectName:this.state.projectName,projectDescription:this.state.projectDescription})
      .then(res=>
       {
        console.log( this.state);        
        window.alert("Project added successfully");
        this.refreshProject(res);
        
       }
      ) 
      
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
   
    handleChangepid =(e)=>{
      this.setState({projectId:e.target.value});
      console.log( e);
     }
    handleChangepname =(e)=>{
      this.setState({projectName:e.target.value});
      console.log( e);
     }
     handleChangepdes =(e)=>{
      this.setState({projectDescription:e.target.value});
      console.log( e);
     }
  
    render() {
      
        return (
            <div>
            <Head />
                <div className="LeftNav">           

                <h2>Add Project</h2>
                <form onSubmit={this.handleAdd}>
                    <label>Id</label><br></br>
                    <input type="text" name="projectId" className="txtid" value={this.state.projectId}onChange={this.handleChangepid} required ></input><br></br><br></br>     
                    <label>Name</label><br></br>
                    <input type="text" name="projectName" className="txtid" value={this.state.projectName}onChange={this.handleChangepname} required></input><br></br><br></br>     
                    <label>Description</label> <br></br>                 
                    <input type="text" name="projectDescription" className="txtid" value={this.state.projectDescription}onChange={this.handleChangepdes} required></input><br></br><br></br>
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
                    <td>&nbsp;&nbsp;<a href={`/editpro/update/${p.projectId}`}><button className="editdef" onClick={()=>this.handleEdit(p.projectId)}>
                    <i className="fa fa-edit" >
                    &nbsp;Edit</i></button></a>
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
                <br></br><br></br><br></br><br></br>
                </div>
                <Footer />
            </div>
        );
    }
}
