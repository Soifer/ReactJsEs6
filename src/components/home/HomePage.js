import React, {Component} from 'react';
import {Link} from 'react-router';

export class HomePage extends Component {
    render() {
        return (
            <div>
                <p>
                    My tutorial app
                </p>
                <Link to="about" className="btn btn-primary btn-lg">About me</Link>
            </div>
        );
    }
}
