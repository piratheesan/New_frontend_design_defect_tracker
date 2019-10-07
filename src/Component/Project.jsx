import React, { Component } from 'react'
import './Style.css'
import Head from './Header.jsx'
import Footer from './Footer.jsx'

export default class Project extends Component {
    render() {
        return (
            <div>
            <Head />
                <div className="LeftNav">
                <h2>Add Project</h2>
                <form>
                    <label>Name</label><br></br>
                    <input type="text" name="name" className="txtid"></input><br></br><br></br>     
                    <label>Description</label> <br></br>                 
                    <input type="text" name="type" className="txtid"></input><br></br><br></br>
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
                <tr>
                    <td>ID</td>
                    <td>Description</td>
                    <td>Name</td>
                    <td>&nbsp;&nbsp;<button className="edit">
                    <i className="fa fa-edit" >
                    &nbsp;Edit</i></button>
                    &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;<button className="del">
                    <i className="fa fa-trash">                        
                    &nbsp;Delete
                    </i>
                    </button></td>
                </tr>
                
                 </table>                                        
                
                </div>
                <Footer />
            </div>
        )
    }
}
