import React, { Component } from 'react';

import '../components/Header.css';

export default class Header extends Component {
    render() {
        return(
            <section>
                <code className="main-title">try-catch-finally <small>- a collection of javascript projects</small></code>
            </section>
        );
    }
}