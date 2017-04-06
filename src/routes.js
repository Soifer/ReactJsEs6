import 'babel-polyfill';
import React from "react";
import ReactDOM from "react-dom";
import {Hello} from './components/Hello';
import {App} from './components/App';
import {Register} from './components/RegisterComponent';
import HomePage from './components/home/HomePage';
import {Router, Route, IndexRoute} from 'react-router';
import {AboutPage} from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="register" component={Register}/>
        <Route path="courses" component={CoursesPage}/>
        <Route path="course" component={ManageCoursePage}/>
        <Route path="course/:id" component={ManageCoursePage}/>
    </Route>
);