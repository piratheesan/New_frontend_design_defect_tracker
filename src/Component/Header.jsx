import React, { Component } from 'react'
import './Style.css'
import 'font-awesome/css/font-awesome.min.css';

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Defect Tracker System</h1>
                    <div className="menu">
                        <a href="/home"><button className="menu_btn">Home</button></a>
                        <a href="/pro"><button className="menu_btn">Project</button></a>
                        <a href="/def"><button className="menu_btn">Defect</button></a>
                        <a href="/emp"><button className="menu_btn">Employee</button></a>
                    </div>                        
                </header>
            </div>
        )
    }
}
