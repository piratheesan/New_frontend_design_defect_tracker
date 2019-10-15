import React, { Component } from 'react'
import './Style.css'
import Head from './Header.jsx'
import Footer from './Footer.jsx'


export default class Editproject extends Component {
    render() {
        return (
            <div>
                <Head />
                <div className="Nav">           

                <h2>Update Project</h2>
                <form>
                    <label>Id</label><br></br>
                    <input type="text" name="projectId" className="txtid"  required ></input><br></br><br></br>     
                    <label>Name</label><br></br>
                    <input type="text" name="projectName" className="txtid" required></input><br></br><br></br>     
                    <label>Description</label> <br></br>                 
                    <input type="text" name="projectDescription" className="txtid" required></input><br></br><br></br>
                    <button className="save_but" type="submit"><i className="fa fa-save" >
                    &nbsp;Save</i></button>                                         
                    &emsp;<input type="reset" Value="Reset" className="reset_but"/> 
                </form>                             
                </div>

                <Footer />
            </div>
        )
    }
}
