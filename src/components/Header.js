import React, { Component } from 'react';

import '../components/Header.css';

export default class Header extends Component {
    render() {
        return(
            <section>
                <div className="title-section">
                    <h1 className="main-title">try-catch-finally</h1>
                    <h2 className="sub-title">a collection of javascript projects</h2>
                    <div className="social-icons-div">
                        <div className="social-icon"><a target="_blank" rel="noopener noreferrer" href="https://github.com/lukesims12"><i className="fab fa-github githubIcon"></i></a></div>
                    </div>
                </div>
            </section>
        );
    }
}