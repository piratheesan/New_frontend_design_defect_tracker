import React, { Component } from 'react'
import './Style.css'
import Head from './Header.jsx'
import Footer from './Footer.jsx'


export default class Editdefect extends Component {
    render() {
        return (
            <div>
                <Head />
                <div className="Nav">           

                <h2>Update Defect</h2>
                <form>
                <label>Id</label><br></br>
                <input type="text" name="defectId" className="txtid" required></input><br></br><br></br>
                <label>Name</label><br></br>
                <input type="text" name="defectName" className="txtid" required></input><br></br><br></br>
                <label>Description</label><br></br>
                <input type="text" name="defectDescription" className="txtid" required></input><br></br><br></br>      
                <label>Employee ID</label> <br></br>                 
                <input type="text" name="empId" className="txtid" required></input><br></br><br></br>
                <label>Priority </label><br></br>          
                <select className="txtid" name="priorityChoices" required> 
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select><br></br><br></br> 
                <label>Project Id</label> <br></br>
                <input type="text" name="projectId" className="txtid" required></input><br></br><br></br>
                <label>Severity</label><br></br>
                <select className="txtid" name="severityChoices" required>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select><br></br><br></br>
                <label>Status</label> <br></br> 
                <input type="text" name="status" className="txtid" required></input><br></br><br></br>                      
                <button type="submit" className="save_but"> <i className="fa fa-save" >
                &nbsp;Save</i></button>                       
                &emsp;<input type="reset" Value="Reset" className="reset_but"/>
                </form>                             
                </div>
                <br></br><br></br><br></br><br></br>
                <Footer />
            </div>
        )
    }
}
