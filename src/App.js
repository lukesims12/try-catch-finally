import React, { Component } from 'react';
import Header from './components/Header'
import Languages from './components/Languages';
//import Footer from './components/Footer';

import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="container-outer">
                <Header />
                <div className="container">
                    <section id="lang-outer">
                        <Languages />
                    </section>
                </div>
            </div>
        );
    }
}

