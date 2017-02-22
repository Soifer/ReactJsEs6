import 'babel-polyfill';
import React from "react";
import ReactDOM from "react-dom";
import {Hello} from './components/Hello';
import {App} from './components/App';
import {Register} from './components/RegisterComponent';
import {HomePage} from './components/home/HomePage';
import {Router, Route, IndexRoute} from 'react-router';
import {AboutPage} from './components/about/AboutPage'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="register" component={Register}/>
        {/*<Route path="*" component={Hello}/>*/}
    </Route>
);