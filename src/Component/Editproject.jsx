import React, { Component } from 'react'
import './Style.css'
import Head from './Header.jsx'
import Footer from './Footer.jsx'
import Axios from 'axios';

export default class Editproject extends Component {

    state  = {
        projects: [], 
        projectId:"",
        projectName:'',
        projectDescription:'',
        
      }

    //   componentDidMount() {    

    //     Axios.get("http://localhost:8080/dt/api/v1/project/{id}")
    //         .then(res => {
              
    //            this.setState({ projects:res.data });
             
    //         })
    //         this.refreshProject();
    //   }  
      
      componentDidMount() {
        Axios
          .get(
            "http://localhost:8080/dt/api/v1/project/{pid}" + this.props.match.params.id
          )
          .then(result => { 
    
            this.setState({             
             
              projectName: result.data.projectName,
              projectDescription: result.data.projectDescription
              
            });
          });
      }
   
    handleChangepname2 = (event) => {
        this.setState({
            projectName: event.target.value
        });
    }
    
    handleChangepdes2 = (event) => {
        this.setState({
            projectDescription: event.target.value
        });
    }
   

    onSubmithanlde = (event) => {
        event.preventDefault();
        const url="http://localhost:8080/dt/api/v1/project/update/pid"
        Axios.put(url+this.props.match.params.id,{projectName:this.state.projectName,projectDescription:this.state.projectDescription})
        window.location.reload();
        window.alert("Project updated sucessfully");
    }

    render() 
    {
        return (
            <div>
                <Head />
                <div className="Nav">           

                <h2>Update Project</h2>
                <form onSubmit={this.onSubmithanlde}>
              
                    {/* <label>Id</label><br></br> */}
                    {/* <input type="text" name="projectId" className="txtid" value={this.state.projectId}onChange={this.handleChangepid}></input><br></br><br></br>      */}
                    <label>Name</label><br></br>
                    <input type="text" name="projectName" className="txtid" value={this.state.projectName}onChange={this.handleChangepname2}></input><br></br><br></br>     
                    <label>Description</label> <br></br>                 
                    <input type="text" name="projectDescription" className="txtid" value={this.state.projectDescription}onChange={this.handleChangepdes2}></input><br></br><br></br>
                    <button className="save_but" type="submit"><i className="fa fa-save" >
                    &nbsp;Save</i></button>                                         
                    &emsp;<input type="reset" Value="Reset" className="reset_but"/> 
    
                </form>  
                
                <ul>
                    { this.state.projects.map(p => <li>{p.projectId}</li>)}
                </ul>

                                    
                </div>

                <Footer />
            </div>
        );
    }
}

