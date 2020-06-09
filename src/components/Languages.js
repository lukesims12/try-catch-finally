import React, { Component } from 'react';
import Language from './Language';
import '../components/Language.css';

export default class Languages extends Component {    

    constructor(props) {
        super(props);
        this.state = {
            langauges: [
                {
                    key: 2,
                    name: "React",
                    icon: "devicon-react-original colored"
                },
                {
                    key: 3,
                    name: "Node.js",
                    icon: "devicon-nodejs-plain colored"
                },
                {
                    key: 4,
                    name: "Express",
                    icon: "devicon-express-original-wordmark colored"
                }
            ]
        }
    }



    render() {
        return(
            <div className="main-lang-div">
                <i className="devicon-javascript-plain colored lang-icon"></i>
                <div><img className="arrow-down" alt="arrow-down" src={require('../assets/img/arrow.png')} /></div>
                {this.state.langauges.map((item, index) => 
                    <Language
                        key={item.key.toString()}
                        name={item.name}
                        icon={item.icon}
                    />
                )}

            </div>
        );
    }
}