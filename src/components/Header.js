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

                {/* <div className="wave-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#EFDA1B" fillOpacity="1" d="M0,256L60,240C120,224,240,192,360,170.7C480,149,600,139,720,165.3C840,192,960,256,1080,261.3C1200,267,1320,213,1380,186.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                    </svg>                
                </div> */}
            </section>
        );
    }
}