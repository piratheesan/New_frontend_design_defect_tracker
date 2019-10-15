import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter , Switch, Route } from "react-router-dom";
import Project from './Component/Project.jsx'
import Employee from './Component/Employee.jsx'
import Defect from './Component/Defect.jsx'
import Home from './Component/Index.jsx'
import Editpro from './Component/Editproject.jsx'
import Editemp from './Component/Editemp.jsx'
import Editdef from './Component/Editdefect.jsx'

ReactDOM.render( <BrowserRouter>
    <Switch>
        <Route exact path='/' component={App}/> 
        <Route path='/home' component={Home}/>
        <Route path='/emp' component={Employee}/>
        <Route path='/pro' component={Project}/>
        <Route path='/def' component={Defect}/>
        <Route path='/editpro' component={Editpro}/>
        <Route path='/editemp' component={Editemp}/>
        <Route path='/editdef' component={Editdef}/>

    </Switch>
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
