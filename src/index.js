import  React from "react";
import ReactDOM , {render} from "react-dom";
import { Router, Route, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
      <Router history={browserHistory} routes={routes} />,
      document.getElementById("content")
);