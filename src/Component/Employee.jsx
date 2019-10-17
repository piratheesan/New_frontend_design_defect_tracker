import React, { Component } from 'react'
import './Style.css'
import Head from './Header.jsx'
import Footer from './Footer.jsx'
import Axios from 'axios';

export default class Employee extends Component {
    state = {
        emp: [],
        empId:"",
        empName:'',
        empType:'',
        projectId:'',
      }

    componentDidMount() {
        Axios.get(`http://localhost:8080/dt/api/v1/emp`)
          .then(res => {
            //console.log(res);
             this.setState({ emp:res.data });
            // console.log( this.setState);
          })
          this.refreshEmp();
    }
    refreshEmp() {
        Axios.get("http://localhost:8080/dt/api/v1/emp")
        .then(res => {       
          this.setState({ emp:res.data });
        });
      }

      handleDelete = (id) => {
        Axios.delete("http://localhost:8080/dt/api/v1/emp/" + id)
        .then(res => {
        //   console.warn("Delete Service is working");
          this.refreshEmp(res);  
          window.alert(" Employee deleted successfully");
        });
      }
      handleEdit(id){
        Axios
          .get(
            `http://localhost:8080/dt/api/v1/emp/${id}`
          )
          .then(result => { 
    
            this.setState({             
              empId:result.data.empId,
              empName: result.data.empName,
              empType: result.data.empType,
              projectId: result.data.projectId,
              
            });
          });
    }
      handleAdd=(e)=>{ 
        e.preventDefault();
        Axios.post("http://localhost:8080/dt/api/v1/emp/",{
          empId:this.state.empId,
          empName:this.state.empName,
          empType:this.state.empType,
          projectId:this.state.projectId
        })
        .then(res=>
         {
          console.log( this.state);        
          window.alert("Employee added successfully");
          this.refreshEmp(res);
          
         }
        ) 
        
      }

      handleChangeeid =(e)=>{
        this.setState({empId:e.target.value});
        console.log( e);
       }
      handleChangeempname =(e)=>{
        this.setState({empName:e.target.value});
        console.log( e);
       }
       handleChangeptype =(e)=>{
        this.setState({empType:e.target.value});
        console.log( e);
       }
       handleChangepid =(e)=>{
        this.setState({projectId:e.target.value});
        console.log( e);
       }

    render() {
        console.log(this.state.emp)
        return (
            <div>
            <Head />
            <div className="LeftNav">
            <h2>Add Employee</h2>
            <form onSubmit={this.handleAdd}>
                <label>Id</label><br></br>
                <input type="text" name="empId" className="txtid" value={this.state.empId}onChange={this.handleChangeeid}></input><br></br><br></br>
                <label>Name</label><br></br>
                <input type="text" name="empName" className="txtid" value={this.state.empName}onChange={this.handleChangeempname}></input><br></br><br></br>      
                <label>Type</label> <br></br>                 
                <input type="text" name="empType" className="txtid" value={this.state.empType}onChange={this.handleChangeptype}></input><br></br><br></br>
                <label>Project Id</label> <br></br>          
                <input type="text" name="projectId" className="txtid" value={this.state.projectId}onChange={this.handleChangepid}></input><br></br><br></br>
                <button className="save_but" type="submit"> <i className="fa fa-save" >
                &nbsp;Save</i></button>                       
                &emsp;<input type="reset" Value="Reset" className="reset_but"/> 
            </form>                             
            </div>
            <div className="RightNavemp">
            <h2>View Employee</h2>
            
            <table border="2" className="tbl1 form_style">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Project Id</th>           
                <th>Action</th>
            </tr>
                             
            { this.state.emp.map(e=>{
            return( 
            <tr>
                <td>{e.empId}</td>
                <td>{e.empName}</td>
                <td>{e.empType}</td>
                <td>{e.projectId}</td>                
                <td>&nbsp;&nbsp;<button className="edit" onClick={()=>this.handleEdit(e.empId)}>
                <i className="fa fa-edit" >
                &nbsp;Edit</i></button>
                &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;<a href={`/update/${e.empId}`}><button className="del" onClick={()=>this.handleDelete(e.empId)}>
                <i className="fa fa-trash">                        
                &nbsp;Delete
                </i>
                </button></a></td>
                </tr>) 
                }) }            
            </table>                                        
            
            </div>
            <br></br><br></br><br></br><br></br><br></br>
            <Footer />
            </div>
        )
    }
}
