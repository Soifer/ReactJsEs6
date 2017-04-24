import  React from "react";
import ReactDOM , {render} from "react-dom";
import { Router, Route, browserHistory } from 'react-router';
import routes from './routes';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import {Provider} from 'react-redux';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
      <Provider store={store}>
             <Router history={browserHistory} routes={routes} />
      </Provider>,       
      document.getElementById("content")
);