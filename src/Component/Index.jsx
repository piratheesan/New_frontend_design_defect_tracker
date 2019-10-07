import React, { Component } from 'react'
import Header from './Header.jsx'
import './Style.css'
import logo from '../image/SGIC.jpg';
import Footer from './Footer.jsx'

export default class index extends Component {
    render() {
        return (
            <div>
                <Header /> 
                <div className="LeftNav">                               
                <img src={logo} alt="logo" height="500px" width="500px"/>                
                </div>
                

                <div className="RightNavlog"> 
                <h3>Login </h3>  
                <form>
                <label>Username</label><br></br>
                <input type="text" name="name" className="txtid1"></input><br></br><br></br>     
                <label>Password</label> <br></br>                 
                <input type="password" name="type" className="txtid1"></input><br></br><br></br>
                <button className="save_but" type="submit"><i className="fa fa-sign-in" >
                &nbsp;Login</i></button>                                             
                &emsp;<input type="reset" Value="Reset" className="reset_but"/> 
                </form>                             
                </div>

                <div className="RightNavreg"> 
                <h3>Register </h3>  
                <form>
                <label>Username</label><br></br>
                <input type="text" name="name" className="txtid1"></input><br></br><br></br>     
                <label>Password</label> <br></br>                 
                <input type="password" name="type" className="txtid1"></input><br></br><br></br>
                <label>Confirm Password</label> <br></br>                 
                <input type="password" name="type" className="txtid1"></input><br></br><br></br>
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
