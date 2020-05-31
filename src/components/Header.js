import React, { Component } from 'react';

import '../components/Header.css';

export default class Header extends Component {
    render() {
        return(
            <section>
                <h1 className="main-title">try-catch-finally <small>- a collection of projects</small></h1>
            </section>
        );
    }
}