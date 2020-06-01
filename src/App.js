import React, { Component } from 'react';
import Header from './components/Header'
import Language from './components/Language';
import Footer from './components/Footer';

import './App.css';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            langauges: [
                {
                    key: 1,
                    name: "React",
                    icon: "devicon-react-original colored"
                },
                {
                    key: 2,
                    name: "Node.js",
                    icon: "devicon-nodejs-plain colored"
                },
                {
                    key: 3,
                    name: "Express",
                    icon: "devicon-express-original-wordmark colored"
                }
            ]
        }
    }

    render() {
        return (
            <div className="container">
                <Header />
                <section id="lang-outer">
                    {this.state.langauges.map((item, index) => 
                        <Language
                            key={item.key.toString()}
                            name={item.name}
                            icon={item.icon}
                        />
                    )}
                </section>
                <Footer />
            </div>
        );
    }
}

