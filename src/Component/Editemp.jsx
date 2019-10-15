import React, { Component } from 'react'
import './Style.css'
import Head from './Header.jsx'
import Footer from './Footer.jsx'


export default class Editemp extends Component {
    render() {
        return (
            <div>
                <Head />
                <div className="Nav">      
                <h2>Update Employee</h2>
                <form>
                <label>Id</label><br></br>
                <input type="text" name="empId" className="txtid"></input><br></br><br></br>
                <label>Name</label><br></br>
                <input type="text" name="empName" className="txtid"></input><br></br><br></br>      
                <label>Type</label> <br></br>                 
                <input type="text" name="empType" className="txtid"></input><br></br><br></br>
                <label>Project Id</label> <br></br>          
                <input type="text" name="projectId" className="txtid"></input><br></br><br></br>
                <button className="save_but" type="submit"> <i className="fa fa-save" >
                &nbsp;Save</i></button>                       
                &emsp;<input type="reset" Value="Reset" className="reset_but"/> 
                </form> 
                                            
                </div>
                <br></br><br></br><br></br><br></br><br></br>
                
                <Footer />
            </div>
        )
    }
}
