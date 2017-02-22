import  React from "react";
import ReactDOM from "react-dom";
import  {Hello}  from './components/Hello';
import  {Register} from './components/RegisterComponent';
import {HomePage} from './components/home/HomePage';
import { Router, Route, browserHistory } from 'react-router';
import {AboutPage} from './components/about/AboutPage'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
      <Router history={browserHistory}>         
          <Route path="/about" component={AboutPage}/>
          <Route path="/hello" component={HomePage}/>
          <Route path="/register" component={Register}/>
           <Route path="*" component={Hello}/>
     </Router>,
    document.getElementById("content")
);